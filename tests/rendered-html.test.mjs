import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Pratik's portfolio and Trace launcher", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Pratik Mahalle — Open Source, Infrastructure &amp; AI<\/title>/i);
  assert.match(html, /Things I&#x27;ve shipped\./);
  assert.match(html, /Ask Trace/);
  assert.match(html, /aria-label="Ask Trace, Pratik&#x27;s portfolio sidekick"/);
});

test("Trace covers the portfolio's main visitor questions", async () => {
  const trace = await readFile(new URL("../app/components/TraceSidekick.tsx", import.meta.url), "utf8");

  assert.match(trace, /What does Pratik build\?/);
  assert.match(trace, /Show me his talks/);
  assert.match(trace, /What is After Hours\?/);
  assert.match(trace, /How can I reach him\?/);
  assert.match(trace, /event\.key === "Escape"/);
  assert.match(trace, /aria-live="polite"/);
});

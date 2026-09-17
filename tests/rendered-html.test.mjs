import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
  const mainNav = html.match(/<nav[^>]*aria-label="Main navigation"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(mainNav);
  assert.doesNotMatch(mainNav, /cloudwake/i);
  assert.match(html, /aria-label="Ask Trace, Pratik&#x27;s sidekick"/);
});

test("Trace covers the portfolio's main visitor questions", async () => {
  const trace = await readFile(new URL("../app/components/TraceSidekick.tsx", import.meta.url), "utf8");

  assert.match(trace, /How do you know Pratik\?/);
  assert.match(trace, /What does Pratik build\?/);
  assert.match(trace, /Show me his talks/);
  assert.match(trace, /Are you actually AI\?/);
  assert.match(trace, /I live here rent-free/);
  assert.match(trace, /no dramatic cloud bill/);
  assert.match(trace, /outside my tiny jurisdiction/);
  assert.match(trace, /replace\(\/\\bpratk\\b\/g, "pratik"\)/);
  assert.match(trace, /event\.key === "Escape"/);
  assert.match(trace, /aria-live="polite"/);
});


test("Cloudwake has its own rendered content, metadata, and real setup destination", async () => {
  const response = await render("/cloudwake");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Cloudwake — Find the AWS spend you can do without<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/pratikmahalle.com\/cloudwake"/);
  assert.match(html, /property="og:image" content="https:\/\/pratikmahalle.com\/cloudwake\/icon.png"/);
  assert.match(html, /name="twitter:card" content="summary"/);
  assert.match(html, /href="https:\/\/github.com\/pratik-mahalle\/infralive\/releases\/download\/v0.3.3\/Cloudwake-0.3.3-macos-arm64.zip"/);
  assert.match(html, /Illustrative demo data/);
  assert.match(html, /brew tap pratik-mahalle\/tap/);
  assert.match(html, /brew install --cask pratik-mahalle\/tap\/cloudwake/);
  assert.match(html, /Early release, not notarized/);
  assert.doesNotMatch(html, /Native<\/b> SwiftUI app/);
  assert.equal((html.match(/<details/g) ?? []).length, 6);
});

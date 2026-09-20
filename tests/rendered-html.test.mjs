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
  assert.match(html, /rel="icon" href="\/favicon.png\?v=2" type="image\/png" sizes="128x128"/);
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
  assert.match(html, /<title>Cloudwake — AWS Cost Monitoring for Mac<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/pratikmahalle.com\/cloudwake"/);
  assert.match(html, /property="og:image" content="https:\/\/pratikmahalle.com\/cloudwake\/icon.png"/);
  assert.match(html, /name="twitter:card" content="summary"/);
  assert.match(html, /rel="icon" href="\/cloudwake\/favicon-32.png" type="image\/png" sizes="32x32"/);
  assert.match(html, /rel="shortcut icon" href="\/cloudwake\/favicon.ico"/);
  assert.doesNotMatch(html, /href="\/favicon.png/);
  assert.match(html, /href="https:\/\/github.com\/pratik-mahalle\/cloudwake-releases\/releases\/download\/v1.2.2\/Cloudwake-1.2.2-macos-arm64.zip"/);
  assert.match(html, /Illustrative demo data/);
  assert.match(html, /brew tap pratik-mahalle\/tap/);
  assert.match(html, /brew install --cask pratik-mahalle\/tap\/cloudwake/);
  assert.match(html, /macOS installation notes/);
  assert.match(html, /v1\.2\.2 is live/);
  assert.match(html, /Meet the new Mac panel/);
  assert.doesNotMatch(html, /MIT licensed|Free &amp; open source|Intel Macs can build from source/);
  assert.match(html, /Can I connect multiple AWS accounts/);
  assert.match(html, /Connect AWS on first launch/);
  assert.doesNotMatch(html, /Starts in demo mode|Try the demo first/);
  assert.match(html, /releases\/tag\/v1.2.2/);
  assert.doesNotMatch(html, /github.com\/pratik-mahalle\/infralive/);
  assert.doesNotMatch(html, /Native<\/b> SwiftUI app/);
  assert.equal((html.match(/<details/g) ?? []).length, 7);
  const appJson = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(appJson, "SoftwareApplication is present in server-rendered HTML");
  const app = JSON.parse(appJson);
  assert.equal(app["@type"], "SoftwareApplication");
  assert.equal(app.url, "https://pratikmahalle.com/cloudwake");
  assert.equal(app.offers.price, "0");
  assert.ok(html.includes(`href="${app.downloadUrl}"`), "Schema and visible download agree");
});

test("favicon PNGs match their declared format and dimensions", async () => {
  for (const [path, size] of [["favicon.png", 128], ["cloudwake/favicon-16.png", 16], ["cloudwake/favicon-32.png", 32]]) {
    const data = await readFile(new URL(`../public/${path}`, import.meta.url));
    assert.equal(data.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", path);
    assert.equal(data.readUInt32BE(16), size, path);
    assert.equal(data.readUInt32BE(20), size, path);
  }
});

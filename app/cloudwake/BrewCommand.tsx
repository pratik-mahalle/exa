"use client";

import { useState } from "react";

const command = "brew tap pratik-mahalle/tap\nbrew install --cask pratik-mahalle/tap/cloudwake";

export function BrewCommand() {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setMessage("Copied");
    } catch {
      setMessage("Select and copy both commands above.");
    }
  }
  return (
    <div className="cw-brew">
      <div className="cw-brew-heading"><span><span aria-hidden="true">⌘</span> Install with Homebrew</span><button type="button" onClick={copy} aria-label="Copy both Homebrew install commands">{message === "Copied" ? "Copied ✓" : "Copy commands"}</button></div>
      {/* Keyboard focus lets users scroll long commands on narrow screens. */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className="cw-brew-scroll" role="region" tabIndex={0} aria-label="Homebrew installation commands"><pre className="cw-brew-command"><code>{command}</code></pre></div>
      <span className="cw-copy-status sr-only" role="status" aria-live="polite">{message === "Copied" ? "Both Homebrew commands copied." : message}</span>
      {message && message !== "Copied" && <p className="cw-copy-error">{message}</p>}
    </div>
  );
}

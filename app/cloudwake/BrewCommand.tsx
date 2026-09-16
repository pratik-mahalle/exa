"use client";

import { useState } from "react";

const command = "brew install --cask pratik-mahalle/tap/cloudwake";

export function BrewCommand() {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setMessage("Copied");
    } catch {
      setMessage("Select and copy the command above.");
    }
  }
  return <div className="cw-brew"><p>Or install with Homebrew</p><div className="cw-brew-command"><code>{command}</code><button type="button" onClick={copy} aria-label="Copy Homebrew install command">{message === "Copied" ? "Copied ✓" : "Copy"}</button></div><span className="cw-copy-status" role="status" aria-live="polite">{message !== "Copied" ? message : "Homebrew command copied."}</span></div>;
}

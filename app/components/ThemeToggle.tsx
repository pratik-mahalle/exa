"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      const isDark = saved === "dark";
      document.documentElement.dataset.portfolioTheme = isDark ? "dark" : "light";
    } catch { /* The light theme works when browser storage is unavailable. */ }
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.portfolioTheme !== "dark";
    document.documentElement.dataset.portfolioTheme = next ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* Optional preference. */ }
  }

  return <button type="button" onClick={toggle} aria-label="Toggle light and dark theme">Change theme</button>;
}

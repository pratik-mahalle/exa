"use client";

import styles from "../portfolio.module.css";

// The saved theme is applied before first paint by the script in app/layout.tsx.
export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.portfolioTheme !== "dark";
    document.documentElement.dataset.portfolioTheme = next ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* Optional preference. */ }
  }

  return (
    <button type="button" className={styles.themeToggle} onClick={toggle} aria-label="Toggle light and dark theme">
      <svg className={styles.moon} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
      <svg className={styles.sun} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
    </button>
  );
}

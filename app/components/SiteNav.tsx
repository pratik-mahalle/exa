import styles from "../portfolio.module.css";

export const pages = [
  ["about", "About", "/"],
  ["projects", "Projects", "/projects"],
  ["community", "Community", "/community"],
  ["articles", "Articles", "/articles"],
  ["talks", "Talks", "/talks"],
  ["after-hours", "After Hours", "/after-hours"],
  ["contact", "Contact", "/contact"],
] as const;

export type Page = (typeof pages)[number][0];

// Plain anchors on purpose: vinext's client router currently throws on home links.
export function SiteNav({ current }: { current: Page }) {
  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <ul>{pages.map(([id, label, href]) => (
        <li key={id}>
          <a href={href} aria-current={current === id ? "page" : undefined}>{label}</a>
        </li>
      ))}</ul>
    </nav>
  );
}

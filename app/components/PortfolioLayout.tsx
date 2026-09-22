import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { HomeLink } from "./HomeLink";
import { ThemeToggle } from "./ThemeToggle";
import styles from "../portfolio.module.css";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell} id="top">
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <header className={styles.mobileHeader}>
        <HomeLink section="about">Pratik Mahalle</HomeLink>
        <details><summary>Menu</summary><div className={styles.mobileMenu}><SiteNav /></div></details>
      </header>
      <div className={styles.page}>
        <main className={styles.content} id="main-content" tabIndex={-1}>
          {children}
          <footer className={styles.footer}><p>© {new Date().getFullYear()} Pratik Mahalle</p><ThemeToggle /><a href="#top">Back to top</a></footer>
        </main>
        <aside className={styles.contents} aria-label="On this page">
          <p>Contents</p>
          <nav aria-label="Page contents"><ul>
            {[ ["work", "Work"], ["projects", "Projects"], ["open-source", "Community"], ["articles", "Articles"], ["talks", "Talks"], ["after-hours", "After Hours"], ["contact", "Contact me"] ].map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul></nav>
        </aside>
      </div>
    </div>
  );
}

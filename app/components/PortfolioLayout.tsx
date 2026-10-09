import type { ReactNode } from "react";
import { SiteNav, type Page } from "./SiteNav";
import { HomeLink } from "./HomeLink";
import { ThemeToggle } from "./ThemeToggle";
import styles from "../portfolio.module.css";

export function PortfolioLayout({ children, current }: { children: ReactNode; current: Page }) {
  return (
    <div className={styles.shell} id="top">
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <header className={styles.mobileHeader}>
        <HomeLink>Pratik Mahalle</HomeLink>
        <ThemeToggle />
        <details><summary>Menu</summary><div className={styles.mobileMenu}><SiteNav current={current} /></div></details>
      </header>
      <div className={styles.page}>
        <main className={styles.content} id="main-content" tabIndex={-1}>
          {children}
          <footer className={styles.footer}><p>© {new Date().getFullYear()} Pratik Mahalle</p></footer>
        </main>
      </div>
      <aside className={styles.sidebar} aria-label="Site"><SiteNav current={current} /></aside>
      <ThemeToggle />
    </div>
  );
}

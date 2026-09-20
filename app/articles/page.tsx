import { portfolioMetadata } from "../seo";
import { SiteNav } from "../components/SiteNav";
import { HomeLink } from "../components/HomeLink";
import { articles } from "../content";
import styles from "./articles.module.css";

export const metadata = portfolioMetadata(
  "Articles — Pratik Mahalle",
  "Writing by Pratik Mahalle about platform engineering, AI agents, CI/CD, build systems, and open source.",
  "/articles",
);

export default function ArticlesPage() {
  return (
    <main>
      <SiteNav current="articles" />
      <div className="inner-page-shell">
        <header className="inner-page-hero">
          <HomeLink className="back-link">← Back home</HomeLink>
          <p className="section-index">WRITING / FIELD NOTES</p>
          <h1>Articles<span>.</span></h1>
          <p>Notes on infrastructure, developer platforms, AI-assisted operations, and the engineering decisions hiding beneath the surface.</p>
        </header>

        <section className="articles-page-list" aria-label="Articles">
          {articles.map((article, index) => (
            <article className="article-row" key={article.title}>
              <span className="article-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="article-copy">
                <div className="article-meta"><span>{article.topic}</span><span>{article.date}</span></div>
                <h2><a href={article.href} target="_blank" rel="noreferrer">{article.title}</a></h2>
                <p>{article.excerpt}</p>
                <div className={styles.links}>
                  <a href={article.href} target="_blank" rel="noreferrer">Read on {article.platform} ↗</a>
                  {article.xHref && <a href={article.xHref} target="_blank" rel="noreferrer">Also on X ↗</a>}
                </div>
              </div>
              <span className="article-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </section>

        <div className={styles.publications}>
          <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">More on Medium ↗</a>
          <a href="https://x.com/pratikstwts/articles" target="_blank" rel="noreferrer">More on X ↗</a>
        </div>
      </div>
    </main>
  );
}

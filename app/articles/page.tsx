import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";
import { articles } from "../content";

export const metadata: Metadata = {
  title: "Articles — Pratik Mahalle",
  description: "Writing by Pratik Mahalle about platform engineering, AI agents, CI/CD, build systems, and open source.",
};

export default function ArticlesPage() {
  return (
    <main>
      <SiteNav current="articles" />
      <div className="inner-page-shell">
        <header className="inner-page-hero">
          <a className="back-link" href="/">← Back home</a>
          <p className="section-index">WRITING / FIELD NOTES</p>
          <h1>Articles<span>.</span></h1>
          <p>Notes on infrastructure, developer platforms, AI-assisted operations, and the engineering decisions hiding beneath the surface.</p>
        </header>

        <section className="articles-page-list" aria-label="Articles">
          {articles.map((article, index) => (
            <a className="article-row" href={article.href} key={article.title} target="_blank" rel="noreferrer">
              <span className="article-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="article-copy">
                <div className="article-meta"><span>{article.topic}</span><span>{article.date}</span></div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </div>
              <span className="article-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </section>

        <div className="page-end-link">
          <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">Read everything on Medium ↗</a>
        </div>
      </div>
    </main>
  );
}

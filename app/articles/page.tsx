import { PortfolioLayout } from "../components/PortfolioLayout";
import { articles } from "../content";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("Articles — Pratik Mahalle", "Pratik Mahalle's writing on infrastructure, developer platforms, agent memory, and the decisions behind them.", "/articles");

export default function Page() {
  return (
    <PortfolioLayout current="articles">
      <section className={styles.section} aria-labelledby="articles-title">
        <h1 id="articles-title">Articles</h1>
        <p>Writing about infrastructure, developer platforms, agent memory, and the decisions behind them.</p>
        <div className={styles.articleList}>{articles.map((article) => (
          <article className={styles.item} key={article.title}>
            <p className={styles.meta}>{article.date} · {article.topic}</p>
            <h3><a href={article.href} target="_blank" rel="noreferrer">{article.title}</a></h3>
            <p>{article.excerpt}</p>
            <p className={styles.sourceLinks}>
              <a href={article.href} target="_blank" rel="noreferrer">Read on {article.platform} ↗</a>
              {article.xHref && <a href={article.xHref} target="_blank" rel="noreferrer">Also on X ↗</a>}
            </p>
          </article>
        ))}</div>
      </section>
    </PortfolioLayout>
  );
}

import { PortfolioLayout } from "../components/PortfolioLayout";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("Contact — Pratik Mahalle", "Get in touch with Pratik Mahalle about developer tools, open source, speaking, or something you're building.", "/contact");

export default function Page() {
  return (
    <PortfolioLayout current="contact">
      <section className={styles.section} aria-labelledby="contact-title">
        <h1 id="contact-title">Contact me</h1>
        <p><a href="mailto:mahallepratik683@gmail.com">Email me</a> about developer tools, open source, speaking, or something you’re building.</p>
        <p>I’m also on <a href="https://in.linkedin.com/in/mahalle-pratik" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://x.com/pratikstwts" target="_blank" rel="noreferrer">X</a>, and <a href="https://www.instagram.com/pratiktwts/" target="_blank" rel="noreferrer">Instagram</a>. More of my writing lives on <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">Medium</a>.</p>
      </section>
    </PortfolioLayout>
  );
}

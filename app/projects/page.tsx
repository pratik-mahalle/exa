import { PortfolioLayout } from "../components/PortfolioLayout";
import { projects } from "./data";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("Projects — Pratik Mahalle", "Tools and experiments Pratik Mahalle built to understand infrastructure, AI agents, and cloud costs better.", "/projects");

export default function Page() {
  return (
    <PortfolioLayout current="projects">
      <section className={styles.section} aria-labelledby="projects-title">
        <h1 id="projects-title">Projects</h1>
        <p>Tools and experiments that started with a problem I wanted to understand better.</p>
        <div className={styles.projectList}>{projects.map((project) => (
          <article className={styles.project} key={project.name}>
            <h3><a href={project.href} target={project.href.startsWith("/") ? undefined : "_blank"} rel={project.href.startsWith("/") ? undefined : "noreferrer"}>{project.name}</a></h3>
            <p>{project.description}</p>
            <p className={styles.meta}>{project.tags.join(" · ")}</p>
          </article>
        ))}</div>
        <p><a href="https://github.com/pratik-mahalle?tab=repositories" target="_blank" rel="noreferrer">Explore more on GitHub →</a></p>
      </section>
    </PortfolioLayout>
  );
}

import { PortfolioLayout } from "./components/PortfolioLayout";
import { projects } from "./projects/data";
import styles from "./portfolio.module.css";
import { articles, talks, type Talk } from "./content";
import { portfolioMetadata, portfolioTitle, portfolioDescription, siteUrl } from "./seo";

export const metadata = portfolioMetadata(portfolioTitle, portfolioDescription, "/");

const profile = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite", "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`, name: "Pratik Mahalle", inLanguage: "en",
    },
    {
      "@type": "ProfilePage", "@id": `${siteUrl}/#profile`,
      url: `${siteUrl}/`, name: portfolioTitle, description: portfolioDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: {
        "@type": "Person", "@id": `${siteUrl}/#person`,
        name: "Pratik Mahalle", url: `${siteUrl}/`,
        image: "https://avatars.githubusercontent.com/u/124587957?v=4",
        description: "Open-source advocate building infrastructure, AI, and developer tools.",
        sameAs: [
          "https://in.linkedin.com/in/mahalle-pratik",
          "https://x.com/pratikstwts",
          "https://www.instagram.com/pratiktwts/",
          "https://pratikmahalle.medium.com",
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <PortfolioLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
      <header className={styles.profileHeader} id="about">
        <h1>Pratik Mahalle</h1>
        <figure className={styles.portraitBlock}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.portrait} src="/portrait.jpg" alt="Pratik Mahalle" width={230} height={230} />
        </figure>
        <p>I’m Pratik, a developer advocate and builder.</p>
        <p>I build tools, untangle infrastructure, and help developers make sense of both.</p>
        <p>I don’t like AI. I just happen to work around it.</p>
        <p>Pune roots. Building in Bengaluru.</p>
      </header>

      <section className={styles.section} id="work" aria-labelledby="work-title">
        <h2 id="work-title">Work</h2>
        <p>I’m a developer advocate at <a href="https://drdroid.io" target="_blank" rel="noreferrer">DrDroid</a>, working at the intersection of infrastructure, AI, and developer experience.</p>
        <p>My work moves between building tools, explaining complicated systems, and helping developers put them to use. I write code, create demos, speak at meetups, and share what I learn along the way.</p>
        <p>I’m most at home when the problem is messy, the system is distributed, and the useful answer still needs finding.</p>
      </section>

      <section className={styles.section} id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <p>Tools and experiments that started with a problem I wanted to understand better.</p>
        <div className={styles.projectList}>{projects.map((project) => (
          <article className={styles.project} key={project.name}>
            <h3><a href={project.href} target={project.href.startsWith("/") ? undefined : "_blank"} rel={project.href.startsWith("/") ? undefined : "noreferrer"}>{project.name}</a></h3>
            <p>{project.description}</p>
            <p className={styles.meta}>{project.tags.join(" · ")}</p>
          </article>
        ))}</div>
      </section>

      <section className={styles.section} id="open-source" aria-labelledby="open-source-title">
        <h2 id="open-source-title">Open source &amp; community</h2>
        <p>I’m a member of the <a href="https://opentelemetry.io/" target="_blank" rel="noreferrer">OpenTelemetry</a> community, contributing to open-source observability and learning from the people building it.</p>
        <p>In Pune, I organised meetups and hackathons that brought developers together. I still enjoy the conversations that happen around a talk as much as the talk itself.</p>
        <p>My interests include observability, cloud-native infrastructure, and how we give AI agents enough context to be useful. Most of my experiments start with a problem I’ve run into myself.</p>
        <p>You’ll find my code on <a href="https://github.com/pratik-mahalle" target="_blank" rel="noreferrer">GitHub</a>.</p>
      </section>

      <section className={styles.section} id="articles" aria-labelledby="articles-title">
        <h2 id="articles-title">Articles</h2>
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

      <section className={styles.section} id="talks" aria-labelledby="talks-title">
        <h2 id="talks-title">Talks</h2>
        <p>Conference talks and community sessions on the systems we build and the ways they fail.</p>
        {talks.filter((talk) => talk.status !== "Hosted").map((talk) => <TalkEntry key={talk.title} talk={talk} />)}
        <p>Planning a meetup or conference? <a href="mailto:mahallepratik683@gmail.com?subject=Speaking%20invitation">Invite me to speak</a>.</p>
      </section>

      <section className={styles.section} id="after-hours" aria-labelledby="after-hours-title">
        <h2 id="after-hours-title">After Hours</h2>
        <p><strong>After Hours by RelOps Studio</strong> is my conversation series about the journeys, failures, and lessons that rarely make the polished version of a tech career.</p>
        {talks.filter((talk) => talk.status === "Hosted").map((talk) => <TalkEntry key={talk.title} talk={talk} />)}
      </section>

      <section className={styles.section} id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact me</h2>
        <p><a href="mailto:mahallepratik683@gmail.com">Email me</a> about developer tools, open source, speaking, or something you’re building.</p>
        <p>I’m also on <a href="https://in.linkedin.com/in/mahalle-pratik" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://x.com/pratikstwts" target="_blank" rel="noreferrer">X</a>, and <a href="https://www.instagram.com/pratiktwts/" target="_blank" rel="noreferrer">Instagram</a>. More of my writing lives on <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">Medium</a>.</p>
      </section>
    </PortfolioLayout>
  );
}

function TalkEntry({ talk }: { talk: Talk }) {
  return (
    <article className={styles.talkItem}>
      {talk.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.talkImage} src={talk.image} alt={talk.imageAlt ?? ""} width={160} height={110} loading="lazy" />
      )}
      <p className={styles.meta}>{talk.status === "Upcoming" && <strong className={styles.upcoming}>Upcoming · </strong>}{talk.date} · {talk.event}</p>
      <h3><a href={talk.href} target="_blank" rel="noreferrer">{talk.title}</a></h3>
      <p>{talk.description}</p>
      <p className={styles.sourceLinks}><a href={talk.href} target="_blank" rel="noreferrer">{talk.linkLabel ?? (talk.status === "Hosted" ? "Watch the episode" : "View session")} ↗</a></p>
    </article>
  );
}

import { PortfolioLayout } from "./components/PortfolioLayout";
import styles from "./portfolio.module.css";
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
    <PortfolioLayout current="about">
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
      <section className={styles.section} aria-label="Work">
        <p>I’m a developer advocate at <a href="https://drdroid.io" target="_blank" rel="noreferrer">DrDroid</a>, working at the intersection of infrastructure, AI, and developer experience.</p>
        <p>I also run <a href="https://relops.studio" target="_blank" rel="noreferrer">RelOps Studio</a>, where I help startups with developer relations. It’s also home to <a href="/after-hours">After Hours</a>, my conversation series.</p>
        <p>I create content around AI and observability, and I love posting on <a href="https://x.com/pratikstwts" target="_blank" rel="noreferrer">X</a>.</p>
        <p>My work moves between building tools, explaining complicated systems, and helping developers put them to use. I write code, create demos, speak at meetups, and share what I learn along the way.</p>
        <p>I’m most at home when the problem is messy, the system is distributed, and the useful answer still needs finding.</p>
        <p>You can also find me on <a href="https://github.com/pratik-mahalle" target="_blank" rel="noreferrer">GitHub</a>, <a href="https://in.linkedin.com/in/mahalle-pratik" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://www.instagram.com/pratiktwts/" target="_blank" rel="noreferrer">Instagram</a>, and <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">Medium</a>.</p>
      </section>
    </PortfolioLayout>
  );
}

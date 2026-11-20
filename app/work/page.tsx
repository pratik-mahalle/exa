import type { CSSProperties } from "react";
import { PortfolioLayout } from "../components/PortfolioLayout";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("Work — Pratik Mahalle", "Where Pratik Mahalle has worked: founder of InfrAudit, an AI security engineer for the cloud, plus developer relations, community, and cloud infrastructure roles at DrDroid, Keploy, and more.", "/work");

const roles = [
  {
    company: "InfrAudit", href: "https://infraudit.com", role: "Founder", when: "Now",
    description: "An AI security engineer for your cloud. It finds vulnerabilities and misconfigurations across your infrastructure, tells you what to fix first, and gets your team ready for compliance audits.",
  },
  {
    company: "RelOps Studio", href: "https://relops.studio", role: "Developer relations", when: "Now",
    description: "I help startups with developer relations: content, demos, and community. It’s also home to After Hours, my conversation series.",
  },
  {
    company: "DrDroid", href: "https://drdroid.io", role: "Developer advocate", when: "Before InfrAudit",
    description: "Worked at the intersection of infrastructure, AI, and developer experience, building demos, writing, and speaking, including “Debugging Knowledge Is Infrastructure Too” at SREday Bengaluru.",
  },
  {
    company: "Exemplar Dev", role: "Community manager · Internship", when: "Jan – Mar 2026",
    description: "Helped set up the Discord developer community and restructured the technical handbook into clearer, developer-friendly docs.",
  },
  {
    company: "Xberg.io", href: "https://xberg.io", role: "Freelance software engineer · Part-time", when: "Jan – Mar 2026",
    description: "Wrote the documentation and onboarding content, and ran the technical blog, including a post on a Haystack converter that handles 91+ file formats without a cloud API.",
  },
  {
    company: "Keploy", href: "https://keploy.io", role: "DevRel · Internship", when: "Jun – Sep 2025",
    description: "Wrote blog posts, tutorials, and docs for Keploy’s API testing framework that reached over 5,000 developers. Built end-to-end demos that cut new users’ time to first test, answered questions in the Slack community, and spoke at community events.",
  },
  {
    company: "Samyak Tech Labs", role: "Cloud infrastructure intern", when: "Feb – Mar 2025",
    description: "Provisioned infrastructure on AWS and GCP, wrote automation to cut manual ops work, ran Kubernetes workloads, and set up monitoring to catch issues before they reached production.",
  },
];

export default function Page() {
  return (
    <PortfolioLayout current="work">
      <section className={styles.section} aria-labelledby="work-title">
        <h1 id="work-title">Work</h1>
        <p>Where I spend my working hours, and where I spent them before.</p>
        <ol className={styles.timeline}>{roles.map((r, i) => (
          <li className={`${styles.role} ${r.when === "Now" ? styles.now : ""}`} style={{ "--i": i } as CSSProperties} key={r.company}>
            <p className={styles.meta}>{r.when} · {r.role}</p>
            <h3>{r.href ? <a href={r.href} target="_blank" rel="noreferrer">{r.company}</a> : r.company}</h3>
            <p>{r.description}</p>
          </li>
        ))}</ol>
      </section>
    </PortfolioLayout>
  );
}

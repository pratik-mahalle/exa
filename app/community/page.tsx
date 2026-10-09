import { PortfolioLayout } from "../components/PortfolioLayout";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("Open Source & Community — Pratik Mahalle", "Pratik Mahalle's open-source contributions to OpenTelemetry, Kubernetes, Keploy and Meshery, and the developer communities he shows up for.", "/community");

const mergedPrs = (org: string) => `https://github.com/pulls?q=${encodeURIComponent(`is:pr is:merged author:pratik-mahalle org:${org}`)}`;

export default function Page() {
  return (
    <PortfolioLayout current="community">
      <section className={styles.section} aria-labelledby="open-source-title">
        <h1 id="open-source-title">Open source &amp; community</h1>
        <p>I’m a member of the <a href="https://opentelemetry.io/" target="_blank" rel="noreferrer">OpenTelemetry</a> community, and it’s where most of my open-source time goes. I write and fix docs on opentelemetry.io for Go, Python, Rust, .NET, Java and Android, and I built the CI automation that labels pull requests and welcomes first-time contributors. I’ve also contributed to the Helm charts and the .NET SDK. <a href={mergedPrs("open-telemetry")} target="_blank" rel="noreferrer">See my OpenTelemetry pull requests</a>.</p>
        <p>Beyond OpenTelemetry, I’ve written docs for Pod resize and system PriorityClasses on <a href={mergedPrs("kubernetes")} target="_blank" rel="noreferrer">Kubernetes</a> and translated its cluster administration pages into Japanese. I rewrote the Go and Java quickstarts for <a href={mergedPrs("keploy")} target="_blank" rel="noreferrer">Keploy</a>, and fixed relationship matching in <a href={`https://github.com/pulls?q=${encodeURIComponent("is:pr is:merged author:pratik-mahalle org:meshery org:layer5io")}`} target="_blank" rel="noreferrer">Meshery</a>’s MeshModels.</p>
        <p>My interests include observability, cloud-native infrastructure, and how we give AI agents enough context to be useful. Most of my experiments start with a problem I’ve run into myself.</p>
        <p>In Pune, I organised meetups and hackathons that brought developers together. I still enjoy the conversations that happen around a talk as much as the talk itself. I’ve spoken at Cloud Native Pune, Cloud Native Nagpur, OpenSSF Community Day India, SREday Bengaluru, and the AAIF Pune meetup (<a href="/talks">see all my talks</a>), and I host <a href="/after-hours">After Hours</a>, conversations with people across tech about the parts of a career that rarely make the polished version.</p>
        <p>You’ll find all of my code on <a href="https://github.com/pratik-mahalle" target="_blank" rel="noreferrer">GitHub</a>.</p>
      </section>
    </PortfolioLayout>
  );
}

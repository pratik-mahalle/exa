import { PortfolioLayout } from "../components/PortfolioLayout";
import { TalkEntry } from "../components/TalkEntry";
import { talks } from "../content";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("Talks — Pratik Mahalle", "Conference talks and community sessions by Pratik Mahalle on the systems we build and the ways they fail.", "/talks");

export default function Page() {
  return (
    <PortfolioLayout current="talks">
      <section className={styles.section} aria-labelledby="talks-title">
        <h1 id="talks-title">Talks</h1>
        <p>Conference talks and community sessions on the systems we build and the ways they fail.</p>
        {talks.filter((talk) => talk.status !== "Hosted").map((talk) => <TalkEntry key={talk.title} talk={talk} />)}
        <p>Planning a meetup or conference? <a href="mailto:mahallepratik683@gmail.com?subject=Speaking%20invitation">Invite me to speak</a>.</p>
      </section>
    </PortfolioLayout>
  );
}

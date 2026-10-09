import { PortfolioLayout } from "../components/PortfolioLayout";
import { TalkEntry } from "../components/TalkEntry";
import { talks } from "../content";
import styles from "../portfolio.module.css";
import { portfolioMetadata } from "../seo";

export const metadata = portfolioMetadata("After Hours — Pratik Mahalle", "After Hours by RelOps Studio: Pratik Mahalle's conversation series about the lessons that rarely make the polished version of a tech career.", "/after-hours");

export default function Page() {
  return (
    <PortfolioLayout current="after-hours">
      <section className={styles.section} aria-labelledby="after-hours-title">
        <h1 id="after-hours-title">After Hours</h1>
        <p><strong>After Hours by RelOps Studio</strong> is my conversation series about the journeys, failures, and lessons that rarely make the polished version of a tech career.</p>
        {talks.filter((talk) => talk.status === "Hosted").map((talk) => <TalkEntry key={talk.title} talk={talk} />)}
      </section>
    </PortfolioLayout>
  );
}

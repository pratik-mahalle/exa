import type { Talk } from "../content";
import styles from "../portfolio.module.css";

export function TalkEntry({ talk }: { talk: Talk }) {
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

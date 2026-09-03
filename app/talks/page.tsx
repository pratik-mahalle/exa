import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";
import { talks } from "../content";

export const metadata: Metadata = {
  title: "Talks — Pratik Mahalle",
  description: "Conference talks and community sessions by Pratik Mahalle about AI agents, SRE, observability, Kubernetes, and API testing.",
};

export default function TalksPage() {
  const upcomingTalks = talks.filter((talk) => talk.status === "Upcoming");
  const pastTalks = talks.filter((talk) => talk.status === "Past");

  const renderTalk = (talk: (typeof talks)[number], index: number, offset = 0) => (
    <a className={`talk-row talk-${talk.color}`} href={talk.href} key={talk.title} target="_blank" rel="noreferrer">
      <div className="talk-poster" aria-hidden="true">
        <span>{String(index + 1 + offset).padStart(2, "0")}</span><i /><b>{talk.badge}</b>
      </div>
      <div className="talk-copy">
        <div className="talk-meta"><span>{talk.event}</span><span>{talk.date}</span></div>
        <h2>{talk.title}</h2>
        <p>{talk.description}</p>
        <span className="talk-link">View session <b aria-hidden="true">↗</b></span>
      </div>
    </a>
  );

  return (
    <main>
      <SiteNav current="talks" />
      <div className="inner-page-shell">
        <header className="inner-page-hero talks-page-hero">
          <a className="back-link" href="/">← Back home</a>
          <p className="section-index">STAGES / MEETUPS / VIDEO</p>
          <h1>Talks<span>.</span></h1>
          <p>Sessions about the systems we build, the failure modes we inherit, and the context that helps teams operate both.</p>
        </header>

        <section className="talk-group" aria-labelledby="upcoming-talks">
          <div className="talk-group-heading">
            <p className="section-index">ON THE CALENDAR</p>
            <h2 id="upcoming-talks">Upcoming</h2>
          </div>
          <div className="talks-page-list">
            {upcomingTalks.map((talk, index) => renderTalk(talk, index))}
          </div>
        </section>

        <section className="talk-group" aria-labelledby="past-talks">
          <div className="talk-group-heading">
            <p className="section-index">SELECTED APPEARANCES</p>
            <h2 id="past-talks">Past talks</h2>
          </div>
          <div className="talks-page-list">
            {pastTalks.map((talk, index) => renderTalk(talk, index, upcomingTalks.length))}
          </div>
        </section>

        <div className="speaker-cta">
          <p>Planning a meetup or conference?</p>
          <a href="mailto:pratik.mahalle@drdroid.io?subject=Speaking%20invitation">Invite me to speak ↗</a>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";
import { talks } from "../content";

export const metadata: Metadata = {
  title: "Talks — Pratik Mahalle",
  description: "Conference talks and community sessions by Pratik Mahalle about AI agents, SRE, observability, Kubernetes, and API testing.",
};

export default function TalksPage() {
  const hostedSeries = talks.filter((talk) => talk.status === "Hosted");
  const upcomingTalks = talks.filter((talk) => talk.status === "Upcoming");
  const pastTalks = talks.filter((talk) => talk.status === "Past");

  const renderTalk = (talk: (typeof talks)[number], index: number, offset = 0) => (
    <a className={`talk-row talk-${talk.color}`} href={talk.href} key={talk.title} target="_blank" rel="noreferrer">
      <div className={`talk-poster${talk.image ? " talk-poster-image" : ""}`} aria-hidden={talk.image ? undefined : true}>
        {talk.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="talk-photo" src={talk.image} alt={talk.imageAlt ?? ""} />
        ) : (
          <><span>{String(index + 1 + offset).padStart(2, "0")}</span><i /></>
        )}
        <b>{talk.badge}</b>
      </div>
      <div className="talk-copy">
        <div className="talk-meta"><span>{talk.event}</span><span>{talk.date}</span></div>
        <h2>{talk.title}</h2>
        <p>{talk.description}</p>
        <span className="talk-link">{talk.linkLabel ?? "View session"} <b aria-hidden="true">↗</b></span>
      </div>
    </a>
  );

  return (
    <main>
      <SiteNav current="talks" />
      <div className="inner-page-shell">
        <header className="inner-page-hero talks-page-hero">
          <Link className="back-link" href="/">← Back home</Link>
          <p className="section-index">HOSTING / STAGES / MEETUPS / VIDEO</p>
          <h1>Talks<span>.</span></h1>
          <p>Conversations and sessions about the systems we build, the failure modes we inherit, and the context that helps teams operate both.</p>
        </header>

        <section className="talk-group" id="after-hours" aria-labelledby="hosted-series">
          <div className="talk-group-heading">
            <p className="section-index">BEHIND THE MIC</p>
            <h2 id="hosted-series">Hosted series</h2>
          </div>
          <div className="talks-page-list">
            {hostedSeries.map((talk, index) => renderTalk(talk, index))}
          </div>
        </section>

        <section className="talk-group" aria-labelledby="upcoming-talks">
          <div className="talk-group-heading">
            <p className="section-index">ON THE CALENDAR</p>
            <h2 id="upcoming-talks">Upcoming</h2>
          </div>
          <div className="talks-page-list">
            {upcomingTalks.map((talk, index) => renderTalk(talk, index, hostedSeries.length))}
          </div>
        </section>

        <section className="talk-group" aria-labelledby="past-talks">
          <div className="talk-group-heading">
            <p className="section-index">SELECTED APPEARANCES</p>
            <h2 id="past-talks">Past talks</h2>
          </div>
          <div className="talks-page-list">
            {pastTalks.map((talk, index) => renderTalk(talk, index, hostedSeries.length + upcomingTalks.length))}
          </div>
        </section>

        <aside className="almost-stage" aria-labelledby="almost-stage-title">
          <p className="section-index">THE CALENDAR WON THIS ROUND</p>
          <div>
            <h2 id="almost-stage-title">Invited, but the boarding pass never happened.</h2>
            <p>I was invited to the Observability Summit, OSS Amsterdam, and a few more stages — but dates, travel, and real life failed to reach consensus. Consider them gracefully degraded appearances. We&apos;ll retry with better backoff.</p>
            <div className="almost-stage-tags" aria-label="Events I was invited to"><span>Observability Summit</span><span>OSS Amsterdam</span><span>More plot twists</span></div>
          </div>
        </aside>

        <div className="speaker-cta">
          <p>Planning a meetup or conference?</p>
          <a href="mailto:mahallepratik683@gmail.com?subject=Speaking%20invitation">Invite me to speak ↗</a>
        </div>
      </div>
    </main>
  );
}

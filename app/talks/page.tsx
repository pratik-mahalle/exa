import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";
import { talks } from "../content";

export const metadata: Metadata = {
  title: "Talks — Pratik Mahalle",
  description: "Talks by Pratik Mahalle about SRE, observability, Kubernetes, API testing, and durable debugging knowledge.",
};

export default function TalksPage() {
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

        <section className="talks-page-list" aria-label="Talks">
          {talks.map((talk, index) => (
            <a className={`talk-row talk-${talk.color}`} href={talk.href} key={talk.title} target="_blank" rel="noreferrer">
              <div className="talk-poster" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /><b>LIVE</b></div>
              <div className="talk-copy">
                <div className="talk-meta"><span>{talk.event}</span><span>{talk.date}</span></div>
                <h2>{talk.title}</h2>
                <p>{talk.description}</p>
                <span className="talk-link">View session <b aria-hidden="true">↗</b></span>
              </div>
            </a>
          ))}
        </section>

        <div className="speaker-cta">
          <p>Planning a meetup or conference?</p>
          <a href="mailto:pratik.mahalle@drdroid.io?subject=Speaking%20invitation">Invite me to speak ↗</a>
        </div>
      </div>
    </main>
  );
}

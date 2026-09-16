import type { Metadata } from "next";
import Link from "next/link";
import { ProductPreview } from "./ProductPreview";
import { BrewCommand } from "./BrewCommand";

const repo = "https://github.com/pratik-mahalle/infralive";
const download = `${repo}/releases/download/v0.3.0/Cloudwake-0.3.0-macos-arm64.zip`;
const title = "Cloudwake — Your AWS bill, in plain sight";
const description = "AWS spending, resource changes, and savings in your Mac menu bar. Know what your team created and what is sitting unused. Optional monitoring keeps watch while your Mac sleeps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://pratikmahalle.com/cloudwake" },
  icons: { icon: "/cloudwake/logo.svg", apple: "/cloudwake/icon.png" },
  openGraph: {
    title, description, type: "website", url: "https://pratikmahalle.com/cloudwake",
    images: [{ url: "https://pratikmahalle.com/cloudwake/icon.png", width: 1024, height: 1024, alt: "Cloudwake cloud and pulse logo" }],
  },
  twitter: { card: "summary", title, description, images: ["https://pratikmahalle.com/cloudwake/icon.png"] },
};

const questions = [
  ["Is this a live view of my AWS bill?", "It shows the latest collected Cost Explorer data, from the start of the UTC month through yesterday. AWS billing is delayed and can be revised. Charges before credits, credits, and net balance are shown separately, so a credit does not hide your spending."],
  ["Will it tell me who created a resource?", "Cloudwake reads CloudTrail management events in your configured regions and shows the AWS principal behind each change. When AWS records a deployment role, you see that role. It does not guess which human used it, and coverage is not a guarantee of every resource change."],
  ["How does it decide something is unused?", "It tracks repeated observations of unattached EBS volumes and eligible AWS Stop/Delete recommendations. By default, it alerts after seven days of unused observations. It also flags qualifying AWS savings estimates. A resource being old is not enough to call it unused."],
  ["Does monitoring stop when I close my Mac?", "Local monitoring needs an awake Mac. With the optional always-on setup, the collector runs in your AWS account, checking activity every five minutes and costs every six hours by default. Alerts stay in your inbox while you are away. Native Mac banners require the app and Mac to be running."],
  ["Can Cloudwake change my infrastructure?", "Cloudwake observes your monitored infrastructure and offers evidence to review. It does not stop, resize, delete, or purchase resources for you. The optional cloud deployment creates its own monitoring resources and private state in your account."],
  ["What does it cost, and what is supported?", "The download supports Apple silicon Macs running macOS 13+ and includes Python. It is an early, unnotarized release; macOS may ask you to approve it in Privacy & Security. Intel Macs can build from source. There is no Cloudwake subscription. AWS API calls and optional cloud monitoring can incur charges. AWS is the only supported cloud today."],
];

export default function CloudwakePage() {
  return (
    <div className="cloudwake-page" id="top">
      <a className="cw-skip" href="#cloudwake-main">Skip to content</a>
      <header className="cw-header cw-shell">
        <a className="cw-brand" href="/cloudwake" aria-label="Cloudwake home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cloudwake/mark.svg" width="38" height="38" alt="" />
          <span>Cloudwake</span>
        </a>
        <nav className="cw-nav" aria-label="Cloudwake navigation">
          <a href="#features">What it does</a>
          <a href="#setup">Get started</a>
          <a href="#questions">Questions</a>
        </nav>
        <a className="cw-header-link" href={repo}>GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <main id="cloudwake-main">
        <section className="cw-hero cw-shell" aria-labelledby="cw-title">
          <div className="cw-hero-copy">
            <p className="cw-eyebrow"><span className="cw-dot" /> AWS COST MONITORING FOR YOUR MAC</p>
            <h1 id="cw-title">Your cloud bill,<br /><em>in plain sight.</em></h1>
            <p className="cw-lead">Know where the money goes, what your team just created, and what&apos;s sitting unused. Right from your menu bar.</p>
            <div className="cw-actions">
              <a className="cw-button" href={download}>Download for Mac <span aria-hidden="true">↗</span></a>
              <a className="cw-text-link" href="#features">Take a closer look <span aria-hidden="true">↓</span></a>
            </div>
            <p className="cw-install-note">Apple silicon · macOS 13+ · <a href={`${repo}/blob/main/docs/downloads.md`}>Early release, not notarized</a></p>
            <BrewCommand />
            
          </div>
          <ProductPreview />
        </section>

        <section className="cw-section cw-shell" id="features" aria-labelledby="cw-features-title">
          <div className="cw-section-heading"><p className="cw-eyebrow">LESS GUESSWORK. MORE CLARITY.</p><h2 id="cw-features-title">Catch the change.<br /><em>Find the waste.</em></h2></div>
          <div className="cw-visual-features">
            <article className="cw-visual-feature cw-changes"><div><span className="cw-feature-label">RESOURCE ACTIVITY</span><h3>Someone shipped it.<br />Now you know.</h3><p>New resources. The AWS identity behind them. One clear timeline.</p></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cloudwake/changes.png" width="840" height="1280" loading="lazy" alt="Cloudwake resource activity view with synthetic AWS creation events" />
            </article>
            <article className="cw-visual-feature cw-savings"><div><span className="cw-feature-label">SAVINGS OPPORTUNITIES</span><h3>Still running.<br />Still worth it?</h3><p>Find unused resources and review the savings AWS recommends.</p></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cloudwake/savings.png" width="840" height="1280" loading="lazy" alt="Cloudwake savings view showing example AWS recommendations and estimated savings" />
            </article>
          </div>
          <p className="cw-mockup-note">Actual app screens with illustrative demo data. Savings are estimates.</p>
        </section>

        <section className="cw-team-section" aria-labelledby="cw-team-title">
          <div className="cw-shell cw-team-grid">
            <figure className="cw-team-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cloudwake/teams.png" width="840" height="1280" loading="lazy" alt="Cloudwake dark appearance with demo spending grouped into Platform, Payments, and Unassigned projects" />
              <figcaption>Project view · Dark appearance · Demo data</figcaption>
            </figure>
            <div className="cw-team-copy"><p className="cw-eyebrow">A NAME BEHIND EVERY NUMBER</p><h2 id="cw-team-title">From “AWS spend”<br />to <em>your team&apos;s spend.</em></h2><p>See spending by <code>Project</code> or <code>Owner</code>. Keep the Unassigned costs in sight, too.</p><p className="cw-small">Requires active AWS cost-allocation tags.</p><a className="cw-text-link" href={`${repo}/blob/main/docs/always-on.md#team-spending`}>Read the tag setup guide <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="cw-always cw-shell" aria-labelledby="cw-always-title">
          <div><p className="cw-eyebrow">AWAY FROM YOUR DESK. STILL IN THE LOOP.</p><h2 id="cw-always-title">Your Mac sleeps.<br /><em>Cloudwake keeps watch.</em></h2></div>
          <div className="cw-always-copy"><p>Optional AWS monitoring keeps checking while you&apos;re away. Come back to an inbox that remembers.</p><div className="cw-cadence"><div><strong>5 min</strong><span>Activity checks</span></div><div><strong>6 hr</strong><span>Cost collection</span></div></div><p className="cw-small">Default intervals. Billing data is delayed; AWS usage charges apply.</p><a className="cw-text-link" href={`${repo}/blob/main/docs/always-on.md`}>Explore always-on monitoring <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="cw-setup-section" id="setup" aria-labelledby="cw-setup-title">
          <div className="cw-shell"><div className="cw-setup-heading"><p className="cw-eyebrow">THREE SMALL STEPS</p><h2 id="cw-setup-title">Open. Connect.<br /><em>Keep an eye on things.</em></h2></div>
            <ol className="cw-steps"><li><span>01</span><h3>Download &amp; open.</h3><p>Download the Mac app and open Cloudwake.</p></li><li><span>02</span><h3>Try the demo.</h3><p>Explore the app before connecting an account.</p></li><li><span>03</span><h3>Connect AWS.</h3><p>Pick your AWS profile in Settings. Start monitoring.</p></li></ol>
            <a className="cw-button" href={`${repo}/blob/main/docs/downloads.md`}>Open the setup guide <span aria-hidden="true">↗</span></a><p className="cw-install-note">Python included. Connect using an existing AWS profile.</p>
          </div>
        </section>

        <section className="cw-faq cw-shell" id="questions" aria-labelledby="cw-faq-title">
          <div><p className="cw-eyebrow">A FEW GOOD QUESTIONS</p><h2 id="cw-faq-title">Before you<br /><em>connect.</em></h2></div>
          <div className="cw-questions">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="cw-final cw-shell" aria-labelledby="cw-final-title"><div><p className="cw-eyebrow">A SMALL APP FOR A BIG QUESTION</p><h2 id="cw-final-title">Where is the<br /><em>money going?</em></h2></div><div><p>Keep the answer one click away.</p><a className="cw-button" href={download}>Download for Mac <span aria-hidden="true">↗</span></a><p className="cw-install-note">Source available on GitHub. Built for AWS, on Mac.</p></div></section>
      </main>

      <footer className="cw-footer cw-shell"><a className="cw-brand" href="/cloudwake">Cloudwake</a><p>Built by <Link href="/">Pratik Mahalle</Link></p><div><a href={repo}>GitHub ↗</a><a href={`${repo}/issues`}>Feedback ↗</a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

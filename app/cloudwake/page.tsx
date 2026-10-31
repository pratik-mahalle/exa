import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { HomeLink } from "../components/HomeLink";
import { BrewCommand } from "./BrewCommand";
import { DemoVideo } from "./DemoVideo";

const repo = "https://github.com/pratik-mahalle/cloudwake-releases";
const release = `${repo}/releases/tag/v1.3.0`;
const download = `${repo}/releases/download/v1.3.0/Cloudwake-1.3.0-macos-arm64.zip`;
const checkout = "https://checkout.dodopayments.com/buy/pdt_0Nqr6QaPJtEC9RV8fpKWq?quantity=1";
const notes = `${repo}/blob/main/docs/downloads.md`;
const title = "Cloudwake — AWS Cost Monitoring for Mac";
const description = "Monitor AWS costs from your Mac menu bar. Track spending, review resource changes, and find unused resources with Cloudwake. Free for one AWS account; Pro adds unlimited accounts and Slack alerts.";
const ogImage = "https://pratikmahalle.com/cloudwake/og.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://pratikmahalle.com/cloudwake" },
  icons: {
    icon: [
      { url: "/cloudwake/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/cloudwake/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/cloudwake/favicon.ico",
    apple: "/cloudwake/icon.png",
  },
  openGraph: {
    title, description, type: "website", url: "https://pratikmahalle.com/cloudwake",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Cloudwake logo with its Homebrew install command" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://pratikmahalle.com/cloudwake#app",
  name: "Cloudwake",
  url: "https://pratikmahalle.com/cloudwake",
  description,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS 13 or later (Apple silicon)",
  softwareVersion: "1.3.0",
  downloadUrl: download,
  image: "https://pratikmahalle.com/cloudwake/icon.png",
  author: { "@type": "Person", name: "Pratik Mahalle", url: "https://pratikmahalle.com/" },
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Cloudwake Pro", price: "9", priceCurrency: "USD", url: checkout, priceSpecification: { "@type": "UnitPriceSpecification", price: "9", priceCurrency: "USD", unitText: "MONTH" } },
  ],
};

// box: the mint attention frame, as % of the cropped shot (top, height); shots show the top 780×620 of a 780×1240 @2x screen.
const beats = [
  { lead: "See who", mark: "launched what.", body: "Cloudwake reads CloudTrail and lists each new resource with the AWS identity behind it. When a deploy pipeline launched it, you see the pipeline’s role.", screen: "changes", box: [39.7, 24.5], alt: "Cloudwake’s Changes tab: an EC2 instance, i-demo-staging, launched on 16 September by the deploy/pipeline role, costing about $280 a month." },
  { lead: "Find what’s", mark: "sitting idle.", body: "Unattached volumes and AWS savings recommendations, each with its estimated monthly saving. You decide what goes; Cloudwake never stops or deletes anything.", screen: "savings", box: [35.8, 29], alt: "Cloudwake’s Savings tab: rightsize a staging instance for $142.30 a month, and review an unattached volume for $40.00 a month." },
  { lead: "A nudge before", mark: "the bill.", body: "When a resource looks unused, or the forecast passes a budget you set, a small cloud taps you on the shoulder. Every alert waits in the inbox, and on Pro it reaches your team in Slack.", screen: "inbox", box: [39.7, 22.9], alt: "Cloudwake’s Inbox with three open alerts: a resource unused at checks for 7 days, a monthly forecast over budget, and a new EBS volume.", bubble: true },
];

const plans = {
  free: ["One AWS account", "Spend, forecast and the services behind it", "Who launched what, from CloudTrail", "Idle resources and AWS savings estimates", "Companion nudges and an alert inbox"],
  pro: [
    ["Unlimited AWS accounts", "Production, staging, every client account."],
    ["Slack alerts, with who did it", "Spend spikes, budget overruns, new resources and the AWS identity behind them."],
    ["Monday team digest", "Last week against the week before, top movers, changes and savings."],
    ["Works while your Mac sleeps", "The always-on monitor in your AWS account posts to Slack."],
  ],
};

const steps = [
  ["Install Cloudwake.", "Use Homebrew or download the app. Everything it needs to run comes inside."],
  ["Connect your AWS account.", "Setup opens on first launch. Pick a profile or paste credentials. SSO is optional."],
  ["Watch the menu bar.", "Spend, changes and savings show up there. On Pro, add every account you run and connect Slack."],
];

const questions = [
  ["Can I connect multiple AWS accounts?", "Yes, with Cloudwake Pro. The free plan monitors one AWS account. If you monitored several before v1.3.0, they keep syncing for 30 days, and accounts that stop syncing keep their last data readable. Add each account using its own AWS profile or pasted credentials, then switch accounts from the menu. Spending, activity, savings and inboxes stay separate. Other accounts keep monitoring, and notification banners identify the account. Local monitoring needs the app open and your Mac awake; optional always-on monitoring is configured separately for each account."],
  ["Is this a live view of my AWS bill?", "It shows the latest collected Cost Explorer data, from the start of the UTC month through yesterday. AWS billing is delayed and can be revised. Charges before credits, credits, and net balance are shown separately, so a credit does not hide your spending."],
  ["Will it tell me who created a resource?", "Cloudwake reads CloudTrail management events in your configured regions and shows the AWS principal behind each change. When AWS records a deployment role, you see that role. It does not guess which human used it, and coverage is not a guarantee of every resource change."],
  ["How does it decide something is unused?", "It tracks repeated observations of unattached EBS volumes and eligible AWS Stop/Delete recommendations. By default, it alerts after seven days of unused observations. It also flags qualifying AWS savings estimates. A resource being old is not enough to call it unused."],
  ["Does monitoring stop when I close my Mac?", "Local monitoring needs an awake Mac. With an existing always-on setup, the collector runs in your AWS account, checking activity every five minutes and costs every six hours by default. Alerts stay in your inbox while you are away. Native Mac banners require the app and Mac to be running. New cloud deployments require assisted setup."],
  ["Can Cloudwake change my infrastructure?", "Cloudwake observes your monitored infrastructure and offers evidence to review. It does not stop, resize, delete, or purchase resources for you. The optional cloud deployment creates its own monitoring resources and private state in your account."],
  ["What does it cost, and what is supported?", "The download supports Apple silicon Macs running macOS 13+ and includes Python. The app is not Apple-notarized; macOS may ask you to approve it in Privacy & Security. Intel Macs are not currently supported. Cloudwake is free for one AWS account. Cloudwake Pro is $9 a month per team for unlimited accounts, Slack alerts and the Monday digest, and you can cancel anytime from the Dodo customer portal. AWS API calls and optional cloud monitoring can incur AWS charges. AWS is the only supported cloud today."],
  ["What does Pro share, and with whom?", "Your license key is checked with Dodo Payments, which handles checkout. Only the key and a fixed device label are sent, never your AWS data. Slack alerts and the Monday digest go only to the Slack webhook you choose. Cloudwake runs no server of its own."],
];

function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M73 69C86 69 92 59 90 48C88 39 80 33 70 34C67 21 57 15 45 18C34 20 27 29 26 39C15 38 8 46 9 56C9 64 15 69 24 69H34L42 51L53 80L63 60L68 69H73" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CloudwakePage() {
  return (
    <div className="cloudwake-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication).replace(/</g, "\\u003c") }}
      />
      <a className="cw-skip" href="#cloudwake-main">Skip to content</a>
      <header className="cw-menubar">
        <div className="cw-menubar-inner">
          <a className="cw-brand" href="/cloudwake" aria-label="Cloudwake home"><Mark /><span>Cloudwake</span></a>
          <nav className="cw-nav" aria-label="Cloudwake navigation"><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="#install">Install</a><a href="#questions">Questions</a><a href={repo}>Releases</a></nav>
          <a className="cw-menubar-download" href={download}>Download</a>
          {/* The app's own menu-bar item; the hero panel hangs from it. */}
          <span className="cw-extra" aria-hidden="true"><Mark />$4,035</span>
        </div>
      </header>

      <main id="cloudwake-main">
        <section className="cw-hero cw-shell" aria-labelledby="cw-title">
          <div className="cw-hero-copy">
            <h1 id="cw-title"><span className="cw-line"><span>AWS bills</span></span><span className="cw-line"><span>arrive too</span></span><span className="cw-line"><span><span className="cw-mark">late.</span></span></span></h1>
            <p className="cw-lead">Cloudwake keeps your AWS spend in your Mac’s menu bar. See who launched what, what it costs, and what’s sitting idle while there’s still time to act.</p>
            <div className="cw-actions"><a className="cw-button" href={download}>Download for Mac</a><a className="cw-text-link" href="#watch-demo">Watch the 15-second film</a></div>
            <BrewCommand />
            <p className="cw-platform">Free for one AWS account, on Apple silicon Macs with macOS 13 or later. Connect AWS on first launch. <a href={notes}>macOS installation notes</a></p>
            <a className="cw-launch" href="#pricing"><strong>v1.3.0 is live.</strong> Meet Cloudwake Pro</a>
          </div>
          <div className="cw-hero-app">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cw-panel" src="/cloudwake/ui/overview.png" width="390" height="620" alt="Cloudwake’s menu bar panel: $4,035 spent this month through 15 September, 44% of the $9,210 forecast and up 16% on the previous 7 days, above a 14-day daily spend chart. Illustrative demo data." />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cw-bubble" src="/cloudwake/ui/bubble.png" width="410" height="188" alt="The Cloudwake companion: This might be sitting idle. An unused resource could save you about $40/month." />
          </div>
        </section>

        <section className="cw-film cw-shell" id="watch-demo" aria-labelledby="cw-film-title">
          <h2 id="cw-film-title">Fifteen seconds, sound on.</h2>
          <DemoVideo />
        </section>

        <section className="cw-beats cw-shell" id="how-it-works" aria-labelledby="cw-how-title">
          <h2 id="cw-how-title" className="sr-only">How it works</h2>
          {beats.map((beat) => (
            <article className="cw-beat" key={beat.screen}>
              <h3><span className="cw-line"><span>{beat.lead}</span></span> <span className="cw-line"><span><span className="cw-mark">{beat.mark}</span></span></span></h3>
              <p>{beat.body}</p>
              <figure className="cw-shot" style={{ "--box-top": `${beat.box[0]}%`, "--box-height": `${beat.box[1]}%` } as CSSProperties}>
                <div className="cw-shot-crop">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/cloudwake/ui/${beat.screen}.png`} width="390" height="620" loading="lazy" alt={beat.alt} />
                  <span className="cw-attention" aria-hidden="true" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {beat.bubble && <img className="cw-shot-bubble" src="/cloudwake/ui/bubble.png" width="410" height="188" loading="lazy" alt="" />}
              </figure>
            </article>
          ))}
          <p className="cw-note">Screens from Cloudwake v1.3.0 on the free plan, with illustrative demo data. AWS billing data is delayed, savings are estimates, and resource activity depends on CloudTrail coverage.</p>
        </section>

        <section className="cw-pricing" id="pricing" aria-labelledby="cw-pricing-title">
          <div className="cw-shell">
            <h2 id="cw-pricing-title">Free for one account. Pro for the whole team.</h2>
            <div className="cw-plans">
              <article className="cw-plan" aria-labelledby="cw-plan-free">
                <h3 id="cw-plan-free">Free</h3>
                <p className="cw-price">$0</p>
                <p className="cw-plan-lead">Everything in the menu bar, for one AWS account.</p>
                <ul>{plans.free.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="cw-button cw-button-light" href={download}>Download for Mac</a>
              </article>
              <article className="cw-plan cw-plan-pro" aria-labelledby="cw-plan-pro">
                <h3 id="cw-plan-pro">Cloudwake Pro</h3>
                <p className="cw-price">$9<span> a month per team</span></p>
                <p className="cw-plan-lead">Everything in Free, plus:</p>
                <ul>{plans.pro.map(([item, detail]) => <li key={item}><strong>{item}</strong> {detail}</li>)}</ul>
                <a className="cw-button cw-button-mint" href={checkout}>Get Cloudwake Pro</a>
                <p className="cw-plan-note">Secure checkout by Dodo Payments. Paste your license key in Settings → Cloudwake Pro; one key works on up to 10 Macs. Cancel anytime.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cw-install cw-shell" id="install" aria-labelledby="cw-install-title">
          <h2 id="cw-install-title">Running in three steps.</h2>
          <div>
            <ol className="cw-steps">{steps.map(([step, detail]) => <li key={step}><h3>{step}</h3><p>{detail}</p></li>)}</ol>
            <p className="cw-install-more"><a href={notes}>Read the setup guide</a> or the <a href={release}>v1.3.0 release notes</a>. AWS API calls and optional cloud monitoring can add to your AWS bill.</p>
            <p className="cw-always"><strong>Mac asleep?</strong> Cloudwake can keep checking from inside your AWS account. <a href={`${repo}/blob/main/docs/always-on.md`}>Set up always-on monitoring</a></p>
          </div>
        </section>

        <section className="cw-faq cw-shell" id="questions" aria-labelledby="cw-faq-title"><h2 id="cw-faq-title">Before you connect.</h2><div className="cw-questions">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="cw-final cw-shell" aria-labelledby="cw-final-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cloudwake/logo.svg" width="112" height="112" alt="" />
          <h2 id="cw-final-title">Cloudwake</h2>
          <p>Make room for what’s worth running.</p>
          <div className="cw-actions"><a className="cw-button" href={download}>Get Cloudwake for Mac</a><a className="cw-text-link" href={checkout}>Or go Pro for $9 a month</a></div>
        </section>
      </main>

      <footer className="cw-footer cw-shell"><p>Built by <HomeLink>Pratik Mahalle</HomeLink></p><div><a href={repo}>Downloads</a><a href={`${repo}/issues`}>Feedback</a></div></footer>
    </div>
  );
}

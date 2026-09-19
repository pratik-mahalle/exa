import type { Metadata } from "next";
import { HomeLink } from "../components/HomeLink";
import { ProductPreview } from "./ProductPreview";
import { BrewCommand } from "./BrewCommand";

const repo = "https://github.com/pratik-mahalle/cloudwake-releases";
const release = `${repo}/releases/tag/v1.2.2`;
const download = `${repo}/releases/download/v1.2.2/Cloudwake-1.2.2-macos-arm64.zip`;
const title = "Cloudwake — Find the AWS spend you can do without";
const description = "AWS spending, resource changes, and savings in your Mac menu bar. Know what your team created and what is sitting unused. Optional monitoring keeps watch while your Mac sleeps.";

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
    images: [{ url: "https://pratikmahalle.com/cloudwake/icon.png", width: 1024, height: 1024, alt: "Cloudwake cloud and pulse logo" }],
  },
  twitter: { card: "summary", title, description, images: ["https://pratikmahalle.com/cloudwake/icon.png"] },
};

const questions = [
  ["Can I connect multiple AWS accounts?", "Yes. Add each account using its own AWS profile or pasted credentials, then switch accounts from the menu. Spending, activity, savings and inboxes stay separate. Other accounts keep monitoring, and notification banners identify the account. Local monitoring needs the app open and your Mac awake; optional always-on monitoring is configured separately for each account."],
  ["Is this a live view of my AWS bill?", "It shows the latest collected Cost Explorer data, from the start of the UTC month through yesterday. AWS billing is delayed and can be revised. Charges before credits, credits, and net balance are shown separately, so a credit does not hide your spending."],
  ["Will it tell me who created a resource?", "Cloudwake reads CloudTrail management events in your configured regions and shows the AWS principal behind each change. When AWS records a deployment role, you see that role. It does not guess which human used it, and coverage is not a guarantee of every resource change."],
  ["How does it decide something is unused?", "It tracks repeated observations of unattached EBS volumes and eligible AWS Stop/Delete recommendations. By default, it alerts after seven days of unused observations. It also flags qualifying AWS savings estimates. A resource being old is not enough to call it unused."],
  ["Does monitoring stop when I close my Mac?", "Local monitoring needs an awake Mac. With an existing always-on setup, the collector runs in your AWS account, checking activity every five minutes and costs every six hours by default. Alerts stay in your inbox while you are away. Native Mac banners require the app and Mac to be running. New cloud deployments require assisted setup."],
  ["Can Cloudwake change my infrastructure?", "Cloudwake observes your monitored infrastructure and offers evidence to review. It does not stop, resize, delete, or purchase resources for you. The optional cloud deployment creates its own monitoring resources and private state in your account."],
  ["What does it cost, and what is supported?", "The download supports Apple silicon Macs running macOS 13+ and includes Python. The app is not Apple-notarized; macOS may ask you to approve it in Privacy & Security. Intel Macs are not currently supported. The current download is available at no charge. AWS API calls and optional cloud monitoring can incur charges. AWS is the only supported cloud today."],
];

export default function CloudwakePage() {
  return (
    <div className="cloudwake-page" id="top">
      <a className="cw-skip" href="#cloudwake-main">Skip to content</a>
      <header className="cw-header cw-shell">
        <a className="cw-brand" href="/cloudwake" aria-label="Cloudwake home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cloudwake/logo.svg" width="32" height="32" alt="" /><span>Cloudwake</span>
        </a>
        <nav className="cw-nav" aria-label="Cloudwake navigation"><a href="#the-app">Explore the app</a><a href="#questions">FAQs</a><a href={repo}>Releases ↗</a></nav>
        <a className="cw-header-link" href={download}>Download <span aria-hidden="true">↓</span></a>
      </header>

      <main id="cloudwake-main">
        <section className="cw-hero cw-shell" aria-labelledby="cw-title">
          <a className="cw-launch" href={release}><span className="cw-dot" aria-hidden="true" /><strong>v1.2.2 is live</strong><span>Meet the new Mac panel</span><span aria-hidden="true">↗</span></a>
          <p className="cw-eyebrow"><span className="cw-dot" /> AWS COST MONITORING FOR MAC</p>
          <h1 id="cw-title">Find the AWS spend<br />you can <span>do without.</span></h1>
          <p className="cw-lead">See what your team launched, what it costs, and what&apos;s sitting idle. Across your AWS accounts, from one Mac menu bar.</p>
          <div className="cw-actions"><a className="cw-button" href={download}>Download for Mac <span aria-hidden="true">↓</span></a><a className="cw-text-link" href="#the-app">See it in action <span aria-hidden="true">↘</span></a></div>
          <p className="cw-platform">Apple silicon · macOS 13+</p>
          <BrewCommand />
          <p className="cw-install-note"><a href={`${repo}/blob/main/docs/downloads.md`}>macOS installation notes</a> · Connect AWS on first launch</p>
        </section>

        <section className="cw-showcase cw-shell" id="the-app" aria-labelledby="cw-app-title">
          <div className="cw-showcase-heading"><h2 id="cw-app-title">Three questions. One small app.</h2><p>Take a look around.</p></div>
          <ProductPreview />
          <p className="cw-mockup-note">AWS billing data is delayed. Savings are estimates. Resource activity depends on CloudTrail coverage.</p>
        </section>

        <section className="cw-start cw-shell" id="install" aria-labelledby="cw-start-title">
          <div className="cw-start-heading"><p className="cw-eyebrow">LESS SETUP. MORE VISIBILITY.</p><h2 id="cw-start-title">From install<br />to insight.</h2><a className="cw-text-link" href={`${repo}/blob/main/docs/downloads.md`}>Read the setup guide <span aria-hidden="true">↗</span></a></div>
          <ol className="cw-steps"><li><span>01</span><div><h3>Install Cloudwake.</h3><p>Use Homebrew or download the Mac app. Everything you need to run it is included.</p></div></li><li><span>02</span><div><h3>Connect your AWS account.</h3><p>Account setup opens on first launch. Choose a profile or paste credentials. SSO is optional.</p></div></li><li><span>03</span><div><h3>Keep an eye on spending.</h3><p>See costs, resource changes, and savings. Connect more accounts whenever you need.</p></div></li></ol>
        </section>

        <aside className="cw-always cw-shell"><div><span className="cw-dot" /><h2>Mac asleep? Keep monitoring.</h2><p>Optional monitoring runs in your AWS account while you&apos;re away.</p></div><a className="cw-text-link" href={`${repo}/blob/main/docs/always-on.md`}>Always-on setup <span aria-hidden="true">↗</span></a></aside>

        <section className="cw-faq cw-shell" id="questions" aria-labelledby="cw-faq-title"><div><p className="cw-eyebrow">BEFORE YOU CONNECT</p><h2 id="cw-faq-title">A few details.</h2></div><div className="cw-questions">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="cw-final" aria-labelledby="cw-final-title"><div className="cw-shell"><div><p className="cw-eyebrow">A LITTLE LESS CLOUD WASTE</p><h2 id="cw-final-title">Make room for<br />what&apos;s worth running.</h2></div><div><a className="cw-button" href={download}>Get Cloudwake for Mac <span aria-hidden="true">↓</span></a><p>Free to download. Connect your AWS account.</p></div></div></section>
      </main>

      <footer className="cw-footer cw-shell"><a className="cw-brand" href="/cloudwake">Cloudwake<span className="cw-dot" /></a><p>Built by <HomeLink>Pratik Mahalle</HomeLink></p><div><a href={repo}>Downloads ↗</a><a href={`${repo}/issues`}>Feedback ↗</a></div></footer>
    </div>
  );
}

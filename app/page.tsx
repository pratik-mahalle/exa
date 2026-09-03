const projects = [
  {
    number: "01", name: "InfraAudit", type: "Infrastructure intelligence",
    description: "A practical way to inspect infrastructure, surface risk, and turn noisy findings into an actionable engineering view.",
    tags: ["Platform", "Security", "Developer tooling"], href: "https://github.com/pratik-mahalle/InfraAudit", color: "lime",
  },
  {
    number: "02", name: "OpsBot", type: "AI for reliability",
    description: "An AI-powered SRE agent designed to help teams investigate incidents and move from signals to useful answers faster.",
    tags: ["AI agents", "SRE", "TypeScript"], href: "https://github.com/pratik-mahalle/opsbot", color: "orange",
  },
  {
    number: "03", name: "k8s-mcp", type: "Cloud-native interface",
    description: "A Kubernetes MCP experiment that makes cluster context easier for AI tools to understand and act on.",
    tags: ["Kubernetes", "MCP", "Open source"], href: "https://github.com/pratik-mahalle/k8s-mcp", color: "blue",
  },
  {
    number: "04", name: "Failproof Chaos", type: "AI safety tooling",
    description: "A red-team harness for pressure-testing AI policies against adversarial and unexpected behavior.",
    tags: ["Red teaming", "AI safety", "JavaScript"], href: "https://github.com/pratik-mahalle/failproof-chaos", color: "pink",
  },
];

const highlights = [
  "Building at the intersection of infrastructure, AI agents, and developer experience.",
  "Contributing to cloud-native and observability communities, including OpenTelemetry.",
  "Explaining complex infrastructure ideas through talks, writing, demos, and community work.",
  "Exploring reliable interfaces between engineers, Kubernetes, and autonomous systems.",
];

const articles = [
  {
    title: "An AI Agent Without Context Is a Fighter Jet Without Radar",
    excerpt: "Why capable agents still fail inside specialized domains — and what changes when context becomes structured, inspectable infrastructure.",
    date: "Aug 13, 2026",
    topic: "Context engineering",
    href: "https://pratikmahalle.medium.com/an-ai-agent-without-context-is-a-fighter-jet-without-radar-a0a1375d65cc",
  },
  {
    title: "Your Build Isn’t Slow. Your Runner Queue Is.",
    excerpt: "A look at the hidden wait time in CI, why faster compilation does not fix it, and the trade-offs behind runner infrastructure.",
    date: "Jul 21, 2026",
    topic: "CI/CD",
    href: "https://pratikmahalle.medium.com/your-build-isnt-slow-your-runner-queue-is-d58977317c37",
  },
  {
    title: "Why Most Internal Developer Platforms Fail",
    excerpt: "Great engineering is not enough. Internal platforms work when teams treat adoption, golden paths, and developer trust as product problems.",
    date: "Jul 12, 2026",
    topic: "Platform engineering",
    href: "https://pratikmahalle.medium.com/platform-as-a-product-treating-your-internal-developer-platform-like-a-customer-facing-one-f99cc3dac190",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="nav-mark" href="#top" aria-label="Back to top">PM<span className="mark-dot">.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#writing">Writing</a><a href="#notes">Now</a></div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </nav>

      <div className="site-shell" id="top">
        <header className="hero" aria-labelledby="hero-title">
          <div className="portrait-wrap">
            <div className="portrait-shadow" aria-hidden="true" />
            <div className="portrait-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://avatars.githubusercontent.com/u/124587957?v=4" alt="Pratik Mahalle" className="portrait-image" />
              <span className="portrait-caption">Pune, India · 18.52° N</span>
            </div>
            <span className="orbit-note orbit-note-one">open source</span>
            <span className="orbit-note orbit-note-two">always building</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Hey, I&apos;m</p>
            <h1 id="hero-title">Pratik<br />Mahalle<span>.</span></h1>
            <p className="pronunciation">(pruh-teek · muh-hall-ay)</p>
            <p className="hero-line">Open-source advocate building useful things at the intersection of <strong>infrastructure × AI × developer experience.</strong></p>
            <div className="social-row" aria-label="Social profiles">
              <a href="https://github.com/pratik-mahalle" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://x.com/pratikstwts" target="_blank" rel="noreferrer">X ↗</a>
              <a href="https://in.linkedin.com/in/mahalle-pratik" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">Medium ↗</a>
              <a href="mailto:pratik.mahalle@drdroid.io">Email ↗</a>
            </div>
          </div>
        </header>

        <section className="intro-section" id="about">
          <p className="section-index">01 / ABOUT</p>
          <div className="intro-copy">
            <p className="lead">I like turning complex infrastructure problems into products, stories, and tools that developers actually want to use.</p>
            <div className="intro-grid">
              <p>My work moves between platform engineering, DevRel, open source, and applied AI. I&apos;m most at home when the problem is messy, the system is distributed, and the useful answer still needs finding.</p>
              <p>These days I&apos;m building with <a href="https://opentelemetry.io/" target="_blank" rel="noreferrer">OpenTelemetry</a>, experimenting with agentic tooling, and sharing what I learn with cloud-native communities.</p>
            </div>
          </div>
        </section>

        <section className="highlights-section" aria-labelledby="highlights-title">
          <p className="section-index">A FEW THINGS</p>
          <div>
            <h2 id="highlights-title">So far, I&apos;ve been busy...</h2>
            <ul className="highlights-list">
              {highlights.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
            </ul>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="section-index">02 / SELECTED WORK</p><h2 id="work-title">Things I&apos;ve shipped.</h2></div>
            <p>Small tools, ambitious experiments, and infrastructure with opinions.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className={`project-card project-${project.color}`} href={project.href} key={project.name} target="_blank" rel="noreferrer">
                <div className="project-topline"><span>{project.number}</span><span>{project.type}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                <div className="project-visual" aria-hidden="true"><span>{project.name.slice(0, 2).toUpperCase()}</span><i /><b>RUNNING</b></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="writing-section" id="writing" aria-labelledby="writing-title">
          <div className="section-heading writing-heading">
            <div><p className="section-index">03 / WRITING</p><h2 id="writing-title">Notes from the field.</h2></div>
            <a className="all-writing-link" href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">All stories on Medium ↗</a>
          </div>
          <div className="article-list">
            {articles.map((article, index) => (
              <a className="article-row" href={article.href} key={article.title} target="_blank" rel="noreferrer">
                <span className="article-number">0{index + 1}</span>
                <div className="article-copy">
                  <div className="article-meta"><span>{article.topic}</span><span>{article.date}</span></div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <span className="article-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="now-section" id="notes" aria-labelledby="now-title">
          <p className="section-index">04 / RIGHT NOW</p>
          <div className="now-copy">
            <h2 id="now-title">Currently curious about...</h2>
            <div className="ticker" aria-label="Current interests"><span>AI-native operations</span><i>✦</i><span>Observability</span><i>✦</i><span>Developer communities</span><i>✦</i><span>Reliable agents</span></div>
            <p>How we give autonomous systems enough context to be useful — and enough guardrails to be trusted. I&apos;m writing code, breaking prototypes, and documenting the parts worth keeping.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-index">05 / CONTACT</p>
          <div>
            <p className="contact-kicker">Have a hard infrastructure problem?</p>
            <h2>Let&apos;s make it<br /><em>understandable.</em></h2>
            <a className="contact-button" href="mailto:pratik.mahalle@drdroid.io">Start a conversation <span aria-hidden="true">↗</span></a>
            <div className="contact-socials" aria-label="Contact and social links">
              <a href="mailto:pratik.mahalle@drdroid.io">Mail</a>
              <a href="https://in.linkedin.com/in/mahalle-pratik" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://x.com/pratikstwts" target="_blank" rel="noreferrer">X / Twitter</a>
              <a href="https://pratikmahalle.medium.com" target="_blank" rel="noreferrer">Medium</a>
            </div>
          </div>
        </section>

        <footer><p>Pratik Mahalle © {new Date().getFullYear()}</p><p>Built with curiosity in Pune.</p><a href="#top">Back to top ↑</a></footer>
      </div>
    </main>
  );
}

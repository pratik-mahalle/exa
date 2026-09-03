type SiteNavProps = {
  current?: "home" | "articles" | "talks";
};

export function SiteNav({ current = "home" }: SiteNavProps) {
  return (
    <nav className="nav-wrap" aria-label="Main navigation">
      <a className="nav-mark" href="/" aria-label="Go to homepage">
        PM<span className="mark-dot">.</span>
      </a>
      <div className="nav-links">
        <a href="/" aria-current={current === "home" ? "page" : undefined}>Home</a>
        <a href="/articles" aria-current={current === "articles" ? "page" : undefined}>Articles</a>
        <a href="/talks" aria-current={current === "talks" ? "page" : undefined}>Talks</a>
      </div>
      <a className="nav-cta" href="mailto:pratik.mahalle@drdroid.io">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

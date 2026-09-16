import Link from "next/link";

type SiteNavProps = {
  current?: "home" | "articles" | "talks";
};

export function SiteNav({ current = "home" }: SiteNavProps) {
  return (
    <nav className="nav-wrap" aria-label="Main navigation">
      <Link className="nav-mark" href="/" aria-label="Go to homepage">
        PM<span className="mark-dot">.</span>
      </Link>
      <div className="nav-links">
        <Link href="/" aria-current={current === "home" ? "page" : undefined}>Home</Link>
        <a href="/articles" aria-current={current === "articles" ? "page" : undefined}>Articles</a>
        <a href="/talks" aria-current={current === "talks" ? "page" : undefined}>Talks</a>
        <a href="/cloudwake">Cloudwake</a>
      </div>
      <a className="nav-cta" href="mailto:mahallepratik683@gmail.com">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

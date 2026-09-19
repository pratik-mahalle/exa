import { HomeLink } from "./HomeLink";

type SiteNavProps = {
  current?: "home" | "articles" | "talks";
};

export function SiteNav({ current = "home" }: SiteNavProps) {
  return (
    <nav className="nav-wrap" aria-label="Main navigation">
      <HomeLink className="nav-mark" aria-label="Go to homepage">
        PM<span className="mark-dot">.</span>
      </HomeLink>
      <div className="nav-links">
        <HomeLink aria-current={current === "home" ? "page" : undefined}>Home</HomeLink>
        <a href="/articles" aria-current={current === "articles" ? "page" : undefined}>Articles</a>
        <a href="/talks" aria-current={current === "talks" ? "page" : undefined}>Talks</a>
      </div>
      <a className="nav-cta" href="mailto:mahallepratik683@gmail.com">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

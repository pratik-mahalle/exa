import type { ComponentProps } from "react";

// Use document navigation: vinext's client router currently throws on home links.
export function HomeLink({ children, ...props }: Omit<ComponentProps<"a">, "href">) {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages -- Avoid the broken client router.
    <a {...props} href="/">{children}</a>
  );
}

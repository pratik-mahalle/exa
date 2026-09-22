import type { ComponentProps } from "react";

// Use document navigation: vinext's client router currently throws on home links.
export function HomeLink({ children, section, ...props }: Omit<ComponentProps<"a">, "href"> & { section?: string }) {
  return (
    <a {...props} href={section ? `/#${section}` : "/"}>{children}</a>
  );
}

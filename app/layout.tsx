import type { Metadata } from "next";
import { TraceSidekick } from "./components/TraceSidekick";
import { portfolioMetadata, portfolioTitle, portfolioDescription } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  ...portfolioMetadata(portfolioTitle, portfolioDescription),
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png", sizes: "128x128" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<TraceSidekick /></body></html>;
}

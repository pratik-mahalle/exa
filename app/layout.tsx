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

// Runs before paint so a saved dark theme does not flash light on each page load.
const themeScript = `try{document.documentElement.dataset.portfolioTheme=localStorage.getItem("portfolio-theme")==="dark"?"dark":"light"}catch{}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}<TraceSidekick /></body>
    </html>
  );
}

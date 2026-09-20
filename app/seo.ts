import type { Metadata } from "next";

export const siteUrl = "https://pratikmahalle.com";
export const portfolioTitle = "Pratik Mahalle — Open Source, Infrastructure & AI";
export const portfolioDescription = "Portfolio of Pratik Mahalle, an open-source advocate building at the intersection of infrastructure, AI, and developer experience.";

export function portfolioMetadata(title: string, description: string, path?: string): Metadata {
  const url = path === undefined ? undefined : `${siteUrl}${path}`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title, description, type: "website", ...(url ? { url } : {}),
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Pratik Mahalle — Open Source, Infrastructure and AI" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
  };
}

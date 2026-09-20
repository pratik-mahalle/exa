# Cloudwake search growth

Working production URL: https://pratikmahalle.com/cloudwake, taken from the existing canonical metadata. Confirm this before deployment if the product domain has changed.

## First pass

- Product search title: Cloudwake — AWS Cost Monitoring for Mac.
- Description names the platform and concrete capabilities without claiming real-time billing or guaranteed savings.
- Existing canonical, server-rendered product copy, FAQs, and social metadata are retained.
- SoftwareApplication JSON-LD describes the visible app and free download. AWS usage can still incur charges, as the visible FAQ explains. No ratings or reviews are invented. This markup does not establish eligibility for Google's software-app rich result: Google also requires a real review or aggregate rating.
- Root robots.txt points to a sitemap containing the four existing public pages. Add new public pages to the sitemap when published. No guessed last-modified dates.

## Next content to publish

These are proposed search intents, not measured keyword volumes. Validate using Search Console data as impressions arrive. Each guide should solve the reader's problem with AWS-native steps and link naturally to Cloudwake where its capabilities help.

| Priority | Proposed page | Reader outcome |
| --- | --- | --- |
| 1 | /cloudwake/guides/monitor-aws-costs-on-mac | Install, connect an account, and interpret charges, credits, forecasts, and billing delay. |
| 2 | /cloudwake/guides/find-unused-ebs-volumes | Inspect unattached volumes, verify ownership and dependencies, and understand why unused observations are not permission to delete. |
| 3 | /cloudwake/guides/investigate-aws-cost-increases | Narrow the increase by service and date, then investigate resource activity with CloudTrail coverage limits. |

Use original annotated screenshots, reproducible steps, source links, and an author byline. Publish guides on this site and connect them with crawlable HTML links from the product page. Existing product setup links point to GitHub; native setup guides would provide a more complete search destination. Review the portfolio-to-product linking deliberately; the existing test explicitly keeps Cloudwake out of the main navigation.

## After deployment

1. Verify the product page returns HTTP 200 with its title, description, canonical, and JSON-LD in the initial HTML. Check redirects and ensure production has no noindex header or tag.
2. Verify /robots.txt and /sitemap.xml return their actual files rather than a fallback HTML page. Check all sitemap URLs resolve successfully.
3. Verify the domain property in Google Search Console, submit https://pratikmahalle.com/sitemap.xml, and inspect /cloudwake. Record Google-selected canonical and indexing status. These account actions have not been performed.
4. Track weekly impressions, clicks, CTR, and queries for /cloudwake and its future guides. Separate branded queries from problem-led queries. Record download-link clicks separately if analytics is added; a click is not a completed install.
5. Use query evidence to improve titles and content. Do not set traffic targets before collecting a baseline.

The live site could not be fetched by the browsing tool during this pass. This is not evidence that the site is down or unindexed. Deployment, redirects, Search Console status, and real-user performance remain unverified.

## References

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/software-app

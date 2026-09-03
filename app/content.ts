export const articles = [
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
  {
    title: "Bazel 9 Migration: How to Get Faster Builds Before the Bzlmod Refactor",
    excerpt: "A pragmatic argument for separating build-performance improvements from the migration work required by a major build-system release.",
    date: "Feb 17, 2026",
    topic: "Build systems",
    href: "https://pratikmahalle.medium.com/bazel-9-migration-how-to-get-faster-builds-before-the-bzlmod-refactor-d9591cd4f0fb",
  },
  {
    title: "Why AOSP Builds Take Forever",
    excerpt: "Where Android build time actually goes, why adding hardware has limits, and how shared caching changes the economics of compilation.",
    date: "Jan 22, 2026",
    topic: "AOSP",
    href: "https://pratikmahalle.medium.com/why-aosp-builds-take-forever-and-what-you-can-actually-do-about-it-c077c40797ee",
  },
];

export type Talk = {
  title: string;
  event: string;
  date: string;
  description: string;
  href: string;
  color: string;
  status: string;
  badge: string;
  image?: string;
  imageAlt?: string;
};

export const talks: Talk[] = [
  {
    title: "After Hours by RelOps Studio",
    event: "Hosted series",
    date: "Ongoing · 2026",
    description: "Candid conversations with people across the tech ecosystem about the journeys, failures, hard decisions, and behind-the-scenes lessons that rarely make it into the polished version of a career.",
    href: "https://www.linkedin.com/posts/mahalle-pratik_we-finally-did-it-the-first-episode-activity-7492522087547588608-r31Y",
    color: "pink",
    status: "Hosted",
    badge: "HOST",
    image: "/talks/after-hours.jpg",
    imageAlt: "Pratik Mahalle hosting the first episode of After Hours with Eeshaan Sawant",
  },
  {
    title: "What Happens When Your AI SRE Has a Bad Day",
    event: "SREcon26 EMEA",
    date: "Oct 13, 2026",
    description: "A field guide to failure modes in production AI SRE agents — from bad historical matches and alert-storm reasoning collapse to runbook drift and operator over-trust.",
    href: "https://www.usenix.org/conference/srecon26emea/presentation/mahalle",
    color: "blue",
    status: "Upcoming",
    badge: "NEXT",
  },
  {
    title: "From Search to Context: Building Smarter AI Agents with OpenSearch",
    event: "OpenSearch Project Nagpur × Cloud Native Nagpur",
    date: "Sep 5, 2026",
    description: "How keyword, vector, and hybrid search can turn operational data into structured context that helps AI agents move from an alert toward a credible root cause.",
    href: "https://www.meetup.com/opensearch-project-nagpur/",
    color: "lime",
    status: "Upcoming",
    badge: "NEXT",
  },
  {
    title: "AAIF Agentic AI Pune Connect",
    event: "AAIF Pune Meetup",
    date: "Aug 2026",
    description: "A community session on practical agentic AI, production systems, and the lessons that emerge when agents leave the prototype and meet real infrastructure.",
    href: "https://www.linkedin.com/posts/activity-7487373277615677441-Nf-C",
    color: "orange",
    status: "Past",
    badge: "TALK",
    image: "/talks/aaif-pune.jpg",
    imageAlt: "AAIF Agentic AI Pune Connect event poster",
  },
  {
    title: "Debugging Knowledge Is Infrastructure Too",
    event: "SREday Bengaluru",
    date: "Jun 20, 2026",
    description: "How to capture the decision patterns behind great incident response and turn tacit expertise into durable investigation workflows.",
    href: "https://sreday.com/2026-bangalore-q2/Pratik_Mahalle_DrDroid_Debugging_Knowledge_Is_Infrastructure_Too.html",
    color: "orange",
    status: "Past",
    badge: "TALK",
  },
  {
    title: "From Chaos to Confidence",
    event: "Cloud Native Pune",
    date: "Dec 2025",
    description: "How Microcks brings order to modern API testing across REST, event-driven APIs, mocks, and continuous contract validation.",
    href: "https://microcks.io/blog/recap-of-an-incredible-2025/",
    color: "blue",
    status: "Past",
    badge: "TALK",
  },
  {
    title: "Chaos Engineering for Security: Breaking Systems to Strengthen Defenses",
    event: "OpenSSF Community Day India",
    date: "Aug 4, 2025",
    description: "How controlled failures and simulated attacks can expose security weaknesses before adversaries do, with practical examples using Chaos Mesh, LitmusChaos, and KubeArmor.",
    href: "https://www.youtube.com/watch?v=WH-8M2DB_vQ",
    color: "pink",
    status: "Past",
    badge: "TALK",
    image: "/talks/openssf-community-day-india.jpg",
    imageAlt: "OpenSSF Community Day India title card for Pratik Mahalle's security chaos engineering talk",
  },
  {
    title: "Kubernetes: From Google Borg to Cloud Native",
    event: "30 CNCF Tools in 30 Days",
    date: "Video",
    description: "A practical origin story of Kubernetes and why its control-loop model became foundational to modern infrastructure.",
    href: "https://www.linkedin.com/posts/mahalle-pratik_kubernetes-from-google-borg-to-cloud-native-activity-7396894347520126976-NJ-J",
    color: "lime",
    status: "Past",
    badge: "VIDEO",
  },
];

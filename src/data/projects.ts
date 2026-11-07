export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  context: string;
  contribution: string[];
  outcome: string;
  stack: string[];
  url?: string;
  urlLabel?: string;
  accent: string;
  media?: {
    cover: { src: string; alt: string };
    gallery: { src: string; alt: string; label: string; width: number; height: number; scroll?: boolean }[];
  };
};

export const projects: Project[] = [
  {
    slug: "mallard",
    title: "Mallard Construction & Roofing",
    type: "Contractor web platform",
    year: "2025",
    summary: "One family-owned roofer, three digital experiences — from local search to a concierge luxury brand.",
    context: "Mallard Construction & Roofing serves Oklahoma City and Fort Smith with roofing done to a higher standard. The digital presence had to carry that same standard across homeowner marketing, recruiting, and a private luxury tier — while being findable in local search.",
    contribution: [
      "Built the Mallard + FORTIFIED Roof page, turning an independent certification into a clear, lead-generating answer to “why upgrade to a better roof?” for storm-prone Oklahoma.",
      "Created the Bet on Yourself recruiting page, a focused funnel that takes driven candidates from “no experience needed” to applying in one scroll.",
      "Designed Mallard Black, a private, concierge-level roofing and exterior brand for distinctive homes — built and polished, launching soon.",
      "Led SEO and performance work across the platform: faster page loads, cleaner structure and metadata, and stronger local visibility around Oklahoma City and Fort Smith.",
    ],
    outcome: "A digital presence that now matches the craft: the FORTIFIED and recruiting pages actively work as marketing funnels, and Mallard Black gives the company a luxury tier it can launch whenever the time is right — all backed by a 4.8-star Google rating.",
    stack: ["WordPress", "Elementor", "SEO", "Performance", "Brand design"],
    url: "https://www.mallardroofing.com/",
    accent: "#f97316",
    media: {
      cover: { src: "/projects/mallard/cover.jpg", alt: "Mallard Roofing homepage — Trusted Roofing Experts Serving Oklahoma City & Beyond" },
      gallery: [
        { src: "/projects/mallard/cover.jpg", alt: "Mallard Roofing homepage hero", label: "Main site hero", width: 1903, height: 1080 },
        { src: "/projects/mallard/fortified.jpg", alt: "Mallard Roofing + FORTIFIED Roof — Stronger standards. Better preparation for the next storm.", label: "Mallard + FORTIFIED", width: 1903, height: 1080 },
        { src: "/projects/mallard/bet-on-yourself.jpg", alt: "Bet on Yourself recruiting page — now hiring Oklahoma City metro", label: "Bet on Yourself", width: 1903, height: 1080 },
        { src: "/projects/mallard/mallard-black.jpg", alt: "Mallard Black — Exceptional Homes. A Higher Standard.", label: "Mallard Black", width: 1903, height: 1048 },
        { src: "/projects/mallard/homepage.jpg", alt: "Full Mallard Roofing homepage from top to footer", label: "Full homepage", width: 1920, height: 9274, scroll: true },
      ],
    },
  },
  {
    slug: "blue-collar-crypto",
    title: "Blue Collar Crypto",
    type: "Headless WordPress / product frontend",
    year: "2025—now",
    summary: "A responsive Next.js front end for a crypto community platform.",
    context: "The product uses WordPress as its backend and a separate Next.js application for the community-facing experience.",
    contribution: ["Built a responsive app shell and a CSS design token system for theme and accent switching.", "Implemented data fetching and authentication flows with TanStack Query and NextAuth.", "Collaborated with a backend developer on API contracts for custom WordPress plugins."],
    outcome: "An evolving product experience that connects a modern front end with a headless WordPress backend.",
    stack: ["Next.js", "React", "Headless WordPress", "TanStack Query", "NextAuth"],
    url: "https://bluecollarcrypto.io/",
    accent: "#159db8",
    media: {
      cover: { src: "/projects/blue-collar-crypto/cover.jpg", alt: "Blue Collar Crypto landing page — Reputation you can't buy, with a live reputation ledger" },
      gallery: [
        { src: "/projects/blue-collar-crypto/cover.jpg", alt: "Blue Collar Crypto landing page hero", label: "Landing hero", width: 1920, height: 1080 },
        { src: "/projects/blue-collar-crypto/community.jpg", alt: "Blue Collar Crypto community feed with notifications panel", label: "Community floor", width: 1920, height: 1080 },
        { src: "/projects/blue-collar-crypto/homepage.jpg", alt: "Full Blue Collar Crypto landing page from top to footer", label: "Full page", width: 1920, height: 4318, scroll: true },
      ],
    },
  },
  {
    slug: "5d-print-factory",
    title: "5D Print Factory",
    type: "Shopify storefront",
    year: "2024",
    summary: "An independent Shopify sales channel for an established Etsy seller.",
    context: "The client wanted a branded store that made products easier to browse and gave customers another way to buy outside Etsy.",
    contribution: ["Built a custom Shopify storefront using Liquid.", "Organized products and navigation for easier discovery.", "Integrated payment options and improved everyday store workflows."],
    outcome: "A dedicated sales channel that supports the client’s reach and day-to-day operations.",
    stack: ["Shopify", "Liquid", "E-commerce", "UX"],
    url: "https://5dprintfactory.shop/",
    accent: "#a855f7",
    media: {
      cover: { src: "/projects/5d-print-factory/cover.png", alt: "5D Print Factory storefront shown in a purple project composition" },
      gallery: [
        { src: "/projects/5d-print-factory/cover.png", alt: "5D Print Factory storefront preview", label: "Storefront preview", width: 800, height: 600 },
        { src: "/projects/5d-print-factory/hero.jpg", alt: "5D Print Factory hero — game controller holder banner", label: "Store hero", width: 1903, height: 1080 },
        { src: "/projects/5d-print-factory/homepage.jpg", alt: "Full 5D Print Factory homepage from top to footer", label: "Full homepage", width: 1920, height: 6252, scroll: true },
      ],
    },
  },
  {
    slug: "chattels",
    title: "Chattels",
    type: "Multi-vendor commerce",
    year: "2024—25",
    summary: "A WordPress marketplace built around the people who sell on it.",
    context: "Chattels needed a multi-vendor store that could support onboarding, orders, shipping, and ongoing vendor relationships in one place.",
    contribution: ["Built and launched the marketplace with WordPress, WooCommerce, and Dokan.", "Developed a custom CRM for vendor and customer management.", "Extended the platform with tailored PHP and JavaScript, including multi-vendor shipping logic."],
    outcome: "65+ vendors joined in the first month, with 300+ regular active users reported in the résumé.",
    stack: ["WordPress", "WooCommerce", "Dokan", "PHP", "JavaScript"],
    url: "https://web.archive.org/web/20260418172424/https://chattels.ng/",
    urlLabel: "View archived version",
    accent: "#d6336c",
    media: {
      cover: { src: "/projects/chattels/cover.jpg", alt: "Chattels marketplace homepage — search, categories and a Dining Chair promo banner" },
      gallery: [
        { src: "/projects/chattels/cover.jpg", alt: "Chattels marketplace homepage hero", label: "Storefront hero", width: 1903, height: 1080 },
        { src: "/projects/chattels/vendor-onboarding.jpg", alt: "Chattels vendor onboarding — post your furniture and appliances for free in minutes", label: "Vendor onboarding", width: 1903, height: 1080 },
        { src: "/projects/chattels/homepage.jpg", alt: "Full Chattels homepage from top to footer", label: "Full homepage", width: 1920, height: 7036, scroll: true },
      ],
    },
  },
  {
    slug: "true-faith-journal",
    title: "True Faith Journal",
    type: "Membership platform",
    year: "2024",
    summary: "A digital space for devotional reading and AI-assisted journaling.",
    context: "True Faith Journal brings devotional content, personal reflection, and membership features together in a single experience.",
    contribution: ["Built membership features, dynamic user roles, and secure signup flows.", "Developed AI-assisted journaling and a daily scripture streak feature.", "Continued filtering spam signups after launch."],
    outcome: "The platform retained paying subscribers for more than six months after launch, according to the résumé.",
    stack: ["WordPress", "Memberships", "AI integration", "Authentication"],
    url: "https://truefaithjournal.com/",
    accent: "#4c6ef5",
    media: {
      cover: { src: "/projects/true-faith-journal/cover.jpg", alt: "Take True Faith Journal with you — the TFJ mobile app shown on three phones" },
      gallery: [
        { src: "/projects/true-faith-journal/cover.jpg", alt: "True Faith Journal mobile app section with three phones", label: "Mobile app", width: 1799, height: 1080 },
        { src: "/projects/true-faith-journal/ai-tools.jpg", alt: "True Faith Journal premium tools — Ask an Apostle, Ask TFJ and Verse of the Week", label: "AI tools", width: 1790, height: 905 },
        { src: "/projects/true-faith-journal/journal.jpg", alt: "Capture your faith, one journal at a time — the TFJ journal entry composer", label: "Journal composer", width: 1799, height: 1080 },
        { src: "/projects/true-faith-journal/homepage.jpg", alt: "Full True Faith Journal homepage from top to footer", label: "Full homepage", width: 1816, height: 6694, scroll: true },
      ],
    },
  },
];

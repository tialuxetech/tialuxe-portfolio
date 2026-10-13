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
  accent: string;
  media?: {
    cover: { src: string; alt: string };
    gallery: { src: string; alt: string; label: string; width: number; height: number; scroll?: boolean }[];
  };
};

export const projects: Project[] = [
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
    accent: "#3b8e65",
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
    accent: "#557aa6",
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
    accent: "#9761ac",
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
    accent: "#9454d2",
    media: {
      cover: { src: "/projects/5d-print-factory/cover.png", alt: "5D Print Factory storefront shown in a purple project composition" },
      gallery: [
        { src: "/projects/5d-print-factory/cover.png", alt: "5D Print Factory storefront preview", label: "Storefront preview", width: 800, height: 600 },
        { src: "/projects/5d-print-factory/homepage.png", alt: "Full 5D Print Factory homepage from top to footer", label: "Full homepage", width: 1366, height: 4159, scroll: true },
      ],
    },
  },
];

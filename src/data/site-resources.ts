import type { SiteResource } from "@/types/resource";
import { EXTENDED_SITE_RESOURCES } from "./resources-extended";

export type { SiteResource } from "@/types/resource";

const SITE_RESOURCES_CORE: Record<string, SiteResource> = {
  chatgpt: {
    slug: "chatgpt",
    title: "ChatGPT",
    description:
      "Advanced AI language model for conversation, coding assistance, and content creation.",
    longDescription:
      "ChatGPT is an artificial intelligence chatbot developed by OpenAI. It follows instructions in a prompt and can help with writing, coding, analysis, and learning across many topics.",
    category: "AI Tools",
    tags: ["AI", "Chat", "OpenAI", "NLP"],
    rating: 4.9,
    reviews: 1240,
    visits: "500k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://chatgpt.com",
    freeFeatures: [
      "Access to GPT-4o mini",
      "Limited access to GPT-4o",
      "Custom instructions",
      "File uploads and data analysis",
      "Mobile app sync",
    ],
    useCases: [
      "Content writing and editing",
      "Code generation and debugging",
      "Learning complex topics",
      "Language translation",
      "Daily productivity assistance",
    ],
    isTrending: true,
  },
  unsplash: {
    slug: "unsplash",
    title: "Unsplash",
    description:
      "The internet's source of freely-usable images. Powered by creators everywhere.",
    longDescription:
      "Unsplash offers a huge library of high-resolution photos under a license that allows broad use in projects, websites, and designs with clear attribution guidelines.",
    category: "Stock Images",
    tags: ["Photos", "Design", "Stock"],
    rating: 4.8,
    reviews: 890,
    visits: "200k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://unsplash.com",
    freeFeatures: [
      "Free high-res downloads",
      "Curated collections",
      "API for developers",
      "Commercial use options",
    ],
    useCases: [
      "Blog and article imagery",
      "Social media content",
      "Mood boards",
      "Web and app backgrounds",
    ],
    isTrending: true,
  },
  "mdn-web-docs": {
    slug: "mdn-web-docs",
    title: "MDN Web Docs",
    description:
      "The best documentation for web developers, covering HTML, CSS, and JavaScript.",
    longDescription:
      "MDN Web Docs is a free learning and reference resource maintained by Mozilla and contributors. It covers web standards, browser APIs, and guides for beginners through advanced topics.",
    category: "Coding",
    tags: ["Docs", "Web", "Learning"],
    rating: 4.9,
    reviews: 2100,
    visits: "1M+",
    lastUpdated: "May 2026",
    websiteUrl: "https://developer.mozilla.org",
    freeFeatures: [
      "Complete reference material",
      "Interactive examples",
      "Browser compatibility tables",
      "Learning pathways",
    ],
    useCases: [
      "Looking up HTML/CSS/JS",
      "Learning new web APIs",
      "Checking browser support",
      "Teaching web development",
    ],
    isTrending: false,
  },
  canva: {
    slug: "canva",
    title: "Canva",
    description:
      "A free-to-use online graphic design tool for social posts, presentations, and more.",
    longDescription:
      "Canva provides templates, stock elements, and an easy editor so anyone can create polished visuals without professional design software.",
    category: "Design",
    tags: ["Design", "Editor", "Free"],
    rating: 4.7,
    reviews: 3200,
    visits: "400k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://www.canva.com",
    freeFeatures: [
      "Thousands of free templates",
      "Free photos and graphics",
      "Drag-and-drop editor",
      "Share and export options",
    ],
    useCases: [
      "Social media graphics",
      "Presentations",
      "Simple print designs",
      "Team brand kits (paid tiers)",
    ],
    isTrending: true,
  },
  "leonardo-ai": {
    slug: "leonardo-ai",
    title: "Leonardo AI",
    description:
      "Generate high-quality production assets for your creative projects with AI.",
    longDescription:
      "Leonardo AI focuses on image generation and creative tooling for artists, game developers, and marketers, with free credits and community models.",
    category: "AI Tools",
    tags: ["Image Gen", "Art"],
    rating: 4.8,
    reviews: 560,
    visits: "80k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://leonardo.ai",
    freeFeatures: [
      "Daily free generations",
      "Multiple AI models",
      "Community feeds",
      "Asset upscaling tools",
    ],
    useCases: [
      "Concept art",
      "Marketing visuals",
      "Game assets",
      "Product mockups",
    ],
  },
  "notion-ai": {
    slug: "notion-ai",
    title: "Notion AI",
    description:
      "Integrate AI features into your Notion workspace for writing, summaries, and analysis.",
    longDescription:
      "Notion AI helps you draft, edit, and organize content inside Notion pages, databases, and wikis alongside your team's knowledge base.",
    category: "Productivity",
    tags: ["AI", "Docs"],
    rating: 4.6,
    reviews: 430,
    visits: "60k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://www.notion.so/product/ai",
    freeFeatures: [
      "Limited AI responses on free plans",
      "Integrated with Notion pages",
      "Summaries and action items",
    ],
    useCases: [
      "Meeting notes",
      "Documentation drafts",
      "Task breakdowns",
      "Knowledge base upkeep",
    ],
  },
  "remove-bg": {
    slug: "remove-bg",
    title: "Remove.bg",
    description:
      "Remove image backgrounds automatically in seconds with one click.",
    longDescription:
      "Remove.bg uses AI to detect subjects and produce transparent backgrounds, useful for portraits, products, and quick cutouts.",
    category: "AI Tools",
    tags: ["Image", "Tool"],
    rating: 4.9,
    reviews: 1200,
    visits: "150k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://www.remove.bg",
    freeFeatures: [
      "Free previews at lower resolution",
      "API for developers",
      "Plugins for design tools",
    ],
    useCases: [
      "E-commerce product shots",
      "Profile photos",
      "Presentation assets",
    ],
  },
  grammarly: {
    slug: "grammarly",
    title: "Grammarly",
    description:
      "AI-powered writing assistant that helps you communicate with confidence.",
    longDescription:
      "Grammarly checks grammar, tone, and clarity in browsers, desktop apps, and mobile keyboards, with a solid free tier for everyday writing.",
    category: "Productivity",
    tags: ["Writing", "AI"],
    rating: 4.7,
    reviews: 2800,
    visits: "300k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://www.grammarly.com",
    freeFeatures: [
      "Grammar and spelling checks",
      "Tone suggestions (limited)",
      "Browser extension",
    ],
    useCases: [
      "Email and reports",
      "Essays and applications",
      "Professional messaging",
    ],
  },
  figma: {
    slug: "figma",
    title: "Figma",
    description:
      "The leading collaborative design tool for building meaningful products.",
    longDescription:
      "Figma runs in the browser and supports real-time collaboration for UI design, prototyping, and design systems used by teams worldwide.",
    category: "Design",
    tags: ["UI", "UX", "Collab"],
    rating: 4.9,
    reviews: 4100,
    visits: "600k+",
    lastUpdated: "May 2026",
    websiteUrl: "https://www.figma.com",
    freeFeatures: [
      "Unlimited personal drafts",
      "Dev Mode basics",
      "Community files and plugins",
    ],
    useCases: [
      "UI and UX design",
      "Interactive prototypes",
      "Design handoff",
    ],
    isTrending: false,
  },
};

export const SITE_RESOURCES: Record<string, SiteResource> = {
  ...SITE_RESOURCES_CORE,
  ...EXTENDED_SITE_RESOURCES,
};

export const TRENDING_RESOURCE_SLUGS = [
  "chatgpt",
  "unsplash",
  "mdn-web-docs",
  "canva",
] as const;

export const AI_TOOL_SLUGS = [
  "leonardo-ai",
  "notion-ai",
  "remove-bg",
  "grammarly",
] as const;

/** Category listing at `/categories/[slug]` */
export type BrowseCategoryDef = {
  title: string;
  matchCategories?: string[];
  filter?: (r: SiteResource) => boolean;
};

const BROWSE_CATEGORY_BY_SLUG: Record<string, BrowseCategoryDef> = {
  "ai-tools": { title: "AI Tools", matchCategories: ["AI Tools"] },
  "coding-resources": {
    title: "Coding Resources",
    matchCategories: ["Coding"],
  },
  "design-assets": { title: "Design Assets", matchCategories: ["Design"] },
  "learning-platforms": {
    title: "Learning Platforms",
    matchCategories: ["Learning"],
  },
  "productivity-tools": {
    title: "Productivity Tools",
    matchCategories: ["Productivity"],
  },
  "free-templates": {
    title: "Free Templates",
    matchCategories: ["Templates"],
  },
  "stock-images": {
    title: "Stock Images",
    matchCategories: ["Stock Images"],
  },
  "pdfs-ebooks": {
    title: "PDFs & eBooks",
    matchCategories: ["PDFs & eBooks"],
  },
};

export function getBrowseCategoryDef(
  slug: string,
): BrowseCategoryDef | undefined {
  return BROWSE_CATEGORY_BY_SLUG[slug];
}

export function resourcesForBrowseSlug(slug: string): SiteResource[] {
  const def = BROWSE_CATEGORY_BY_SLUG[slug];
  if (!def) return [];
  const all = Object.values(SITE_RESOURCES);
  if (def.filter) return all.filter(def.filter);
  const cats = def.matchCategories ?? [];
  return all.filter((r) => cats.includes(r.category));
}

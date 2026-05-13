import type { SiteResource } from "@/types/resource";

function build(
  p: Pick<
    SiteResource,
    | "slug"
    | "title"
    | "description"
    | "category"
    | "tags"
    | "rating"
    | "websiteUrl"
  > &
    Partial<
      Omit<
        SiteResource,
        | "slug"
        | "title"
        | "description"
        | "category"
        | "tags"
        | "rating"
        | "websiteUrl"
      >
    >,
): SiteResource {
  return {
    longDescription:
      p.longDescription ??
      `${p.description} Visit the official site for pricing, limits, and the latest features.`,
    reviews: p.reviews ?? 180,
    visits: p.visits ?? "40k+",
    lastUpdated: p.lastUpdated ?? "May 2026",
    freeFeatures: p.freeFeatures ?? [
      "Free tier or trial available",
      "Web access",
      "Regular updates",
    ],
    useCases: p.useCases ?? ["Students", "Creators", "Developers", "Teams"],
    isTrending: p.isTrending,
    ...p,
  };
}

const list: SiteResource[] = [
  build({
    slug: "claude",
    title: "Claude",
    description:
      "Anthropic’s AI assistant for writing, coding, research, and long documents.",
    category: "AI Tools",
    tags: ["AI", "Writing", "Anthropic"],
    rating: 4.9,
    websiteUrl: "https://claude.ai",
    isTrending: true,
  }),
  build({
    slug: "google-gemini",
    title: "Google Gemini",
    description:
      "Google’s multimodal AI for reasoning, images, and workspace-style tasks.",
    category: "AI Tools",
    tags: ["AI", "Google", "Multimodal"],
    rating: 4.7,
    websiteUrl: "https://gemini.google.com",
  }),
  build({
    slug: "perplexity",
    title: "Perplexity",
    description:
      "Answer engine with citations—great for research and quick fact checks.",
    category: "AI Tools",
    tags: ["AI", "Search", "Research"],
    rating: 4.8,
    websiteUrl: "https://www.perplexity.ai",
    isTrending: true,
  }),
  build({
    slug: "huggingface",
    title: "Hugging Face",
    description:
      "Models, datasets, and spaces to run and share open-source AI and ML.",
    category: "AI Tools",
    tags: ["AI", "Open Source", "ML"],
    rating: 4.9,
    websiteUrl: "https://huggingface.co",
  }),
  build({
    slug: "replicate",
    title: "Replicate",
    description:
      "Run open-source models in the cloud with a simple API and pay-as-you-go.",
    category: "AI Tools",
    tags: ["API", "Models", "Cloud"],
    rating: 4.6,
    websiteUrl: "https://replicate.com",
  }),
  build({
    slug: "runway",
    title: "Runway",
    description:
      "Creative AI for video, image, and audio workflows used by filmmakers.",
    category: "AI Tools",
    tags: ["Video", "Creative", "AI"],
    rating: 4.7,
    websiteUrl: "https://runwayml.com",
  }),
  build({
    slug: "gamma",
    title: "Gamma",
    description:
      "Generate polished decks and documents from a prompt with AI layouts.",
    category: "AI Tools",
    tags: ["Presentations", "Docs", "AI"],
    rating: 4.6,
    websiteUrl: "https://gamma.app",
  }),
  build({
    slug: "otter-ai",
    title: "Otter.ai",
    description:
      "AI meeting notes, live transcription, and summaries for calls and lectures.",
    category: "AI Tools",
    tags: ["Meetings", "Transcription", "Notes"],
    rating: 4.5,
    websiteUrl: "https://otter.ai",
  }),
  build({
    slug: "github",
    title: "GitHub",
    description:
      "Host code, collaborate with pull requests, Actions CI/CD, and Discussions.",
    category: "Coding",
    tags: ["Git", "Open Source", "DevOps"],
    rating: 4.9,
    websiteUrl: "https://github.com",
    isTrending: true,
  }),
  build({
    slug: "gitlab",
    title: "GitLab",
    description:
      "DevOps platform with Git repos, CI/CD, security scanning, and planning.",
    category: "Coding",
    tags: ["Git", "CI/CD", "DevOps"],
    rating: 4.7,
    websiteUrl: "https://gitlab.com",
  }),
  build({
    slug: "stackoverflow",
    title: "Stack Overflow",
    description:
      "Q&A community for programming—millions of solved problems and snippets.",
    category: "Coding",
    tags: ["Q&A", "Community", "Debug"],
    rating: 4.8,
    websiteUrl: "https://stackoverflow.com",
  }),
  build({
    slug: "freecodecamp",
    title: "freeCodeCamp",
    description:
      "Free full-length courses and certifications for web development and data.",
    category: "Learning",
    tags: ["Courses", "JavaScript", "Free"],
    rating: 4.9,
    websiteUrl: "https://www.freecodecamp.org",
    isTrending: true,
  }),
  build({
    slug: "w3schools",
    title: "W3Schools",
    description:
      "Beginner-friendly tutorials and references for HTML, CSS, JS, SQL, and more.",
    category: "Coding",
    tags: ["Tutorial", "Reference", "Web"],
    rating: 4.5,
    websiteUrl: "https://www.w3schools.com",
  }),
  build({
    slug: "replit",
    title: "Replit",
    description:
      "Code and deploy in the browser with multiplayer editing and templates.",
    category: "Coding",
    tags: ["IDE", "Cloud", "Collaboration"],
    rating: 4.6,
    websiteUrl: "https://replit.com",
  }),
  build({
    slug: "codepen",
    title: "CodePen",
    description:
      "Front-end playground for HTML/CSS/JS demos, challenges, and inspiration.",
    category: "Coding",
    tags: ["Frontend", "Playground", "CSS"],
    rating: 4.7,
    websiteUrl: "https://codepen.io",
  }),
  build({
    slug: "vercel",
    title: "Vercel",
    description:
      "Deploy frontend and serverless apps with preview URLs and edge network.",
    category: "Coding",
    tags: ["Hosting", "Next.js", "Serverless"],
    rating: 4.8,
    websiteUrl: "https://vercel.com",
  }),
  build({
    slug: "netlify",
    title: "Netlify",
    description:
      "Jamstack hosting, forms, identity, and edge functions for static sites.",
    category: "Coding",
    tags: ["Hosting", "Jamstack", "CI"],
    rating: 4.7,
    websiteUrl: "https://www.netlify.com",
  }),
  build({
    slug: "penpot",
    title: "Penpot",
    description:
      "Open-source design and prototyping—Figma-like workflows in the browser.",
    category: "Design",
    tags: ["UI", "Open Source", "Prototyping"],
    rating: 4.6,
    websiteUrl: "https://penpot.app",
  }),
  build({
    slug: "blender",
    title: "Blender",
    description:
      "Free 3D suite for modeling, animation, rendering, and video editing.",
    category: "Design",
    tags: ["3D", "Animation", "Open Source"],
    rating: 4.9,
    websiteUrl: "https://www.blender.org",
  }),
  build({
    slug: "coolors",
    title: "Coolors",
    description:
      "Generate and explore color palettes with export for CSS and design tools.",
    category: "Design",
    tags: ["Color", "UI", "Palette"],
    rating: 4.7,
    websiteUrl: "https://coolors.co",
  }),
  build({
    slug: "google-fonts",
    title: "Google Fonts",
    description:
      "Hundreds of free webfont families with easy CSS embed and pairing ideas.",
    category: "Design",
    tags: ["Fonts", "Typography", "Web"],
    rating: 4.8,
    websiteUrl: "https://fonts.google.com",
  }),
  build({
    slug: "heroicons",
    title: "Heroicons",
    description:
      "Beautiful hand-crafted SVG icons by the Tailwind CSS team—MIT licensed.",
    category: "Design",
    tags: ["Icons", "SVG", "UI"],
    rating: 4.8,
    websiteUrl: "https://heroicons.com",
  }),
  build({
    slug: "svgrepo",
    title: "SVG Repo",
    description:
      "Searchable collection of free SVG icons and vectors for apps and sites.",
    category: "Design",
    tags: ["Icons", "SVG", "Assets"],
    rating: 4.5,
    websiteUrl: "https://www.svgrepo.com",
  }),
  build({
    slug: "dribbble",
    title: "Dribbble",
    description:
      "Discover UI inspiration, portfolios, and design shots from creatives.",
    category: "Design",
    tags: ["Inspiration", "Portfolio", "UI"],
    rating: 4.6,
    websiteUrl: "https://dribbble.com",
  }),
  build({
    slug: "behance",
    title: "Behance",
    description:
      "Adobe’s creative network for portfolios, case studies, and mood boards.",
    category: "Design",
    tags: ["Portfolio", "Creative", "Adobe"],
    rating: 4.6,
    websiteUrl: "https://www.behance.net",
  }),
  build({
    slug: "trello",
    title: "Trello",
    description:
      "Kanban boards for tasks and projects with power-ups and automations.",
    category: "Productivity",
    tags: ["Tasks", "Kanban", "Teams"],
    rating: 4.6,
    websiteUrl: "https://trello.com",
  }),
  build({
    slug: "asana",
    title: "Asana",
    description:
      "Work management for tasks, timelines, and goals with generous free tier.",
    category: "Productivity",
    tags: ["Tasks", "Projects", "Teams"],
    rating: 4.5,
    websiteUrl: "https://asana.com",
  }),
  build({
    slug: "obsidian",
    title: "Obsidian",
    description:
      "Local-first notes with backlinks, plugins, and graph view for knowledge.",
    category: "Productivity",
    tags: ["Notes", "PKM", "Markdown"],
    rating: 4.8,
    websiteUrl: "https://obsidian.md",
  }),
  build({
    slug: "slack",
    title: "Slack",
    description:
      "Team chat, channels, huddles, and integrations for remote collaboration.",
    category: "Productivity",
    tags: ["Chat", "Teams", "Integrations"],
    rating: 4.6,
    websiteUrl: "https://slack.com",
  }),
  build({
    slug: "discord",
    title: "Discord",
    description:
      "Free voice, video, and text communities—popular with study and dev groups.",
    category: "Productivity",
    tags: ["Community", "Voice", "Chat"],
    rating: 4.7,
    websiteUrl: "https://discord.com",
  }),
  build({
    slug: "airtable",
    title: "Airtable",
    description:
      "Spreadsheet-database hybrid for content calendars, CRM, and ops workflows.",
    category: "Productivity",
    tags: ["Database", "No-code", "CRM"],
    rating: 4.5,
    websiteUrl: "https://airtable.com",
  }),
  build({
    slug: "cal-com",
    title: "Cal.com",
    description:
      "Open-source scheduling—book meetings without the back-and-forth email.",
    category: "Productivity",
    tags: ["Calendar", "Open Source", "Bookings"],
    rating: 4.7,
    websiteUrl: "https://cal.com",
  }),
  build({
    slug: "khan-academy",
    title: "Khan Academy",
    description:
      "Free courses in math, science, computing, and test prep with exercises.",
    category: "Learning",
    tags: ["Courses", "STEM", "Free"],
    rating: 4.9,
    websiteUrl: "https://www.khanacademy.org",
  }),
  build({
    slug: "coursera",
    title: "Coursera",
    description:
      "University-style courses—many classes are free to audit without a certificate.",
    category: "Learning",
    tags: ["Courses", "University", "Audit"],
    rating: 4.6,
    websiteUrl: "https://www.coursera.org",
  }),
  build({
    slug: "edx",
    title: "edX",
    description:
      "Online courses from MIT, Harvard, and partners with free audit options.",
    category: "Learning",
    tags: ["Courses", "STEM", "University"],
    rating: 4.6,
    websiteUrl: "https://www.edx.org",
  }),
  build({
    slug: "mit-ocw",
    title: "MIT OpenCourseWare",
    description:
      "Free lecture notes, exams, and videos from real MIT undergraduate courses.",
    category: "Learning",
    tags: ["OpenCourseWare", "STEM", "Lectures"],
    rating: 4.9,
    websiteUrl: "https://ocw.mit.edu",
  }),
  build({
    slug: "class-central",
    title: "Class Central",
    description:
      "Search thousands of free online courses from top providers in one place.",
    category: "Learning",
    tags: ["Aggregator", "Courses", "Reviews"],
    rating: 4.7,
    websiteUrl: "https://www.classcentral.com",
  }),
  build({
    slug: "quizlet",
    title: "Quizlet",
    description:
      "Flashcards, study modes, and practice tests for languages and memorization.",
    category: "Learning",
    tags: ["Flashcards", "Study", "Languages"],
    rating: 4.5,
    websiteUrl: "https://quizlet.com",
  }),
  build({
    slug: "htmlrev",
    title: "HTMLRev",
    description:
      "Free HTML templates and landing page starters for developers and agencies.",
    category: "Templates",
    tags: ["HTML", "Landing", "Free"],
    rating: 4.4,
    websiteUrl: "https://htmlrev.com",
  }),
  build({
    slug: "templated-co",
    title: "Templated.co",
    description:
      "Simple free HTML/CSS templates for portfolios, agencies, and products.",
    category: "Templates",
    tags: ["HTML", "CSS", "Portfolio"],
    rating: 4.3,
    websiteUrl: "https://templated.co",
  }),
  build({
    slug: "coverr",
    title: "Coverr",
    description:
      "Free stock video clips for websites, ads, and social—no attribution required.",
    category: "Templates",
    tags: ["Video", "Stock", "B-roll"],
    rating: 4.5,
    websiteUrl: "https://coverr.co",
  }),
  build({
    slug: "pexels",
    title: "Pexels",
    description:
      "Free stock photos and videos with a clear license for creators and marketers.",
    category: "Stock Images",
    tags: ["Photos", "Video", "Stock"],
    rating: 4.8,
    websiteUrl: "https://www.pexels.com",
    isTrending: true,
  }),
  build({
    slug: "pixabay",
    title: "Pixabay",
    description:
      "Free images, vectors, illustrations, and videos contributed by the community.",
    category: "Stock Images",
    tags: ["Stock", "Vector", "Community"],
    rating: 4.6,
    websiteUrl: "https://pixabay.com",
  }),
  build({
    slug: "gutenberg",
    title: "Project Gutenberg",
    description:
      "Over 70,000 free eBooks—mostly classics in the public domain worldwide.",
    category: "PDFs & eBooks",
    tags: ["eBooks", "Classics", "Public Domain"],
    rating: 4.8,
    websiteUrl: "https://www.gutenberg.org",
  }),
  build({
    slug: "standard-ebooks",
    title: "Standard Ebooks",
    description:
      "Professionally formatted, proofread public-domain ebooks with modern typography.",
    category: "PDFs & eBooks",
    tags: ["eBooks", "Quality", "Public Domain"],
    rating: 4.9,
    websiteUrl: "https://standardebooks.org",
  }),
  build({
    slug: "open-library",
    title: "Open Library",
    description:
      "Borrow and read digital books—an Internet Archive project with huge catalog.",
    category: "PDFs & eBooks",
    tags: ["Library", "Borrow", "Archive"],
    rating: 4.6,
    websiteUrl: "https://openlibrary.org",
  }),
  build({
    slug: "brave-search",
    title: "Brave Search",
    description:
      "Independent index option with privacy controls and AI summaries.",
    category: "AI Tools",
    tags: ["Search", "Privacy", "AI"],
    rating: 4.4,
    websiteUrl: "https://search.brave.com",
  }),
  build({
    slug: "vscode",
    title: "Visual Studio Code",
    description:
      "Free code editor with extensions, debugging, Git, and Copilot optional add-on.",
    category: "Coding",
    tags: ["Editor", "Extensions", "Microsoft"],
    rating: 4.9,
    websiteUrl: "https://code.visualstudio.com",
  }),
  build({
    slug: "tailwindcss",
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework with design tokens and rapid UI iteration.",
    category: "Coding",
    tags: ["CSS", "UI", "Framework"],
    rating: 4.8,
    websiteUrl: "https://tailwindcss.com",
  }),
  build({
    slug: "figjam",
    title: "FigJam",
    description:
      "Online whiteboard by Figma for brainstorms, diagrams, and team workshops.",
    category: "Productivity",
    tags: ["Whiteboard", "Collaboration", "Figma"],
    rating: 4.6,
    websiteUrl: "https://www.figma.com/figjam/",
  }),
  build({
    slug: "miro",
    title: "Miro",
    description:
      "Visual collaboration whiteboard for agile rituals, mapping, and workshops.",
    category: "Productivity",
    tags: ["Whiteboard", "Agile", "Remote"],
    rating: 4.6,
    websiteUrl: "https://miro.com",
  }),
  build({
    slug: "notion",
    title: "Notion",
    description:
      "All-in-one workspace for notes, wikis, tasks, and lightweight databases.",
    category: "Productivity",
    tags: ["Notes", "Wiki", "Tasks"],
    rating: 4.7,
    websiteUrl: "https://www.notion.so",
  }),
  build({
    slug: "linear",
    title: "Linear",
    description:
      "Issue tracking built for speed—free for small teams with polished UX.",
    category: "Productivity",
    tags: ["Issues", "Sprint", "Software"],
    rating: 4.8,
    websiteUrl: "https://linear.app",
  }),
  build({
    slug: "zapier",
    title: "Zapier",
    description:
      "Connect apps with no-code automations—free tier for simple multi-step zaps.",
    category: "Productivity",
    tags: ["Automation", "No-code", "Integrations"],
    rating: 4.5,
    websiteUrl: "https://zapier.com",
  }),
  build({
    slug: "raycast",
    title: "Raycast",
    description:
      "Mac launcher with extensions, snippets, and quick actions for developers.",
    category: "Productivity",
    tags: ["Mac", "Launcher", "Productivity"],
    rating: 4.7,
    websiteUrl: "https://www.raycast.com",
  }),
  build({
    slug: "loom",
    title: "Loom",
    description:
      "Quick async video messages for demos, feedback, and team updates.",
    category: "Productivity",
    tags: ["Video", "Async", "Screen record"],
    rating: 4.5,
    websiteUrl: "https://www.loom.com",
  }),
  build({
    slug: "excalidraw",
    title: "Excalidraw",
    description:
      "Virtual whiteboard with hand-drawn style diagrams—open source and fast.",
    category: "Design",
    tags: ["Diagram", "Whiteboard", "Open Source"],
    rating: 4.8,
    websiteUrl: "https://excalidraw.com",
  }),
  build({
    slug: "phosphor-icons",
    title: "Phosphor Icons",
    description:
      "Flexible icon family for interfaces with consistent weights and styles.",
    category: "Design",
    tags: ["Icons", "UI", "SVG"],
    rating: 4.7,
    websiteUrl: "https://phosphoricons.com",
  }),
  build({
    slug: "storyset",
    title: "Storyset",
    description:
      "Customizable free illustrations from Freepik for apps and presentations.",
    category: "Design",
    tags: ["Illustration", "SVG", "Marketing"],
    rating: 4.5,
    websiteUrl: "https://storyset.com",
  }),
  build({
    slug: "regex101",
    title: "regex101",
    description:
      "Build, test, and explain regular expressions with debugger and community patterns.",
    category: "Coding",
    tags: ["Regex", "Debug", "Tools"],
    rating: 4.8,
    websiteUrl: "https://regex101.com",
  }),
  build({
    slug: "jsonlint",
    title: "JSONLint",
    description:
      "Validate and format JSON payloads—handy for APIs and config debugging.",
    category: "Coding",
    tags: ["JSON", "Validator", "API"],
    rating: 4.4,
    websiteUrl: "https://jsonlint.com",
  }),
  build({
    slug: "draw-io",
    title: "draw.io (diagrams.net)",
    description:
      "Free diagramming for flowcharts, ER diagrams, and architecture sketches.",
    category: "Design",
    tags: ["Diagram", "Flowchart", "Architecture"],
    rating: 4.7,
    websiteUrl: "https://app.diagrams.net",
  }),
  build({
    slug: "sqlite",
    title: "SQLite",
    description:
      "Embedded SQL database engine—file-based, zero server, used everywhere.",
    category: "Coding",
    tags: ["Database", "SQL", "Embedded"],
    rating: 4.8,
    websiteUrl: "https://www.sqlite.org",
  }),
  build({
    slug: "postgresql",
    title: "PostgreSQL",
    description:
      "Advanced open-source relational database trusted for serious applications.",
    category: "Coding",
    tags: ["Database", "SQL", "Open Source"],
    rating: 4.9,
    websiteUrl: "https://www.postgresql.org",
  }),
  build({
    slug: "docker",
    title: "Docker",
    description:
      "Containers for consistent dev, test, and deploy environments across machines.",
    category: "Coding",
    tags: ["DevOps", "Containers", "CLI"],
    rating: 4.8,
    websiteUrl: "https://www.docker.com",
  }),
  build({
    slug: "postman",
    title: "Postman",
    description:
      "Design, test, and document HTTP APIs with collections and environments.",
    category: "Coding",
    tags: ["API", "Testing", "HTTP"],
    rating: 4.7,
    websiteUrl: "https://www.postman.com",
  }),
  build({
    slug: "openai-api",
    title: "OpenAI Platform",
    description:
      "APIs for GPT models, embeddings, and tools to build AI features in your app.",
    category: "AI Tools",
    tags: ["API", "GPT", "Developers"],
    rating: 4.7,
    websiteUrl: "https://platform.openai.com",
  }),
  build({
    slug: "cohere",
    title: "Cohere",
    description:
      "Text and embedding APIs for search, classification, and enterprise AI apps.",
    category: "AI Tools",
    tags: ["API", "NLP", "Embeddings"],
    rating: 4.5,
    websiteUrl: "https://cohere.com",
  }),
  build({
    slug: "elevenlabs",
    title: "ElevenLabs",
    description:
      "AI voice synthesis and cloning for narration, podcasts, and localization.",
    category: "AI Tools",
    tags: ["Voice", "Audio", "TTS"],
    rating: 4.6,
    websiteUrl: "https://elevenlabs.io",
  }),
  build({
    slug: "descript",
    title: "Descript",
    description:
      "Edit video and audio by editing text—overdub and transcription built in.",
    category: "AI Tools",
    tags: ["Video", "Audio", "Editing"],
    rating: 4.5,
    websiteUrl: "https://www.descript.com",
  }),
  build({
    slug: "n8n",
    title: "n8n",
    description:
      "Fair-code workflow automation with self-host option and hundreds of nodes.",
    category: "Productivity",
    tags: ["Automation", "Self-host", "Integrations"],
    rating: 4.7,
    websiteUrl: "https://n8n.io",
  }),
  build({
    slug: "make",
    title: "Make (Integromat)",
    description:
      "Visual automation across apps with scenarios, routers, and error handling.",
    category: "Productivity",
    tags: ["Automation", "No-code", "Integrations"],
    rating: 4.6,
    websiteUrl: "https://www.make.com",
  }),
];

export const EXTENDED_SITE_RESOURCES: Record<string, SiteResource> =
  Object.fromEntries(list.map((r) => [r.slug, r]));

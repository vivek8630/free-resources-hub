"use client";

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ResourceCard from '@/components/ResourceCard';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  Palette, 
  GraduationCap, 
  Zap, 
  FileText, 
  Image as ImageIcon, 
  Layout,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import Link from 'next/link';
import {
  SITE_RESOURCES,
  TRENDING_RESOURCE_SLUGS,
  AI_TOOL_SLUGS,
} from '@/data/site-resources';

const categories = [
  { icon: Cpu, title: "AI Tools", slug: "ai-tools", desc: "ChatGPT, Canva, Notion AI...", color: "from-blue-500 to-cyan-400" },
  { icon: Code2, title: "Coding", slug: "coding-resources", desc: "Tutorials, APIs, Git tools...", color: "from-purple-500 to-pink-500" },
  { icon: Palette, title: "Design", slug: "design-assets", desc: "Icons, Fonts, Illustrations...", color: "from-orange-500 to-yellow-500" },
  { icon: GraduationCap, title: "Learning", slug: "learning-platforms", desc: "Free courses, eBooks, PDFs...", color: "from-green-500 to-emerald-400" },
  { icon: Zap, title: "Productivity", slug: "productivity-tools", desc: "Notion, Trello, Slack...", color: "from-red-500 to-rose-400" },
  { icon: Layout, title: "Templates", slug: "free-templates", desc: "UI Kits, Web templates...", color: "from-indigo-500 to-blue-500" },
  { icon: ImageIcon, title: "Stock Images", slug: "stock-images", desc: "Unsplash, Pexels, Pixabay...", color: "from-pink-500 to-rose-500" },
  { icon: FileText, title: "PDFs & eBooks", slug: "pdfs-ebooks", desc: "Free guides, Cheat sheets...", color: "from-teal-500 to-emerald-500" },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Full Stack Developer",
    content: "Free Resources Hub has saved me thousands of dollars on tools and courses. It's my go-to every morning.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    content: "The curation here is top-notch. I found high-quality icons and fonts that I now use in every project.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "James Wilson",
    role: "Freelance Content Creator",
    content: "As a creator on a budget, this site is a goldmine. The AI tools section alone is worth bookmarking.",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

export default function Home() {
  const [newsletterMsg, setNewsletterMsg] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Featured Categories */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-text-gray">Find exactly what you need across our curated collections.</p>
          </div>
          <Link href="/categories" className="text-primary font-semibold flex items-center gap-1 hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl group cursor-pointer border-base hover:border-primary/50 transition-all h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-text-gray">{cat.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Resources */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
            <p className="text-text-gray">The most popular resources this week.</p>
          </div>
          <div className="flex gap-2">
             <Link href="/search" className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Weekly</Link>
             <Link href="/search" className="gradient-bg px-4 py-2 rounded-lg text-sm font-medium text-white">Monthly</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRENDING_RESOURCE_SLUGS.map((slug) => {
            const resource = SITE_RESOURCES[slug];
            return (
              <ResourceCard
                key={slug}
                slug={resource.slug}
                websiteUrl={resource.websiteUrl}
                title={resource.title}
                description={resource.description}
                category={resource.category}
                tags={resource.tags}
                rating={resource.rating}
                isTrending={resource.isTrending}
              />
            );
          })}
        </div>
      </section>

      {/* AI Tools Highlight */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase">Special Collection</div>
              <h2 className="text-4xl font-bold mb-6">Revolutionize Your Workflow with <span className="gradient-text">Free AI Tools</span></h2>
              <p className="text-text-gray text-lg mb-8">Stay ahead of the curve with our curated list of free-to-use AI platforms that enhance productivity and creativity.</p>
              <Link href="/categories/ai-tools" className="btn-primary inline-block text-center">
                Explore All AI Tools
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
              {AI_TOOL_SLUGS.map((slug) => {
                const tool = SITE_RESOURCES[slug];
                return (
                  <ResourceCard
                    key={slug}
                    slug={tool.slug}
                    websiteUrl={tool.websiteUrl}
                    title={tool.title}
                    description={tool.description}
                    category={tool.category}
                    tags={tool.tags}
                    rating={tool.rating}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Creators</h2>
          <p className="text-text-gray max-w-2xl mx-auto">Join thousands of students and professionals who use Free Resources Hub daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="glass p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-text-gray">{t.role}</p>
                </div>
              </div>
              <p className="text-text-gray italic leading-relaxed">"{t.content}"</p>
              <div className="flex gap-1 mt-6">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-[2rem] overflow-hidden gradient-bg p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Never miss a free tool again</h2>
            <p className="text-white/80 text-lg mb-10">Get the weekly roundup of the best resources, tutorials, and assets delivered straight to your inbox.</p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterMsg("Thanks — hook this form to your email provider when you deploy.");
                window.setTimeout(() => setNewsletterMsg(null), 5000);
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button type="submit" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
                Subscribe Now
              </button>
            </form>
            {newsletterMsg && (
              <p className="text-white/90 text-sm mt-4">{newsletterMsg}</p>
            )}
            <p className="text-white/60 text-xs mt-6">Zero spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

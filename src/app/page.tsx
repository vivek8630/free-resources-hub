"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Code2, Palette, Zap, ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import Hero from '@/components/Hero';
import { StatsBanner } from '@/components/StatsBanner';
import { CategoryCard } from '@/components/CategoryCard';
import { DailyFeaturedTool } from '@/components/DailyFeaturedTool';
import ResourceCard from '@/components/ResourceCard';
import { SITE_RESOURCES, TRENDING_RESOURCE_SLUGS, AI_TOOL_SLUGS } from '@/data/site-resources';

const categories = [
  { icon: Cpu, title: "AI Tools", slug: "ai-tools", desc: "ChatGPT, Midjourney, Notion AI...", color: "from-blue-500 to-cyan-400", count: 124 },
  { icon: Code2, title: "Coding", slug: "coding-resources", desc: "Tutorials, APIs, Open Source...", color: "from-purple-500 to-pink-500", count: 85 },
  { icon: Palette, title: "Design", slug: "design-assets", desc: "Icons, Fonts, UI Kits, Vectors...", color: "from-orange-500 to-yellow-500", count: 210 },
  { icon: Zap, title: "Productivity", slug: "productivity-tools", desc: "Notion, Obsidian, Trello...", color: "from-emerald-500 to-teal-400", count: 64 },
];

export default function Home() {
  const [email, setEmail] = useState('');
  
  // Pick a featured tool for the day (e.g., chatgpt)
  const featuredTool = SITE_RESOURCES["chatgpt"];

  return (
    <div className="flex flex-col gap-24 lg:gap-32 pb-20">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Banner */}
      <StatsBanner />

      {/* 3. Featured Categories */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-text-gray text-lg">Browse our meticulously curated collections to find exactly what you need for your next project.</p>
          </div>
          <Link href="/categories" className="btn-secondary shrink-0">
            View All Categories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Trending Now */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              Trending This Week <span className="text-4xl">🔥</span>
            </h2>
            <p className="text-text-gray text-lg">The most popular resources right now, based on community activity.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRENDING_RESOURCE_SLUGS.map((slug, index) => {
            const resource = SITE_RESOURCES[slug];
            return (
              <motion.div 
                key={slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-full"
              >
                {/* Ranking Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center font-black text-xl z-20 shadow-xl shadow-black/50 text-text-gray">
                  {index + 1}
                </div>
                <ResourceCard
                  {...resource}
                  isTrending={true}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Tool of the Day Spotlight */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <DailyFeaturedTool tool={featuredTool} />
        </motion.div>
      </section>

      {/* 6. AI Tools Spotlight */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0 noise-overlay opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold mb-6 uppercase tracking-wider border border-primary/30">
                <SparklesIcon className="w-3 h-3" /> Dedicated Hub
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Supercharge your workflow with <span className="gradient-text">AI Tools</span>
              </h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                We test and curate the best free AI platforms so you don't have to waste time on low-quality clones. From image generation to coding assistants.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["100+ vetted AI tools", "Daily updates", "Free & freemium only"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-success" /> {item}
                  </li>
                ))}
              </ul>

              <Link href="/categories/ai-tools" className="btn-primary inline-flex">
                Explore AI Directory <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {AI_TOOL_SLUGS.map((slug, idx) => (
                <motion.div 
                  key={slug}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="h-full"
                >
                  <ResourceCard {...SITE_RESOURCES[slug]} />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden gradient-bg-animated p-10 md:p-20 text-center"
        >
          <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-8 shadow-2xl border border-white/20">
              <MailIcon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Get the best tools, <br className="hidden md:block"/> delivered weekly.
            </h2>
            <p className="text-white/80 text-xl mb-12 font-medium max-w-2xl mx-auto">
              Join 15,000+ smart creators who receive our curated list of 5 new free resources every Tuesday.
            </p>
            
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail('');
                alert("Thanks for subscribing! (Demo)");
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-all text-lg shadow-inner"
              />
              <button type="submit" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl text-lg">
                Subscribe
              </button>
            </form>
            <p className="text-white/60 text-sm mt-6 font-medium">No spam ever. Unsubscribe with one click.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Inline icons for specific use cases
function SparklesIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
}

function MailIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
}

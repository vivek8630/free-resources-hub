"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Code2, 
  Palette, 
  GraduationCap, 
  Zap, 
  FileText, 
  Image as ImageIcon, 
  Layout,
  Search,
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { resourcesForBrowseSlug } from '@/data/site-resources';

const categories = [
  { icon: Cpu, title: "AI Tools", slug: "ai-tools", color: "from-blue-500 to-cyan-400" },
  { icon: Code2, title: "Coding Resources", slug: "coding-resources", color: "from-purple-500 to-pink-500" },
  { icon: Palette, title: "Design Assets", slug: "design-assets", color: "from-orange-500 to-yellow-500" },
  { icon: GraduationCap, title: "Learning Platforms", slug: "learning-platforms", color: "from-green-500 to-emerald-400" },
  { icon: Zap, title: "Productivity Tools", slug: "productivity-tools", color: "from-red-500 to-rose-400" },
  { icon: Layout, title: "Free Templates", slug: "free-templates", color: "from-indigo-500 to-blue-500" },
  { icon: ImageIcon, title: "Stock Images", slug: "stock-images", color: "from-pink-500 to-rose-500" },
  { icon: FileText, title: "PDFs & eBooks", slug: "pdfs-ebooks", color: "from-teal-500 to-emerald-500" },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Browse by <span className="gradient-text">Category</span></h1>
        <p className="text-text-gray text-lg max-w-2xl">Discover thousands of free resources organized into clear, accessible categories for every creative need.</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
          <input 
            type="text" 
            placeholder="Search categories..."
            className="w-full pl-12 pr-4 py-4 glass rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary border-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Link
            href="/search"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 glass rounded-2xl text-sm font-semibold hover:bg-white/10 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" /> Browse all
          </Link>
          <Link
            href="/categories"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 glass rounded-2xl text-sm font-semibold hover:bg-white/10 transition-all"
          >
            <ArrowUpDown className="w-4 h-4" /> Categories
          </Link>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCategories.map((cat, index) => {
          const inHub = resourcesForBrowseSlug(cat.slug).length;
          return (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2.5rem] relative group overflow-hidden cursor-pointer border-white/10 h-full"
              >
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-8 shadow-lg shadow-black/20`}>
                  <cat.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-text-gray font-medium">
                    {inHub} {inHub === 1 ? "resource" : "resources"} in hub
                  </span>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-gray text-xl">No categories found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

// Add simple ChevronRight if not imported
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  );
}

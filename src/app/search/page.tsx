"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SITE_RESOURCES } from '@/data/site-resources';
import ResourceCard from '@/components/ResourceCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { SearchAutocomplete } from '@/components/SearchAutocomplete';
import { SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = Object.values(SITE_RESOURCES).filter((resource) => {
    if (!query) return true; // show all if no query
    const q = query.toLowerCase();
    return (
      resource.title.toLowerCase().includes(q) ||
      resource.description.toLowerCase().includes(q) ||
      resource.category.toLowerCase().includes(q) ||
      resource.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="container mx-auto px-6 py-12">
      
      {/* Header Area */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Discover <span className="gradient-text">Resources</span>
        </h1>
        <div className="relative z-50">
          <SearchAutocomplete />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4 shrink-0">
          <div className="lg:hidden mb-4">
            <button className="w-full btn-secondary py-3 flex items-center justify-center gap-2">
              <SlidersHorizontal className="w-5 h-5" /> Show Filters
            </button>
          </div>
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>
        </aside>

        {/* Results Grid */}
        <main className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              {query ? `Results for "${query}"` : "All Resources"}
              <span className="ml-3 text-sm font-medium text-text-gray px-2 py-1 bg-surface rounded-full">
                {results.length} found
              </span>
            </h2>
            <select className="bg-surface border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary">
              <option>Most Relevant</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((r, idx) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="h-full"
                >
                  <ResourceCard {...r} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-card rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-4">No results found</h3>
              <p className="text-text-gray mb-8">We couldn't find anything matching "{query}".</p>
              <button 
                onClick={() => window.history.back()}
                className="btn-secondary"
              >
                Go Back
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}

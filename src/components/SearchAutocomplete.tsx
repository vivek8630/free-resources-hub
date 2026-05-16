"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Zap, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SITE_RESOURCES, SiteResource } from '@/data/site-resources';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<SiteResource[]>([]);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic fuzzy search simulation
    if (query.length > 1) {
      const allResources = Object.values(SITE_RESOURCES);
      const filtered = allResources.filter(r => 
        r.title.toLowerCase().includes(query.toLowerCase()) || 
        r.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
        r.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Max 5 suggestions
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsFocused(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50" ref={wrapperRef}>
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className={`relative glass-strong rounded-2xl flex items-center p-2 border ${isFocused ? 'border-primary/50' : 'border-white/20'} transition-colors`}>
          <div className="pl-4 shrink-0 text-text-gray">
            <Search className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search AI tools, APIs, icons..."
            className="bg-transparent border-none focus:ring-0 w-full px-4 py-4 text-lg outline-none placeholder:text-text-gray/50"
            autoComplete="off"
          />
          <button type="submit" className="btn-primary py-3 px-8 rounded-xl shrink-0 hidden sm:flex">
            Search
          </button>
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      <AnimatePresence>
        {isFocused && query.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 glass-strong rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
          >
            {results.length > 0 ? (
              <div className="flex flex-col">
                <div className="px-4 py-2 text-xs font-semibold text-text-gray uppercase tracking-wider bg-surface/50 border-b border-white/5">
                  Suggestions
                </div>
                {results.map((r, i) => (
                  <div 
                    key={r.slug}
                    onClick={() => {
                      setQuery('');
                      setIsFocused(false);
                      router.push(`/resource/${r.slug}`);
                    }}
                    className="flex items-center justify-between p-4 hover:bg-surface transition-colors cursor-pointer border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {r.title.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground flex items-center gap-2">
                          {r.title}
                          {r.isTrending && <Zap className="w-3 h-3 text-accent fill-accent" />}
                        </div>
                        <div className="text-xs text-text-gray">{r.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-gray opacity-50" />
                  </div>
                ))}
                <div 
                  className="p-3 text-center text-sm font-semibold text-primary bg-surface/50 hover:bg-surface cursor-pointer transition-colors"
                  onClick={handleSearch}
                >
                  View all results for "{query}"
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-text-gray">
                No exact matches found for "{query}". <br />
                <span className="text-sm">Try hitting enter to perform a deep search.</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

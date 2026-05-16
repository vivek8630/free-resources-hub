"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const quickFilters = ['AI Tools', 'Design', 'Coding', 'Marketing'];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative group mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative glass-strong rounded-2xl flex items-center p-2 border-white/20">
          <div className="pl-4 shrink-0 text-text-gray">
            <Search className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for free tools, icons, APIs..."
            className="bg-transparent border-none focus:ring-0 w-full px-4 py-4 text-lg outline-none placeholder:text-text-gray/50"
          />
          <button type="submit" className="btn-primary py-3 px-8 rounded-xl shrink-0 hidden sm:flex">
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-text-gray">
        <span className="opacity-70">Popular:</span>
        {quickFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setQuery(filter)}
            className="px-3 py-1 rounded-full glass hover:text-primary transition-colors hover:border-primary/30"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

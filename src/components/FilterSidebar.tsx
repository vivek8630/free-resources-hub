"use client";

import React from 'react';
import { Star, TrendingUp, CheckCircle, SlidersHorizontal, Monitor, Cpu, Paintbrush } from 'lucide-react';

export const FilterSidebar = () => {
  return (
    <div className="w-full glass-card rounded-2xl p-6 sticky top-24">
      <div className="flex items-center gap-2 font-bold text-lg mb-6 pb-4 border-b border-white/10">
        <SlidersHorizontal className="w-5 h-5 text-primary" />
        Filters
      </div>

      <div className="space-y-6 text-sm">
        
        {/* Pricing Filter */}
        <div>
          <h4 className="font-bold text-text-gray uppercase tracking-wider mb-3 text-xs">Pricing</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 cursor-pointer" defaultChecked />
              <span className="group-hover:text-primary transition-colors">100% Free</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 cursor-pointer" defaultChecked />
              <span className="group-hover:text-primary transition-colors">Freemium</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 cursor-pointer" />
              <span className="group-hover:text-primary transition-colors">Open Source</span>
            </label>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold text-text-gray uppercase tracking-wider mb-3 text-xs">Categories</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 cursor-pointer" />
              <Cpu className="w-4 h-4 text-text-gray group-hover:text-primary" />
              <span className="group-hover:text-primary transition-colors">AI Tools</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 cursor-pointer" />
              <Monitor className="w-4 h-4 text-text-gray group-hover:text-primary" />
              <span className="group-hover:text-primary transition-colors">Developer Tools</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 cursor-pointer" />
              <Paintbrush className="w-4 h-4 text-text-gray group-hover:text-primary" />
              <span className="group-hover:text-primary transition-colors">Design Assets</span>
            </label>
          </div>
        </div>

        {/* Quick Filters */}
        <div>
          <h4 className="font-bold text-text-gray uppercase tracking-wider mb-3 text-xs">Quick Filters</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 rounded bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Star className="w-3 h-3 text-text-gray group-hover:text-primary" />
              </div>
              <span className="group-hover:text-primary transition-colors text-xs font-semibold">Editor's Picks</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 rounded bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <TrendingUp className="w-3 h-3 text-text-gray group-hover:text-primary" />
              </div>
              <span className="group-hover:text-primary transition-colors text-xs font-semibold">Trending Now</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 rounded bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <CheckCircle className="w-3 h-3 text-text-gray group-hover:text-primary" />
              </div>
              <span className="group-hover:text-primary transition-colors text-xs font-semibold">Beginner Friendly</span>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};

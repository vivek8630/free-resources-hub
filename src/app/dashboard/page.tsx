"use client";

import React from 'react';
import { GamificationBadges } from '@/components/GamificationBadges';
import { Settings, Bookmark, Clock, Grid } from 'lucide-react';
import ResourceCard from '@/components/ResourceCard';
import { SITE_RESOURCES } from '@/data/site-resources';

export default function Dashboard() {
  // Mock saved tools
  const savedTools = [SITE_RESOURCES['chatgpt'], SITE_RESOURCES['vercel']];
  
  return (
    <div className="container mx-auto px-6 py-32">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shrink-0">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-black">
            V
          </div>
        </div>
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-4xl font-black mb-2">Vivek</h1>
          <p className="text-text-gray mb-4">Level 12 • Resource Hunter</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-3 py-1 glass rounded-full text-xs font-bold text-primary">520 Points</span>
            <span className="px-3 py-1 glass rounded-full text-xs font-bold text-secondary">14 Saved</span>
            <span className="px-3 py-1 glass rounded-full text-xs font-bold text-accent">5 Reviews</span>
          </div>
        </div>
        <button className="btn-secondary hidden md:flex shrink-0 gap-2">
          <Settings className="w-4 h-4" /> Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Sidebar Nav */}
        <div className="space-y-2">
          <div className="font-bold text-xs uppercase tracking-wider text-text-gray mb-4 px-4">Menu</div>
          <button className="w-full text-left px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold flex items-center gap-3 transition-colors">
            <Grid className="w-5 h-5" /> Overview
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-surface font-medium flex items-center gap-3 transition-colors text-text-gray hover:text-white">
            <Bookmark className="w-5 h-5" /> Saved Resources
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-surface font-medium flex items-center gap-3 transition-colors text-text-gray hover:text-white">
            <Clock className="w-5 h-5" /> History
          </button>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          
          {/* Achievements Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <button className="text-sm text-primary hover:underline font-medium">View All</button>
            </div>
            <GamificationBadges />
          </section>

          {/* Recently Saved Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold">Recently Saved</h2>
              <button className="text-sm text-primary hover:underline font-medium">Manage Collections</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedTools.map(tool => (
                <ResourceCard key={tool.slug} {...tool} />
              ))}
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}

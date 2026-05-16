"use client";

import React, { useState } from 'react';
import { SITE_RESOURCES, SiteResource } from '@/data/site-resources';
import { Check, X, ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparePage() {
  const allTools = Object.values(SITE_RESOURCES);
  
  const [tool1, setTool1] = useState<SiteResource>(SITE_RESOURCES['chatgpt']);
  const [tool2, setTool2] = useState<SiteResource>(SITE_RESOURCES['claude']);

  return (
    <div className="container mx-auto px-6 py-32 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Compare Tools Side-by-Side</h1>
        <p className="text-text-gray text-lg">Find the perfect tool for your workflow by comparing features, pricing, and ratings.</p>
      </div>

      {/* Selectors */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="flex-1 w-full">
          <select 
            className="w-full glass-strong p-4 rounded-2xl border-white/10 focus:outline-none focus:border-primary font-bold text-lg"
            value={tool1.slug}
            onChange={(e) => setTool1(SITE_RESOURCES[e.target.value])}
          >
            {allTools.map(t => <option key={`t1-${t.slug}`} value={t.slug}>{t.title}</option>)}
          </select>
        </div>
        <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 shadow-lg">
          <ArrowRightLeft className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 w-full">
          <select 
            className="w-full glass-strong p-4 rounded-2xl border-white/10 focus:outline-none focus:border-secondary font-bold text-lg"
            value={tool2.slug}
            onChange={(e) => setTool2(SITE_RESOURCES[e.target.value])}
          >
            {allTools.map(t => <option key={`t2-${t.slug}`} value={t.slug}>{t.title}</option>)}
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="glass-card rounded-[2rem] overflow-hidden">
        
        {/* Headers */}
        <div className="grid grid-cols-3 p-6 border-b border-white/5 bg-surface">
          <div className="font-bold text-text-gray uppercase tracking-wider text-sm flex items-center">Features</div>
          <div className="text-center border-l border-white/5 px-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-black text-2xl text-primary mb-2">
              {tool1.title.charAt(0)}
            </div>
            <h3 className="font-bold text-xl">{tool1.title}</h3>
          </div>
          <div className="text-center border-l border-white/5 px-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center font-black text-2xl text-secondary mb-2">
              {tool2.title.charAt(0)}
            </div>
            <h3 className="font-bold text-xl">{tool2.title}</h3>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/5">
          
          <div className="grid grid-cols-3 p-6 hover:bg-surface/30 transition-colors">
            <div className="font-medium text-text-gray flex items-center">Category</div>
            <div className="text-center border-l border-white/5 font-bold">{tool1.category}</div>
            <div className="text-center border-l border-white/5 font-bold">{tool2.category}</div>
          </div>
          
          <div className="grid grid-cols-3 p-6 hover:bg-surface/30 transition-colors">
            <div className="font-medium text-text-gray flex items-center">Community Rating</div>
            <div className="text-center border-l border-white/5 font-bold text-accent">{tool1.rating} / 5.0</div>
            <div className="text-center border-l border-white/5 font-bold text-accent">{tool2.rating} / 5.0</div>
          </div>
          
          <div className="grid grid-cols-3 p-6 hover:bg-surface/30 transition-colors">
            <div className="font-medium text-text-gray flex items-center">Pricing Model</div>
            <div className="text-center border-l border-white/5 font-bold text-success">Freemium</div>
            <div className="text-center border-l border-white/5 font-bold text-success">Freemium</div>
          </div>
          
          <div className="grid grid-cols-3 p-6 hover:bg-surface/30 transition-colors">
            <div className="font-medium text-text-gray flex items-center">API Access</div>
            <div className="flex justify-center items-center border-l border-white/5">
              {tool1.category.includes('AI') ? <Check className="text-success" /> : <X className="text-text-gray" />}
            </div>
            <div className="flex justify-center items-center border-l border-white/5">
              {tool2.category.includes('AI') ? <Check className="text-success" /> : <X className="text-text-gray" />}
            </div>
          </div>

          <div className="grid grid-cols-3 p-6 hover:bg-surface/30 transition-colors">
            <div className="font-medium text-text-gray">Best For</div>
            <div className="text-center border-l border-white/5 text-sm">General purpose, brainstorming, and writing</div>
            <div className="text-center border-l border-white/5 text-sm">Large context windows and coding tasks</div>
          </div>

        </div>

      </div>
    </div>
  );
}

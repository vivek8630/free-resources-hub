"use client";

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Star, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { BadgeLabel } from './BadgeLabel';

interface DailyFeaturedToolProps {
  tool: {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    rating: number;
    websiteUrl: string;
  };
}

export const DailyFeaturedTool: React.FC<DailyFeaturedToolProps> = ({ tool }) => {
  return (
    <div className="relative rounded-[2.5rem] overflow-hidden glass-strong border-primary-glow p-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 bg-card rounded-[2.3rem] overflow-hidden">
        {/* Left Side: Visual Preview */}
        <div className="h-64 lg:h-auto min-h-[300px] gradient-bg-animated relative p-8 flex flex-col justify-between">
          <div className="absolute inset-0 noise-overlay opacity-50" />
          <div className="relative z-10 flex justify-between items-start">
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 shadow-xl">
              <Star className="w-4 h-4 fill-white text-white" /> Tool of the Day
            </div>
            <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-xl">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative z-10 text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-24 h-24 bg-white rounded-3xl mx-auto shadow-2xl flex items-center justify-center mb-6 transform -rotate-3"
            >
              <span className="text-4xl font-black gradient-text text-transparent bg-clip-text">
                {tool.title.charAt(0)}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            <BadgeLabel type="editor" />
            <BadgeLabel type="free" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{tool.title}</h3>
          <p className="text-lg text-text-gray mb-8 leading-relaxed">
            {tool.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tool.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-surface text-text-gray rounded-lg text-sm font-medium border border-white/5">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
            <a 
              href={tool.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-primary py-4"
            >
              Try it for free <ExternalLink className="w-5 h-5" />
            </a>
            <Link 
              href={`/resource/${tool.slug}`}
              className="w-full sm:w-auto btn-secondary py-4"
            >
              Read full review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

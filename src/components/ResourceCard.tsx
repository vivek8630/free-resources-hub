"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Bookmark, Star, Users } from "lucide-react";
import { BadgeLabel } from "./BadgeLabel";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  rating: number;
  isTrending?: boolean;
  isNew?: boolean;
  slug: string;
  websiteUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  tags,
  rating,
  isTrending,
  isNew,
  slug,
  websiteUrl,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
    // Real app would persist to localStorage or DB here
  };

  return (
    <Link href={`/resource/${slug}`} className="block h-full group outline-none">
      <div className="glass-card hover-lift rounded-[2rem] h-full flex flex-col overflow-hidden relative">
        
        {/* Top Gradient Area */}
        <div className="h-32 bg-gradient-to-br from-surface to-surface-hover relative overflow-hidden p-5 border-b border-white/5">
          <div className="absolute inset-0 noise-overlay opacity-50"></div>
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="flex flex-col gap-2">
              {isTrending && <BadgeLabel type="trending" />}
              {isNew && <BadgeLabel type="new" />}
              {rating > 4.8 && !isTrending && <BadgeLabel type="editor" />}
            </div>
            
            <button
              onClick={toggleSave}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isSaved 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white/10 text-text-gray hover:bg-white hover:text-primary backdrop-blur-md'
              }`}
              aria-label={isSaved ? "Remove saved" : "Save resource"}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors"></div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow relative z-10 bg-card">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
              {category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-text-gray mb-6 line-clamp-3 leading-relaxed flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-1 bg-surface rounded-md text-text-gray border border-white/5 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-surface px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-bold">{rating}</span>
              </div>
              <div className="flex items-center gap-1 text-text-gray text-xs">
                <Users className="w-3 h-3" /> 1k+
              </div>
            </div>
            
            <div
              className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-gray group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-y-1 group-hover:shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;

"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, Bookmark, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  tags: string[];
  rating: number;
  isTrending?: boolean;
  /** URL path segment, e.g. `chatgpt` → `/resource/chatgpt` */
  slug: string;
  /** Official site opened in a new tab from “Visit Website” */
  websiteUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  tags,
  rating,
  isTrending,
  slug,
  websiteUrl,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass glass-hover rounded-2xl overflow-hidden group border-white/10"
    >
      <div className="h-48 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        {isTrending && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-black" /> TRENDING
          </div>
        )}
        <button
          type="button"
          className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
          aria-label="Save resource"
        >
          <Bookmark className="w-4 h-4" />
        </button>
        <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-secondary mb-3 uppercase tracking-wider">
          {category}
        </div>
        <Link
          href={`/resource/${slug}`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-gray text-sm mb-6 line-clamp-2">{description}</p>
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-text-gray border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold">{rating}</span>
          </div>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors group/btn"
          >
            Visit Website{" "}
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bookmark, Heart, Grid, List as ListIcon, Trash2 } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import { SITE_RESOURCES } from "@/data/site-resources";

const savedResourceSlugs = ["chatgpt", "figma"] as const;

const SavedResourcesPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-4">
            <Bookmark className="w-10 h-10 text-primary" /> Your{" "}
            <span className="gradient-text">Saved Hub</span>
          </h1>
          <p className="text-text-gray text-lg">
            Manage and access your curated list of favorite free resources.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
            className={`p-3 glass rounded-xl transition-colors ${
              view === "grid" ? "text-primary ring-1 ring-primary/40" : "text-text-gray hover:text-white"
            }`}
            aria-label="Grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
            className={`p-3 glass rounded-xl transition-colors ${
              view === "list" ? "text-primary ring-1 ring-primary/40" : "text-text-gray hover:text-white"
            }`}
            aria-label="List view"
          >
            <ListIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {savedResourceSlugs.length > 0 ? (
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              : "flex flex-col gap-8 max-w-3xl mx-auto"
          }
        >
          {savedResourceSlugs.map((slug) => {
            const resource = SITE_RESOURCES[slug];
            return (
              <div key={slug} className="relative group">
                <ResourceCard
                  slug={resource.slug}
                  websiteUrl={resource.websiteUrl}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  tags={resource.tags}
                  rating={resource.rating}
                  isTrending={resource.isTrending}
                />
                <button
                  type="button"
                  onClick={() => {
                    window.alert(
                      "Demo: connect a database or localStorage to remove saved items.",
                    );
                  }}
                  className="absolute top-4 right-14 p-2 bg-red-500/20 backdrop-blur-md rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                  aria-label="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-40 glass rounded-[3rem] border-white/10">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-primary opacity-20" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No resources saved yet</h3>
          <p className="text-text-gray mb-8">
            Explore the hub and bookmark tools to see them here.
          </p>
          <Link href="/search" className="btn-primary inline-block">
            Explore resources
          </Link>
        </div>
      )}
    </div>
  );
};

export default SavedResourcesPage;

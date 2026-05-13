"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import { searchSiteResources, getAllSiteResources } from "@/lib/resource-search";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const [draft, setDraft] = useState(urlQuery);

  useEffect(() => {
    setDraft(urlQuery);
  }, [urlQuery]);

  const results = useMemo(
    () => searchSiteResources(urlQuery),
    [urlQuery],
  );
  const total = getAllSiteResources().length;

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Search <span className="gradient-text">Resources</span>
      </h1>
      <p className="text-text-gray text-lg mb-10 max-w-2xl">
        Search across <strong className="text-text-white">{total}</strong> curated
        tools by name, tag, category, or description.
      </p>

      <form
        action="/search"
        method="get"
        className="flex flex-col sm:flex-row gap-3 mb-12 max-w-3xl"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
          <input
            type="search"
            name="q"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="e.g. AI, icons, database, course…"
            className="w-full pl-12 pr-4 py-4 glass rounded-2xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <button type="submit" className="btn-primary px-8 py-4 rounded-2xl shrink-0">
          Search
        </button>
      </form>

      {urlQuery.trim() ? (
        <p className="text-text-gray mb-8">
          {results.length} result{results.length === 1 ? "" : "s"} for{" "}
          <span className="text-text-white font-semibold">&quot;{urlQuery}&quot;</span>
        </p>
      ) : (
        <p className="text-text-gray mb-8">
          Showing all {results.length} resources. Add keywords above to narrow results.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results.map((resource) => (
          <ResourceCard
            key={resource.slug}
            slug={resource.slug}
            websiteUrl={resource.websiteUrl}
            title={resource.title}
            description={resource.description}
            category={resource.category}
            tags={resource.tags}
            rating={resource.rating}
            isTrending={resource.isTrending}
          />
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-16 glass rounded-3xl border border-white/10 mt-8">
          <p className="text-text-gray mb-6">No matches. Try a shorter word or browse categories.</p>
          <Link href="/categories" className="btn-primary inline-block">
            Browse categories
          </Link>
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import {
  getBrowseCategoryDef,
  resourcesForBrowseSlug,
} from "@/data/site-resources";

export default function CategoryResourcesPage() {
  const params = useParams();
  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
        ? (params.slug[0] ?? "")
        : "";

  const def = getBrowseCategoryDef(slug);
  const resources = def ? resourcesForBrowseSlug(slug) : [];

  if (!def) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Link
          href="/categories"
          className="text-primary font-semibold underline hover:no-underline"
        >
          Back to categories
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Link
        href="/categories"
        className="inline-flex items-center gap-2 text-text-gray hover:text-primary transition-colors mb-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        All categories
      </Link>

      <header className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {def.title}
        </h1>
        <p className="text-text-gray text-lg max-w-2xl">
          {resources.length === 0
            ? "No resources are listed in this category yet. Try another category or suggest a tool on the Submit page."
            : `Showing ${resources.length} resource${resources.length === 1 ? "" : "s"} in this hub for “${def.title}”.`}
        </p>
      </header>

      {resources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {resources.map((resource) => (
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
      ) : (
        <div className="glass rounded-3xl border border-white/10 p-16 text-center max-w-xl mx-auto">
          <p className="text-text-gray mb-6">
            This category is ready for content—add matching entries in{" "}
            <code className="text-primary text-sm">src/data/site-resources.ts</code>{" "}
            to populate it.
          </p>
          <Link href="/" className="btn-primary inline-block">
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
}

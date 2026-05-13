"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ExternalLink,
  Bookmark,
  Star,
  ArrowLeft,
  CheckCircle2,
  Info,
  Share2,
  Calendar,
  Eye,
  MessageSquare,
  Search,
} from "lucide-react";
import { SITE_RESOURCES } from "@/data/site-resources";

export default function ResourceDetailPage() {
  const params = useParams();
  const [shareHint, setShareHint] = useState(false);
  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
        ? (params.id[0] ?? "")
        : "";

  const resource = SITE_RESOURCES[id];

  const handleShare = async () => {
    if (!resource) return;
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: resource.title, text: resource.description, url });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      }
      setShareHint(true);
      window.setTimeout(() => setShareHint(false), 2200);
    } catch {
      /* user cancelled or clipboard blocked */
    }
  };

  if (!resource) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Resource not found</h1>
        <p className="text-text-gray mb-8">
          We don&apos;t have a page for that link yet.
        </p>
        <Link
          href="/"
          className="text-primary font-semibold underline hover:no-underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Link
        href="/categories"
        className="inline-flex items-center gap-2 text-text-gray hover:text-primary transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
        Back to Resources
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 gradient-bg rounded-3xl flex items-center justify-center shadow-2xl text-white font-bold text-4xl">
                  {resource.title[0]}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold">{resource.title}</h1>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-text-gray text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />{" "}
                      {resource.rating} ({resource.reviews} reviews)
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {resource.visits} visits
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/saved"
                  className="p-4 glass rounded-2xl hover:text-primary transition-colors inline-flex"
                  aria-label="View saved resources"
                >
                  <Bookmark className="w-6 h-6" />
                </Link>
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-4 glass rounded-2xl hover:text-primary transition-colors"
                  aria-label="Share this resource"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            <p className="text-xl text-text-white/80 leading-relaxed mb-8">
              {resource.description}
            </p>
            {shareHint && (
              <p className="text-sm text-primary mb-4" role="status">
                Link copied or shared.
              </p>
            )}

            <div className="flex flex-wrap gap-3 mb-12">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 glass rounded-xl text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Key Free Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resource.freeFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-2xl font-bold border-l-4 border-secondary pl-4">
              About {resource.title}
            </h3>
            <p className="text-text-gray leading-relaxed text-lg">
              {resource.longDescription}
            </p>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="glass p-8 rounded-[2.5rem] border-white/10 sticky top-32">
            <form action="/search" method="get" className="mb-8">
              <label className="text-xs font-bold text-text-gray uppercase tracking-widest mb-2 block">
                Search the hub
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-gray pointer-events-none" />
                  <input
                    type="search"
                    name="q"
                    placeholder="icons, API, course…"
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button type="submit" className="px-4 py-3 rounded-xl bg-primary text-white text-sm font-bold shrink-0">
                  Go
                </button>
              </div>
            </form>

            <a
              href={resource.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg mb-8"
            >
              Visit Official Website{" "}
              <ExternalLink className="w-5 h-5" />
            </a>

            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-gray flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Last Updated
                </span>
                <span className="font-bold">{resource.lastUpdated}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-gray flex items-center gap-2">
                  <Info className="w-4 h-4" /> License
                </span>
                <span className="font-bold">Free / Freemium</span>
              </div>
              <div className="pt-6 border-t border-white/5">
                <h4 className="font-bold mb-4">Use Cases</h4>
                <div className="space-y-3">
                  {resource.useCases.map((use, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-text-gray"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {use}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Community Note
              </h4>
              <p className="text-xs text-text-gray leading-relaxed">
                &quot;Well-known pick in this category—worth bookmarking and
                trying the free tier first.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

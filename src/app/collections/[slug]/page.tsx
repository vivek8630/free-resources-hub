import React from 'react';
import { SITE_RESOURCES } from '@/data/site-resources';
import ResourceCard from '@/components/ResourceCard';
import { FilterSidebar } from '@/components/FilterSidebar';

export default function CollectionPage({ params }: { params: { slug: string } }) {
  // Convert slug to readable title (e.g., best-ai-tools -> Best AI Tools)
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Mock getting specific tools for a collection
  const resources = Object.values(SITE_RESOURCES).slice(0, 6);

  return (
    <div className="container mx-auto px-6 py-32">
      
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold mb-6 uppercase tracking-wider border border-primary/30">
          Curated Collection
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6">{title}</h1>
        <p className="text-xl text-text-gray max-w-3xl">
          We have hand-picked and tested the absolute best {title.toLowerCase()} available for free. 
          Updated weekly by our editorial team.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <aside className="lg:w-1/4 shrink-0 hidden lg:block">
          <FilterSidebar />
        </aside>

        <main className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map(r => (
              <ResourceCard key={r.slug} {...r} />
            ))}
          </div>
        </main>
        
      </div>

    </div>
  );
}

"use client";

import React from 'react';
import { SiteResource } from '@/data/site-resources';
import ResourceCard from './ResourceCard';

interface RelatedToolsProps {
  tools: SiteResource[];
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({ tools }) => {
  if (tools.length === 0) return null;

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-8">You might also like...</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.slice(0, 3).map(tool => (
          <ResourceCard key={tool.slug} {...tool} />
        ))}
      </div>
    </div>
  );
};

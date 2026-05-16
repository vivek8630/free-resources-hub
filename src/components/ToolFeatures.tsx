import React from 'react';
import { CheckCircle2, XCircle, LayoutGrid } from 'lucide-react';

interface ToolFeaturesProps {
  useCases: string[];
  features: string[];
}

export const ToolFeatures: React.FC<ToolFeaturesProps> = ({ useCases, features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Features List */}
      <div className="glass-card p-8 rounded-3xl">
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
          <LayoutGrid className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold">Key Features</h3>
        </div>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <span className="text-text-gray">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Best Use Cases */}
      <div className="glass-card p-8 rounded-3xl">
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <h3 className="text-xl font-bold">Best Use Cases</h3>
        </div>
        <ul className="space-y-4">
          {useCases.map((uc, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></div>
              <span className="text-text-gray">{uc}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

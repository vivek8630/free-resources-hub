import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  desc: string;
  slug: string;
  color: string;
  icon: LucideIcon;
  count?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, desc, slug, color, icon: Icon, count }) => {
  return (
    <Link href={`/categories/${slug}`} className="block h-full outline-none">
      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card p-6 md:p-8 rounded-[2rem] group relative overflow-hidden h-full flex flex-col justify-between"
      >
        {/* Animated Background Blob */}
        <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br ${color} blur-2xl group-hover:scale-150 transition-transform duration-500 rounded-full`} />
        
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            {count !== undefined && (
              <span className="glass px-3 py-1 rounded-full text-xs font-bold text-text-gray group-hover:text-primary transition-colors">
                {count} Tools
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-text-gray line-clamp-2">{desc}</p>
        </div>

        <div className="mt-8 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          Explore Collection <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </motion.div>
    </Link>
  );
};

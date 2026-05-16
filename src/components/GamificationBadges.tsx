import React from 'react';
import { Trophy, Flame, Star, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface BadgeProps {
  title: string;
  icon: React.ElementType;
  description: string;
  unlocked: boolean;
  color: string;
}

const BADGES: BadgeProps[] = [
  { title: 'Top Contributor', icon: Trophy, description: 'Submitted 10+ approved resources', unlocked: true, color: 'text-yellow-500' },
  { title: 'Trend Hunter', icon: Flame, description: 'Saved a tool before it reached Top 5', unlocked: true, color: 'text-orange-500' },
  { title: 'Resource Expert', icon: Star, description: 'Reviewed 5+ tools with helpful votes', unlocked: false, color: 'text-blue-500' },
  { title: 'Early Adopter', icon: Zap, description: 'Joined during the first 3 months', unlocked: true, color: 'text-purple-500' },
  { title: 'Community Pillar', icon: Award, description: 'Received 100+ upvotes on reviews', unlocked: false, color: 'text-emerald-500' },
];

export const GamificationBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {BADGES.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div 
            key={badge.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-4 rounded-2xl flex flex-col items-center text-center relative overflow-hidden group ${!badge.unlocked ? 'opacity-50 grayscale' : ''}`}
          >
            {badge.unlocked && (
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            )}
            
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${badge.unlocked ? 'bg-surface shadow-lg' : 'bg-surface-hover'}`}>
              <Icon className={`w-6 h-6 ${badge.unlocked ? badge.color : 'text-text-gray'}`} />
            </div>
            
            <h4 className="font-bold text-sm mb-1">{badge.title}</h4>
            <p className="text-[10px] text-text-gray leading-tight">{badge.description}</p>
            
            {!badge.unlocked && (
              <div className="absolute top-2 right-2 text-[10px] uppercase font-bold text-text-gray/50 tracking-wider">
                Locked
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

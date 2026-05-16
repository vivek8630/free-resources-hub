import React from 'react';
import { Star, Sparkles, TrendingUp, Zap, GraduationCap } from 'lucide-react';

export type BadgeType = 'trending' | 'new' | 'editor' | 'free' | 'student';

interface BadgeLabelProps {
  type: BadgeType;
  className?: string;
}

export const BadgeLabel: React.FC<BadgeLabelProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'trending':
      return (
        <div className={`badge-trending ${className}`}>
          <TrendingUp className="w-3 h-3" />
          <span>TRENDING</span>
        </div>
      );
    case 'new':
      return (
        <div className={`badge-new ${className}`}>
          <Sparkles className="w-3 h-3" />
          <span>NEW</span>
        </div>
      );
    case 'editor':
      return (
        <div className={`badge-editor ${className}`}>
          <Star className="w-3 h-3 fill-current" />
          <span>EDITOR'S PICK</span>
        </div>
      );
    case 'free':
      return (
        <div className={`badge-free ${className}`}>
          <Zap className="w-3 h-3" />
          <span>FREE</span>
        </div>
      );
    case 'student':
      return (
        <div className={`badge-category flex-row ${className}`}>
          <GraduationCap className="w-3 h-3" />
          <span>Student Friendly</span>
        </div>
      );
    default:
      return null;
  }
};

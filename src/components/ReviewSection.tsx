"use client";

import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReviewSection = () => {
  const [reviews] = useState([
    { id: 1, user: "Alex Rivera", role: "Frontend Dev", rating: 5, content: "This tool completely changed my workflow. Highly recommend it to anyone in the field.", upvotes: 42 },
    { id: 2, user: "Sarah Chen", role: "UI Designer", rating: 4, content: "Great features, but the free tier is slightly limited. Still the best option out there.", upvotes: 15 },
    { id: 3, user: "Mike Johnson", role: "Student", rating: 5, content: "Incredible that this is free. The UI is so intuitive.", upvotes: 8 },
  ]);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        Community Reviews <span className="bg-surface px-2 py-1 rounded-full text-sm text-text-gray">{reviews.length}</span>
      </h3>

      <div className="glass-strong p-8 rounded-3xl mb-10 flex flex-col sm:flex-row items-center gap-8 justify-between">
        <div>
          <h4 className="text-lg font-bold mb-2">Write a Review</h4>
          <p className="text-text-gray text-sm">Share your experience with the community.</p>
        </div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 text-surface-hover cursor-pointer hover:text-accent transition-colors" />)}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={review.id} 
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{review.user}</div>
                  <div className="text-xs text-text-gray">{review.role}</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'text-accent fill-accent' : 'text-surface-hover fill-surface-hover'}`} />
                ))}
              </div>
            </div>
            
            <p className="text-text-gray text-sm mb-6 leading-relaxed">
              "{review.content}"
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-white/5">
              <button className="flex items-center gap-2 text-xs text-text-gray hover:text-primary transition-colors">
                <ThumbsUp className="w-4 h-4" /> {review.upvotes} Helpful
              </button>
              <button className="flex items-center gap-2 text-xs text-text-gray hover:text-secondary transition-colors">
                <MessageSquare className="w-4 h-4" /> Reply
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

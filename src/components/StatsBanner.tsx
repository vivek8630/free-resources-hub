"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const StatsBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Free Resources", value: "2,400+" },
    { label: "Curated Categories", value: "50+" },
    { label: "Monthly Users", value: "100k+" },
  ];

  if (!mounted) return <div className="h-20" />; // Prevent hydration mismatch

  return (
    <div className="glass-strong border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute inset-0 mesh-bg opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold gradient-text mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-text-gray font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

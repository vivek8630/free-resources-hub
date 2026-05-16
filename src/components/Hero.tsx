"use client";

import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { motion } from 'framer-motion';

const Hero = () => {
  const words = ["AI Tools", "Design Assets", "Coding Resources", "Free Templates"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 mesh-bg opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-lg bg-accent-pink/10 rounded-full mix-blend-screen filter blur-[120px] animate-float"></div>
      
      <div className="absolute inset-0 noise-overlay opacity-[0.15] mix-blend-overlay"></div>

      <div className="container relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-sm font-semibold tracking-wide text-text-gray uppercase">
            Curated Discovery Platform
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] text-balance"
        >
          Discover the Best <br />
          <span className="relative inline-block min-w-[280px] md:min-w-[400px] text-left">
            <span className="gradient-text absolute inset-0">
              {words[currentWord]}
            </span>
            <span className="opacity-0">{words[0]}</span> {/* invisible placeholder for layout */}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-gray mb-12 max-w-2xl mx-auto font-medium"
        >
          Stop searching. Start building. We curate the highest quality free resources for creators, developers, and designers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-3xl mb-8"
        >
          <SearchBar />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

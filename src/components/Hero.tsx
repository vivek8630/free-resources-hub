"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-text-gray">The #1 Curated Resource Library</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Discover the Best <br />
          <span className="gradient-text">Free Resources</span> on the Web
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-text-gray mb-12 max-w-2xl mx-auto"
        >
          Find tools, websites, PDFs, icons, templates, AI tools, and learning resources — all in one place, curated for creators and developers.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <form action="/search" method="get" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative glass rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center p-2 border-white/20 gap-2">
              <div className="flex items-center flex-1 min-w-0">
                <div className="pl-4 shrink-0">
                  <Search className="w-6 h-6 text-text-gray" />
                </div>
                <input 
                  type="search"
                  name="q"
                  placeholder="Search AI tools, icons, fonts, courses..."
                  className="bg-transparent border-none focus:ring-0 w-full px-4 py-3 text-lg outline-none"
                />
              </div>
              <button type="submit" className="btn-primary py-3 px-8 sm:shrink-0 rounded-xl">
                Search
              </button>
            </div>
          </form>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/categories" className="flex items-center gap-2 text-lg font-semibold hover:text-secondary transition-colors group">
            Explore Categories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/submit" className="glass px-8 py-4 rounded-full font-semibold border-white/20 hover:bg-white/10 transition-all inline-block text-center">
            Submit a Resource
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

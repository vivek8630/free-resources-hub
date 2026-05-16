"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Bookmark, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 px-4 sm:px-6`}>
        <div className={`mx-auto max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between px-6 py-4 ${isScrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              FreeResources<span className="gradient-text">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/categories" className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-surface transition-colors">Categories</Link>
            <div className="relative">
              <Link href="/categories/ai-tools" className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-surface transition-colors flex items-center gap-1">
                AI Tools
                <span className="absolute top-1 right-2 w-2 h-2 bg-accent-pink rounded-full animate-pulse"></span>
              </Link>
            </div>
            <Link href="/about" className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-surface transition-colors">About</Link>
            
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            
            <Link href="/search" className="p-2 hover:bg-surface rounded-full transition-colors group" aria-label="Search resources">
              <Search className="w-5 h-5 text-text-gray group-hover:text-primary transition-colors" />
            </Link>
            <Link href="/saved" className="p-2 hover:bg-surface rounded-full transition-colors group">
              <Bookmark className="w-5 h-5 text-text-gray group-hover:text-primary transition-colors" />
            </Link>
            <div className="px-2">
              <ThemeToggle />
            </div>
            <Link href="/submit" className="btn-primary py-2 px-5 text-sm ml-2">
              Submit Tool
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-surface rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass-strong z-50 md:hidden flex flex-col p-6 shadow-2xl border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-surface rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-grow">
                <Link href="/search" className="flex items-center gap-3 p-4 rounded-2xl bg-surface hover:bg-surface-hover transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  <Search className="w-5 h-5 text-primary" /> Search
                </Link>
                <Link href="/categories" className="text-lg font-medium p-3 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
                <Link href="/categories/ai-tools" className="text-lg font-medium p-3 hover:text-primary transition-colors flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                  AI Tools <span className="text-xs bg-accent-pink/20 text-accent-pink px-2 py-1 rounded-full">Hot</span>
                </Link>
                <Link href="/about" className="text-lg font-medium p-3 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                
                <div className="h-px bg-white/10 my-2"></div>
                
                <Link href="/saved" className="flex items-center gap-3 text-lg font-medium p-3 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <Bookmark className="w-5 h-5" /> Saved Resources
                </Link>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <Link href="/login" className="btn-secondary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
                <Link href="/submit" className="btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Submit a Tool
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

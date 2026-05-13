"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Bookmark, User } from 'lucide-react';
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            FreeResources<span className="gradient-text">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          <div className="h-6 w-px bg-white/10"></div>
          <div className="flex items-center gap-4">
            <Link href="/search" className="p-2.5 hover:bg-white/5 rounded-full transition-colors" aria-label="Search resources">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/saved" className="p-2.5 hover:bg-white/5 rounded-full transition-colors">
              <Bookmark className="w-5 h-5" />
            </Link>
            <ThemeToggle />
            <Link href="/login" className="btn-primary py-2.5 px-6 text-sm">
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 hover:bg-white/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <Link href="/search" className="text-lg font-medium p-2 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Search className="w-5 h-5" /> Search
              </Link>
              <Link href="/categories" className="text-lg font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
              <Link href="/about" className="text-lg font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className="text-lg font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/saved" className="flex items-center gap-2 text-lg font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Bookmark className="w-5 h-5" /> Saved Resources
              </Link>
              <Link href="/login" className="btn-primary text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

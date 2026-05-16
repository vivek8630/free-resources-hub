"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Home, Search, Zap, MessageCircle, Globe } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-card-dark border-t border-white/5 pt-24 pb-12 overflow-hidden mt-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                FreeResources<span className="gradient-text">Hub</span>
              </span>
            </Link>
            <p className="text-text-gray text-base leading-relaxed mb-8 max-w-sm">
              The ultimate discovery platform for creators and developers. We curate the internet's best free tools so you don't have to.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/search" className="text-text-gray hover:text-white transition-colors">Explore</Link></li>
              <li><Link href="/categories" className="text-text-gray hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/saved" className="text-text-gray hover:text-white transition-colors">Saved Items</Link></li>
              <li><Link href="/submit" className="text-text-gray hover:text-white transition-colors">Submit Tool</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Categories</h4>
            <ul className="space-y-4">
              <li><Link href="/categories/ai-tools" className="text-text-gray hover:text-white transition-colors">AI Tools</Link></li>
              <li><Link href="/categories/coding-resources" className="text-text-gray hover:text-white transition-colors">Developer Tools</Link></li>
              <li><Link href="/categories/design-assets" className="text-text-gray hover:text-white transition-colors">Design Assets</Link></li>
              <li><Link href="/categories/productivity-tools" className="text-text-gray hover:text-white transition-colors">Productivity</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <div className="glass-card p-6 rounded-2xl bg-surface/50 border-white/5">
              <p className="text-text-gray text-sm mb-6">Join 15,000+ creators getting our weekly roundup of the best new free tools.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-surface border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-3 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed! 🎉' : 'Subscribe Now'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-gray text-sm text-center md:text-left">
            © {new Date().getFullYear()} Free Resources Hub. Built with Next.js.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="text-text-gray hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="text-text-gray hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="text-text-gray hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-text-gray hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

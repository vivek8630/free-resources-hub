"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [hint, setHint] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.1),transparent_50%)] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">F</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-text-gray">Continue discovering amazing free resources.</p>
        </div>

        <div className="glass p-8 rounded-3xl border-white/10 shadow-2xl">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setHint("Demo only: connect Auth (Clerk, Supabase, NextAuth…) when you deploy.");
              window.setTimeout(() => setHint(null), 4000);
            }}
          >
            <div>
              <label className="block text-sm font-medium text-text-gray mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-text-gray">Password</label>
                <Link href="/contact" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 group">
              Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            {hint && <p className="text-sm text-primary text-center">{hint}</p>}
          </form>

          <div className="mt-8">
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="px-4 text-xs text-text-gray uppercase tracking-widest font-bold">Or continue with</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 glass rounded-xl hover:bg-white/10 transition-colors"
                onClick={() =>
                  setHint("Demo: wire GitHub OAuth on your deployment.")
                }
              >
                <User className="w-5 h-5" /> GitHub
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 glass rounded-xl hover:bg-white/10 transition-colors"
                onClick={() =>
                  setHint("Demo: wire Google OAuth on your deployment.")
                }
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.36-2.12 4.48-1.48 1.4-3.8 2.36-7.72 2.36-6.44 0-11.52-5.24-11.52-11.68s5.08-11.68 11.52-11.68c3.48 0 6.04 1.36 7.84 3.08l2.32-2.32c-2.12-1.96-5.08-3.48-10.16-3.48-8.92 0-16.2 7.28-16.2 16.2s7.28 16.2 16.2 16.2c4.84 0 8.64-1.6 11.48-4.52 2.84-2.84 3.76-6.84 3.76-10.2 0-.68-.04-1.32-.16-1.92h-15.08z"/>
                </svg> Google
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-text-gray">
          Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Sign up for free</Link>
        </p>
      </motion.div>
    </div>
  );
}

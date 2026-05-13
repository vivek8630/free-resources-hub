"use client";

import React, { useState } from 'react';
import { Upload, Link as LinkIcon, Info, Send } from 'lucide-react';

export default function SubmitPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Submit a <span className="gradient-text">Resource</span></h1>
          <p className="text-text-gray text-lg">Help the community by sharing high-quality free tools, assets, or learning materials.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2rem] border-white/10">
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Resource Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. ChatGPT, Unsplash..."
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Website URL</label>
                <div className="relative">
                  <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input 
                    type="url" 
                    placeholder="https://..."
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Category</label>
              <select className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all appearance-none cursor-pointer">
                <option className="bg-card-dark">Select Category</option>
                <option className="bg-card-dark">AI Tools</option>
                <option className="bg-card-dark">Coding Resources</option>
                <option className="bg-card-dark">Design Assets</option>
                <option className="bg-card-dark">Productivity</option>
                <option className="bg-card-dark">Templates</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Short Description</label>
              <textarea 
                rows={4}
                placeholder="What makes this resource great?"
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Cover Image</label>
              <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <p className="font-bold mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-text-gray">PNG, JPG or WebP (max. 5MB)</p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-text-gray leading-relaxed">
                By submitting, you agree that this resource is truly free or has a significant free tier. Our team will review submissions within 24-48 hours.
              </p>
            </div>

            <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
              Submit for Review <Send className="w-5 h-5" />
            </button>
            {done && (
              <p className="text-center text-sm text-primary" role="status">
                Received (demo). Connect a database or form backend to store real submissions.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Home, Search } from "lucide-react";

const Footer = () => {
  const [joinMsg, setJoinMsg] = useState<string | null>(null);

  return (
    <footer className="bg-card-dark border-t border-base pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                FreeResources<span className="gradient-text">Hub</span>
              </span>
            </Link>
            <p className="text-text-gray text-sm leading-relaxed mb-8">
              The ultimate destination for discovery of free tools, assets, and learning resources across the internet. Built for the community.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="Home">
                <Home className="w-5 h-5" />
              </Link>
              <Link href="/search" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </Link>
              <a
                href="mailto:hello@freeresourceshub.com"
                className="p-2 glass rounded-lg hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-text-gray">
              <li>
                <Link href="/categories/ai-tools" className="hover:text-primary transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/categories/design-assets" className="hover:text-primary transition-colors">
                  Design Assets
                </Link>
              </li>
              <li>
                <Link href="/categories/coding-resources" className="hover:text-primary transition-colors">
                  Coding Resources
                </Link>
              </li>
              <li>
                <Link href="/categories/learning-platforms" className="hover:text-primary transition-colors">
                  Learning Paths
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-text-gray">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-primary transition-colors">
                  Submit Tool
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Subscribe</h4>
            <p className="text-text-gray text-sm mb-6">Get weekly updates on the best free tools directly in your inbox.</p>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setJoinMsg("Thanks — this demo doesn’t send email yet. Connect a newsletter API when you deploy.");
                window.setTimeout(() => setJoinMsg(null), 5000);
              }}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="bg-white/5 border border-base rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary flex-1"
                />
                <button type="submit" className="gradient-bg px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                  Join
                </button>
              </div>
              {joinMsg && <p className="text-xs text-primary">{joinMsg}</p>}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-gray text-center md:text-left">
          <p>© 2026 Free Resources Hub. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy / legal questions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms / feedback
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

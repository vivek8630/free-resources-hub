"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Empowering Creators with <span className="gradient-text">Free Tools</span></h1>
        <p className="text-xl text-text-gray leading-relaxed">
          Free Resources Hub was born out of a simple idea: the best tools for learning and creating shouldn't be locked behind a paywall. We curate the highest quality free resources from across the web to help you build your dreams.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass p-10 rounded-[2.5rem] border-white/10"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-text-gray leading-relaxed">
            To democratize access to high-quality digital assets and educational materials. We believe that talent is universal, but opportunity is not. By providing a centralized hub for free resources, we bridge that gap.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass p-10 rounded-[2.5rem] border-white/10"
        >
          <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Community First</h3>
          <p className="text-text-gray leading-relaxed">
            We are a community-driven platform. Every resource listed is vetted by our team and often suggested by our users. Our goal is to build a supportive ecosystem for creators at all stages.
          </p>
        </motion.div>
      </div>

      <div className="glass p-12 rounded-[3rem] border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Curation Process</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <div>
                  <p className="font-bold">Quality Verification</p>
                  <p className="text-sm text-text-gray">We manually test every tool to ensure it provides real value.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <div>
                  <p className="font-bold">Free-Tier Transparency</p>
                  <p className="text-sm text-text-gray">We prioritize completely free tools or those with generous free tiers.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <div>
                  <p className="font-bold">Regular Updates</p>
                  <p className="text-sm text-text-gray">Broken links and outdated tools are removed promptly.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 text-center">
            <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Heart className="w-16 h-16 text-white animate-pulse" />
            </div>
            <p className="text-2xl font-bold italic">"For the love of creating."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

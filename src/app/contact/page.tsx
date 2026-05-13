"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-text-gray text-lg">Have a question or a suggestion? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-8 rounded-3xl border-white/10">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1">Email Us</h4>
              <p className="text-text-gray text-sm">hello@freeresourceshub.com</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/10">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1">Live Chat</h4>
              <p className="text-text-gray text-sm">Available Mon-Fri, 9am-6pm</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-500">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1">Office</h4>
              <p className="text-text-gray text-sm">123 Creator St, Digital City</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass p-10 rounded-[2.5rem] border-white/10">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option className="bg-card-dark">General Inquiry</option>
                    <option className="bg-card-dark">Partnership</option>
                    <option className="bg-card-dark">Report a Problem</option>
                    <option className="bg-card-dark">Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-gray uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
                  Send Message <Send className="w-5 h-5" />
                </button>
                {sent && (
                  <p className="text-center text-sm text-primary" role="status">
                    Thanks — message captured in this demo. Wire your form to email or a backend when you deploy.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

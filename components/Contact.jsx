"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Info */}
          <div className="lg:!text-left text-center">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Talk With Us
            </motion.span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Let's shape your <br />
              <span className="text-gradient">digital future.</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg lg:mb-12 mx-auto lg:mx-0 max-w-md"
            >
              Tell us about your goals and we’ll match you with the right team
              of designers, developers and growth specialists.
            </motion.p>

            <div className="space-y-6 lg:block hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email us at</div>
                  <div className="text-xl font-medium">hello@digicore.tech</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Call us</div>
                  <div className="text-xl font-medium">+1 (555) 000-1234</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Visit us</div>
                  <div className="text-xl font-medium">
                    123 Design Street, Creative City
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Service Interest
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors">
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>UI/UX & Figma Design</option>
                  <option>WordPress Development</option>
                  <option>SEO & Growth Strategy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>

              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors text-lg">
                Send Message
              </button>
            </form>
          </motion.div>

          <div className="gap-6 grid grid-cols-1 xs:grid-cols-2 lg:hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email us at</div>
                <div className="text-xl font-medium">hello@digicore.tech</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Call us</div>
                <div className="text-xl font-medium">+1 (555) 000-1234</div>
              </div>
            </div>
            <div className="flex items-start gap-4 xs:col-span-2">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Visit us</div>
                <div className="text-xl font-medium">
                  123 Design Street, Creative City
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Big CTA */}
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8">
              Have an idea? <br />
              <span className="text-gray-500">Let's build it.</span>
            </h2>
            <a 
                href="mailto:hello@broxi.com" 
                className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full hover:scale-110 transition-transform duration-300"
            >
                <ArrowUpRight size={32} color="white" />
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
                <h4 className="text-gray-500 mb-6 font-mono uppercase text-sm">Sitemap</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                    <li><a href="#expertise" className="hover:text-primary transition-colors">Services</a></li>
                    <li><a href="#work" className="hover:text-primary transition-colors">Works</a></li>
                    <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-gray-500 mb-6 font-mono uppercase text-sm">Socials</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><Instagram size={16}/> Instagram</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><Twitter size={16}/> Twitter</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded">
                <span className="font-bold text-xs">B</span>
            </div>
            <span>© 2024 BROXI Agency. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
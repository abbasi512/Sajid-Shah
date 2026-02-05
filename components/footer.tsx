'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950/80 border-t border-cyan-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-white font-light">CEO Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm">Leading innovation in AI and equipment intelligence.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about-section" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">About</a></li>
              <li><a href="#projects-section" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Projects</a></li>
              <li><a href="#contact-section" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Speaking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Press</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Twitter</a></li>
              <li><a href="mailto:ceo@onsense.ai" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/10 pt-8 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} CEO Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 text-gray-400 hover:text-cyan-400"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

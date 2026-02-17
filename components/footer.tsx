'use client';

import { ArrowUp, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950/80 border-t border-cyan-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/30">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQELQqqDEujPdg/profile-displayphoto-shrink_800_800/B4EZXQg45rG0Ac-/0/1742960038420?e=1772064000&v=beta&t=rAA-xCVJsJvaPk5z7jtbTQLf6fxsnzSp8frIu59i0H0"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-light text-lg">
                Sajid Shah
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Technologist, entrepreneur, and system builder focused on applied AI,
              operational clarity, and scalable impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#clients-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {/* Email */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:sajid@onsense.ai">sajid@onsense.ai</a>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/sajidshah/" target="_blank" rel="noopener noreferrer">
                  sajidshah
                </a>
              </li>

              {/* Facebook */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                <Facebook className="w-4 h-4" />
                <a href="https://www.facebook.com/SajidShah44" target="_blank" rel="noopener noreferrer">
                  SajidShah44
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                <Instagram className="w-4 h-4" />
                <a href="https://www.instagram.com/shahsahbb/" target="_blank" rel="noopener noreferrer">
                  shahsahbb
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/10 pt-8 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sajid Shah. All rights reserved.
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

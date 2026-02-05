'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about-section' },
    { label: 'Experience', href: '#experience-section' },
    { label: 'Projects', href: '#projects-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
            <img className='rounded-lg' src="https://media.licdn.com/dms/image/v2/D4E03AQELQqqDEujPdg/profile-displayphoto-shrink_800_800/B4EZXQg45rG0Ac-/0/1742960038420?e=1772064000&v=beta&t=rAA-xCVJsJvaPk5z7jtbTQLf6fxsnzSp8frIu59i0H0" />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-light text-sm">Sajid Shah</p>
            <p className="text-cyan-400 text-xs">CEO, OnSense.AI</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="mailto:hello@onsense.ai"
            className="px-6 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 font-light"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20 animate-fadeInDown">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 font-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@onsense.ai"
              className="mt-4 px-6 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 text-center font-light"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

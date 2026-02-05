'use client';

import { useEffect, useState } from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sajidshah/', label: 'LinkedIn', color: 'hover:text-cyan-400', external: true },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-cyan-400', external: true },
    { icon: Mail, href: 'mailto:hello@onsense.ai', label: 'Email', color: 'hover:text-cyan-400', external: false },
  ];

  return (
    <section id="contact-section" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            <span className="text-white">Let's </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400">
              Connect
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            I'm always excited to discuss AI innovation, strategic partnerships, and how we can transform your industry together.
          </p>

          {/* Email highlight */}
          <div className={`flex justify-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.2s' }}>
            <a
              href="mailto:hello@onsense.ai"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:from-cyan-500/30 hover:to-indigo-500/30 transition-all duration-300 flex items-center gap-3"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">hello@onsense.ai</span>
              <span className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-6 flex-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`p-3 bg-slate-800/40 border border-cyan-500/10 rounded-lg transition-all duration-300 text-gray-400 ${social.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Info Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="text-center p-6 border border-cyan-500/10 rounded-xl hover:border-cyan-400/30 transition-colors duration-300">
            <p className="text-sm text-gray-400 mb-2">Location</p>
            <p className="text-white font-medium">Berkeley, CA, USA</p>
            <p className="text-xs text-gray-500">HQ: Sacramento, CA</p>
          </div>
          
          <div className="text-center p-6 border border-cyan-500/10 rounded-xl hover:border-cyan-400/30 transition-colors duration-300">
            <p className="text-sm text-gray-400 mb-2">Company</p>
            <p className="text-white font-medium">OnSense.AI</p>
            <p className="text-xs text-cyan-400">Equipment Management Backbone</p>
          </div>

          <div className="text-center p-6 border border-cyan-500/10 rounded-xl hover:border-cyan-400/30 transition-colors duration-300">
            <p className="text-sm text-gray-400 mb-2">Expertise</p>
            <p className="text-white font-medium">AI/ML & PropTech</p>
            <p className="text-xs text-gray-500">Industry 4.0</p>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
}

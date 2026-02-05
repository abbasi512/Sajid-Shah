'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cyan-400 font-light tracking-widest uppercase my-6">Chief Executive Officer</p>
          
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 animate-fadeInUp">
              Sajid Shah
            </span>
            <br />
            <span className="text-white animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              CEO of OnSense.AI
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Equipment Management Backbone
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Centralizing the equipment maintenance and repair industry with cutting-edge machine learning solutions. 13+ years of tech leadership, driving innovation in AI, PropTech, and Industry 4.0.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col mb-6 sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a href="mailto:hello@onsense.ai" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 inline-block">
              Get in Touch
            </a>
            <a href="#projects-section" className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 inline-block">
              Explore Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about-section" className="absolute cursor-pointer bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </a>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
}

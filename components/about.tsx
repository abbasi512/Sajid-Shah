'use client';

import { useEffect, useState } from 'react';
import { Zap, Brain, Target } from 'lucide-react';
import Image from 'next/image';

export default function About() {
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

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const metrics = [
    { label: 'Years in Tech', value: '13+' },
    { label: 'Companies Led', value: '3' },
    { label: 'Countries Served', value: '50+' },
    { label: 'Team Size', value: '150+' },
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'ML Infrastructure',
      description: 'Built private ML platforms for predictive maintenance, diagnostics, and remote troubleshooting with RLHF capabilities.',
    },
    {
      icon: Target,
      title: 'Industry 4.0',
      description: 'Centralizing equipment maintenance across OEMs, property managers, retailers, and service technicians globally.',
    },
    {
      icon: Zap,
      title: 'Team Leadership',
      description: 'Founded Empower Pakistan, scaled 150+ engineer teams, and mentored emerging tech leaders across Asia.',
    },
  ];

  return (
    <section id="about-section" className="relative py-24 px-4 bg-gradient-to-b from-slate-900/50 to-slate-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-white">About </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Bio */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              As the CEO of OnSense.AI, I lead a vision to centralize the equipment maintenance and repair industry with cutting-edge machine learning solutions. With 13+ years of tech experience, I've successfully scaled multiple ventures from concept to market leadership. Our ecosystem accelerates AI adoption for OEMs, property managers, repair services, and part-retail businesses globally.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Before OnSense.AI, I built resourcex.io into a 150+ engineer company serving the home management industry, and led content strategy at Centriq Technology. I hold an M.S. in Electrical Engineering (RF & Microwave Design) from NUST and am a fellow of the Atlantic Council's Emerging Leaders of Pakistan program.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400/50 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-3xl font-light text-cyan-400 mb-2">{metric.value}</p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image & Highlights */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* CEO Photo */}
            <div className="mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-800/50 border border-cyan-500/30 rounded-xl overflow-hidden">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQELQqqDEujPdg/profile-displayphoto-shrink_800_800/B4EZXQg45rG0Ac-/0/1742960038420?e=1772064000&v=beta&t=rAA-xCVJsJvaPk5z7jtbTQLf6fxsnzSp8frIu59i0H0"
                  alt="Sajid Shah, CEO of OnSense.AI"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-slate-800/30 border border-cyan-500/10 rounded-xl hover:border-cyan-400/30 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex justify-center gap-3 mt-20">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
}

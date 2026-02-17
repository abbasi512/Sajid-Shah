'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'OnSense.AI Platform',
    description: 'The backbone for equipment management. Private ML infrastructure enabling predictive maintenance, intelligent diagnostics, and remote troubleshooting for OEMs, property managers, repair services, and part-retail businesses.',
    tags: ['Machine Learning', 'Equipment Diagnostics', 'Industry 4.0'],
    impact: 'Serving 50+ OEMs globally',
    featured: true,
  },
  {
    title: 'Support Engine',
    description: 'AI-powered intelligent system for equipment support, documentation, and accelerated ML adoption.',
    tags: ['AI Agents', 'NLP', 'Support'],
    impact: 'Rapid ML adoption',
  },
  {
    title: 'Data Engine',
    description: 'Sophisticated data curation and ML infrastructure for equipment diagnostics with RLHF training.',
    tags: ['Data Science', 'ML Training'],
    impact: '3000+ hours of R&D',
  },
  {
    title: 'Field Sense',
    description: 'Mobile-first AI agent for technicians delivering real-time diagnostics and guided repairs in the field.',
    tags: ['Mobile', 'Field Service', 'AI'],
    impact: 'Reduced errors, faster repairs',
  },
  {
    title: 'Remote Sense',
    description: 'Cloud-based remote diagnostics enabling predictive maintenance and troubleshooting without on-site presence.',
    tags: ['Cloud', 'Predictive', 'Remote'],
    impact: 'Early problem detection',
  },
  {
    title: 'Empower Pakistan',
    description: 'Nonprofit initiative empowering Pakistani youth through digital literacy, freelancing training, and entrepreneurship mentoring.',
    tags: ['Community', 'Education', 'Leadership'],
    impact: '1000+ trained professionals',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects-section" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-end gap-4 mb-8">
            <h2 className="text-5xl md:text-6xl font-light">
              <span className="text-white">Featured </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>
          <p className="text-gray-400 max-w-2xl">Groundbreaking solutions that transform equipment management and repair industries.</p>
        </div>

       

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-slate-800/40 border border-cyan-500/10 rounded-xl p-6 h-full hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden group">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white flex-1">{project.title}</h3>
                    <ArrowUpRight className={`w-5 h-5 text-cyan-400 transition-all duration-300 ${hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/5 text-cyan-300 text-xs rounded border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-cyan-400">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <a href="https://www.onsense.ai" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 inline-block">
            View All Solutions
          </a>
        </div>
      </div>
    </section>
  );
}

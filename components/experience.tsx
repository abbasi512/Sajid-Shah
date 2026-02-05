'use client';

import { useEffect, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
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

    const section = document.getElementById('experience-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const experiences = [
    {
      role: 'Chief Executive Officer',
      company: 'OnSense.AI',
      period: 'Apr 2024 - Present',
      description: 'Leading the equipment management backbone company, building AI solutions for predictive maintenance and intelligent repair systems serving OEMs, property managers, and service technicians globally.',
      icon: Briefcase,
    },
    {
      role: 'Chief Executive Officer',
      company: 'resourcex.io',
      period: 'Jan 2021 - Present',
      description: 'Scaled a 150+ engineer company providing remote teams and solutions for home management and repair industry. Pioneered sophisticated Asset Age Extraction technology.',
      icon: Briefcase,
    },
    {
      role: 'Director of Content Development',
      company: 'Centriq Technology',
      period: 'Jun 2015 - Apr 2021',
      description: 'Built and scaled content curation system from scratch, managing 150+ engineers. Designed the world\'s leading product age extraction system with 75% OEM coverage.',
      icon: Briefcase,
    },
    {
      role: 'Founding Director',
      company: 'Empower Pakistan',
      period: 'Jun 2014 - Jan 2021',
      description: 'Founded nonprofit empowering Pakistani youth through digital literacy and freelancing training. Trained 1000+ professionals and generated $500K+ in revenue for participants.',
      icon: Briefcase,
    },
  ];

  const education = [
    {
      degree: 'Master of Science',
      field: 'Electrical Engineering (RF & Microwave Design)',
      institution: 'National University of Science and Technology',
      period: '2010 - 2013',
    },
    {
      degree: 'Bachelor of Science',
      field: 'Electrical Engineering',
      institution: 'International Islamic University, Islamabad',
      period: '2005 - 2009',
    },
    {
      degree: 'Emerging Leaders Program',
      field: 'Leadership & Strategic Innovation',
      institution: 'Atlantic Council',
      period: '2014 - 2015',
    },
  ];

  return (
    <section id="experience-section" className="relative py-24 px-4 bg-gradient-to-b from-slate-900/20 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-white">Experience </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">&amp; Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-light text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`border-l-2 border-cyan-500/30 pl-6 pb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-light text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/30 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-400/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-indigo-400 text-sm mb-2">{edu.field}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                    <p className="text-xs text-gray-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className={`mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
          <h3 className="text-2xl font-light text-white mb-8">Key Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Machine Learning', 'Equipment Diagnostics', 'Team Leadership', 'Strategic Vision', 'Product Development', 'Startup Scaling', 'PropTech', 'Industry 4.0'].map((skill, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-slate-800/40 border border-cyan-500/20 rounded-lg text-center text-sm text-gray-300 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

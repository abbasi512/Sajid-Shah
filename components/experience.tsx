'use client';

import { useEffect, useState } from 'react';
import { Briefcase, Globe, Users, Building2 } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const portfolioItems = [
    {
      title: 'OnSense AI',
      role: 'Founder & CEO',
      icon: Building2,
      description:
        'Built and led OnSense AI, an AI-driven platform improving troubleshooting, repair, and maintenance for appliances and HVAC systems. The platform standardized fragmented technical knowledge into scalable systems used by property managers and service organizations to improve efficiency and service outcomes.',
    },
    {
      title: 'Resourcex.io',
      role: 'Founder & CEO',
      icon: Briefcase,
      description:
        'Founded Resourcex.io to build the ultimate back office for the home management and repair industry, providing tailored remote teams and operational systems that elevate customer experience and business performance.',
    },
    {
      title: 'Empower Pakistan',
      role: 'Co-Founder & CEO',
      icon: Users,
      description:
        'Co-founded Empower Pakistan, a social venture focused on empowering Pakistani youth through digital literacy, freelancing training, and employment opportunities—driving measurable impact on economic participation.',
    },
    {
      title: 'ICT4D — World Bank Group',
      role: 'ICT4D Consultant',
      icon: Globe,
      description:
        'Worked as an ICT4D consultant with The World Bank Group and partner governments, supporting digital empowerment initiatives and large-scale capacity-building programs across emerging economies.',
    },
  ];

  return (
    <section
      id="portfolio-section"
      className="relative py-24 px-4 bg-gradient-to-b from-slate-900/20 to-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-white">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Companies built, systems scaled, and initiatives led across technology,
            operations, and social impact.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-slate-800/30 border border-cyan-500/10 rounded-2xl hover:border-cyan-400/40 hover:bg-slate-800/50 transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-4 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle Accent */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

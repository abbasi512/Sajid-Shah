'use client';

import { useEffect, useState } from 'react';
import { Brain, Target, Zap, Layers } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const metrics = [
    { label: 'Exited Companies', value: '1x' },
    { label: 'AI Platforms Built', value: 'Multiple' },
    { label: 'Industries Served', value: 'Home, Auto, Industrial' },
    { label: 'Focus', value: 'Applied AI' },
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'Applied AI Systems',
      description:
        'Architecting production-grade AI that augments human decision-making rather than chasing novelty.',
    },
    {
      icon: Zap,
      title: 'Operational Discipline',
      description:
        'Driving execution from ideation through deployment with a bias toward impact, efficiency, and scale.',
    },
  ];

  const highlights1 = [
    {
      icon: Target,
      title: 'Product Strategy',
      description:
        'Translating ambiguous customer problems into clear product bets, validated through data and continuous iteration.',
    },
    {
      icon: Layers,
      title: 'Founder-Led Team Building',
      description:
        'Recruiting and leading cross-functional teams capable of shipping, learning, and adapting under pressure.',
    },
  ];

  return (
    <section
      id="about-section"
      className="relative py-24 px-4 bg-gradient-to-b from-slate-900/50 to-slate-900/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-white">Bio & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              Operating Principles
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-stretch mb-20">
          {/* LEFT COLUMN */}
          <div
            className={`flex flex-col justify-between transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Sajid Shah is a technology founder and 1x exited entrepreneur focused
                on building AI-driven platforms for complex equipment repair and
                maintenance. He founded OnSense AI to centralize troubleshooting
                and repair workflows across large-scale appliances and HVAC service
                ecosystems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                OnSense AI was acquired by HappyCo, marking a successful exit in the
                home management and repair category. Following the acquisition,
                Sajid is now building repair and management platforms for other
                industries, including automotive and industrial systems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                He brings deep experience at the intersection of machine learning,
                operational tooling, and real-world service environments.
              </p>
            </div>

            {/* Metrics */}
            {/* <div className="grid grid-cols-2 gap-6 mt-10">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400/50 transition-colors"
                >
                  <p className="text-2xl font-light text-cyan-400 mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </div>
              ))}
            </div> */}
            <div className="space-y-4">
              {highlights1.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group p-5 bg-slate-800/30 border border-cyan-500/10 rounded-xl hover:border-cyan-400/30 hover:bg-slate-800/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className={`flex flex-col justify-between transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Image */}
            <div className="flex justify-center mb-10">
              <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl blur-2xl opacity-60" />
                <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-800/60">
                  <Image
                    src="/ceo.jpg"
                    alt="Sajid Shah"
                    width={400}
                    height={500}
                    className="w-full h-[420px] object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group p-5 bg-slate-800/30 border border-cyan-500/10 rounded-xl hover:border-cyan-400/30 hover:bg-slate-800/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="flex justify-center gap-3 mt-20">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div
            className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </div>
    </section>
  );
}

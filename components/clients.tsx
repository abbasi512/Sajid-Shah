'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ClientsMarquee() {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('clients-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const clients = [
    { name: 'Centric', logo: '/clients/centric.png' },
    { name: 'Encompass', logo: '/clients/encompass.png' },
    { name: 'Fix.com', logo: '/clients/fix.jpeg' },
    { name: 'HomeServe', logo: '/clients/homeserve.png' },
    { name: 'MSupply', logo: '/fix.jpeg' },
    { name: 'PartSelect', logo: '/clients/partselect.png' },
  ];

  return (
    <section id="clients-section" className="py-24 bg-gradient-to-b from-slate-900/30 to-slate-900/50 overflow-hidden">
      <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span className="text-white">Trusted by </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Worked with leading platforms across home services, repair, logistics,
            and parts ecosystems.
          </p>
        </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="min-w-[180px] flex flex-col items-center justify-center bg-slate-800/40 border border-cyan-500/10 rounded-xl p-6"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="object-contain mb-2 opacity-80"
              />
              <span className="text-xs text-gray-400">{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}

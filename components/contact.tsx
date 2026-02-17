'use client';

import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sajidshah/' },
    { icon: Facebook, href: 'https://www.facebook.com/SajidShah44' },
    { icon: Instagram, href: 'https://www.instagram.com/shahsahbb/' },
  ];

  return (
    <section id="contact-section" className="relative py-24 px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] max-w-[18rem] aspect-square bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[35vw] max-w-[16rem] aspect-square bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-white">Let's </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400">
              Connect
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let’s build something meaningful together.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`max-w-2xl mx-auto grid gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="px-4 py-3 bg-slate-900/60 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="px-4 py-3 bg-slate-900/60 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <textarea
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="px-4 py-3 bg-slate-900/60 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-900 font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/40 transition-all disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully 🚀
            </p>
          )}

          {error && (
            <p className="text-red-400 text-center">{error}</p>
          )}
        </form>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-20">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/40 border border-cyan-500/10 rounded-lg text-gray-400 hover:text-cyan-400 transition"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}

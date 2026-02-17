import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Clients from '@/components/clients';

export const metadata = {
  title: 'Sajid Shah | CEO of OnSense.AI - Equipment Management & AI Innovation',
  description: 'Sajid Shah, CEO of OnSense.AI. Leading the equipment management backbone with AI-powered solutions. 13+ years of tech leadership in equipment diagnostics, proptech, and industry 4.0.',
  openGraph: {
    title: 'Sajid Shah | CEO of OnSense.AI',
    description: 'Equipment Management Backbone | AI Innovation | Industry 4.0 Leader',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Clients/>
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </main>
  );
}

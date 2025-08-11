
'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <Features />
      <Stats />
      {/* <Blog /> */}
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

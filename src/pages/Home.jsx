import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import AreasWeServe from '../sections/AreasWeServe';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
// import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <AreasWeServe />
        <Testimonials />
        <FAQ />
        {/* Portfolio section commented out per user request */}
        {/* <Portfolio /> */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

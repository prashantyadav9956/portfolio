import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Background3DOrbs from './components/Canvas3D/Background3DOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-950 text-gray-100 selection:bg-violet-500 selection:text-white transition-colors duration-300">
        {/* Ambient Glowing Orbs Background */}
        <Background3DOrbs />

        {/* Custom Trailing Magnetic Cursor */}
        <CustomCursor />

        {/* Floating Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>

        {/* Agency Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

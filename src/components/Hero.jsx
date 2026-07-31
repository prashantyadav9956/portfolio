import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Creative Designer",
    "AI Content Creator",
    "Video Editor",
    "Brand Strategist",
    "High-CTR Thumbnail Artist",
    "3D Visualizer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Live Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border-cyan-500/30 w-fit mb-5 sm:mb-6"
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-gray-300">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-extrabold font-syne tracking-tight leading-[1.1] mb-4"
            >
              Crafting <span className="gradient-text">Viral Visuals</span> & Next-Gen{' '}
              <span className="relative inline-block">
                AI Media
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 sm:h-3 text-cyan-400/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h1>

            {/* Dynamic Role Cycling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 min-h-[44px]"
            >
              <span className="text-gray-400 font-medium text-base sm:text-xl shrink-0">I am a</span>
              <div className="relative inline-flex items-center min-h-[38px] px-3.5 py-1 rounded-xl bg-violet-500/10 border border-violet-500/30 backdrop-blur-md shadow-md shadow-violet-500/10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="font-syne font-extrabold text-base sm:text-xl text-cyan-400 whitespace-nowrap"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8"
            >
              Transforming ideas into high-converting video edits, hyper-realistic AI artwork, award-winning branding, and viral thumbnails that dominate digital markets.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <a
                href="#portfolio"
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-syne font-extrabold text-xs sm:text-sm tracking-wider shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] transition-all duration-300 text-center"
                data-cursor="PORTFOLIO"
              >
                <span>EXPLORE PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl glass-panel text-white font-syne font-bold text-xs sm:text-sm tracking-wider hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 text-center"
                data-cursor="TALK"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
                <span>BOOK A CONSULT</span>
              </a>
            </motion.div>

            {/* Key Metrics Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl glass-panel border-white/10"
            >
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-xl sm:text-2xl text-cyan-400">2+ YRS</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Experience</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-3 sm:pl-4">
                <span className="font-syne font-extrabold text-xl sm:text-2xl text-violet-400">350+</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Projects Done</span>
              </div>

              <div className="flex flex-col border-l border-white/10 pl-3 sm:pl-4">
                <span className="font-syne font-extrabold text-xl sm:text-2xl text-emerald-400">99.4%</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Satisfaction</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] lg:h-[520px] w-full flex items-center justify-center">

            {/* Outer glow ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-tr from-violet-600/30 via-cyan-500/20 to-transparent blur-2xl animate-pulse" />

            {/* Rotating dashed border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[370px] lg:h-[370px] rounded-full border-2 border-dashed border-violet-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full border border-dashed border-cyan-500/20"
            />

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 120 }}
              className="relative z-10 w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden animate-float"
              style={{
                boxShadow: '0 0 0 4px rgba(139,92,246,0.4), 0 0 0 8px rgba(6,182,212,0.15), 0 20px 60px rgba(139,92,246,0.35)'
              }}
            >
              <img
                src="/profile pic.jpeg"
                alt="Prashant Yadav — Creative Designer & AI Content Creator"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              {/* Inner overlay shine */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40 pointer-events-none" />
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-8 right-6 sm:right-4 flex items-center gap-1.5 px-3 py-2 rounded-2xl glass-panel border border-violet-500/30 shadow-lg shadow-violet-900/30"
            >
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-bold font-syne text-white">Top Rated</span>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute bottom-10 left-4 sm:left-2 flex items-center gap-1.5 px-3 py-2 rounded-2xl glass-panel border border-cyan-500/30 shadow-lg shadow-cyan-900/30"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-bold font-syne text-white">2+ Yrs Exp</span>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-16 right-3 sm:right-1 flex items-center gap-1.5 px-3 py-2 rounded-2xl glass-panel border border-emerald-500/30 shadow-lg shadow-emerald-900/30"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold font-syne text-emerald-300">Available</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

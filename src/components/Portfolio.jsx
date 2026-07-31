import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import VideoShowcase from './VideoShowcase';
import CertificateShowcase from './CertificateShowcase';
import GraphicDesignShowcase from './GraphicDesignShowcase';
import { LayoutGrid, Eye, ArrowUpRight, TrendingUp, Sparkles, Film, Palette, Award } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [portfolioTab, setPortfolioTab] = useState('ALL');

  const categories = [
    'ALL', 'AI Content Creation', 'Branding', 'Video Editing',
    'Thumbnail Design', 'Posters', 'Social Media Creatives',
    'Photo Editing', 'Presentations', 'Graphic Design'
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  const handlePrevProject = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex > 0)
      setSelectedProjectIndex(selectedProjectIndex - 1);
  };

  const handleNextProject = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex < filteredProjects.length - 1)
      setSelectedProjectIndex(selectedProjectIndex + 1);
  };

  const currentSelectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  const tabs = [
    { id: 'ALL',      label: 'All Work',            Icon: Sparkles, color: 'from-violet-600 to-cyan-600'   },
    { id: 'VIDEO',    label: 'Video & Cinema',       Icon: Film,     color: 'from-rose-600 to-violet-600'   },
    { id: 'GRAPHICS', label: 'Graphic Design',       Icon: Palette,  color: 'from-fuchsia-600 to-violet-600'},
    { id: 'CERTS',    label: 'Certifications',       Icon: Award,    color: 'from-amber-500 to-orange-600'  },
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-bold text-cyan-400 font-syne uppercase tracking-wider mb-4"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Portfolio &amp; Visual Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Selected <span className="gradient-text">Masterpieces</span> &amp; Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-8"
          >
            From cinematic video edits to AI visuals, graphic design, posters, and industry certifications.
          </motion.p>

          {/* ── Tab Switcher (scrollable on mobile) ─────────────── */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 sm:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 sm:hidden" />
            <div
              className="flex items-center gap-2 overflow-x-auto py-2 px-1 sm:flex-wrap sm:justify-center sm:overflow-visible"
              style={{ scrollbarWidth: 'none' }}
            >
              {tabs.map(({ id, label, Icon, color }) => (
                <button
                  key={id}
                  onClick={() => setPortfolioTab(id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-syne tracking-wider transition-all duration-300 ${
                    portfolioTab === id
                      ? `bg-gradient-to-r ${color} text-white shadow-lg`
                      : 'text-gray-400 glass-panel border border-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── VIDEO SHOWCASE ───────────────────────────────────────── */}
        {(portfolioTab === 'ALL' || portfolioTab === 'VIDEO') && (
          <motion.div key="video-tab" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <VideoShowcase />
          </motion.div>
        )}

        {/* ── GRAPHIC DESIGN SHOWCASE ─────────────────────────────── */}
        {(portfolioTab === 'ALL' || portfolioTab === 'GRAPHICS') && (
          <motion.div key="graphics-tab" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <GraphicDesignShowcase />
          </motion.div>
        )}

        {/* ── CERTIFICATES SHOWCASE ────────────────────────────────── */}
        {(portfolioTab === 'ALL' || portfolioTab === 'CERTS') && (
          <motion.div key="certs-tab" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <CertificateShowcase />
          </motion.div>
        )}

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={currentSelectedProject}
        onClose={() => setSelectedProjectIndex(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
        hasPrev={selectedProjectIndex !== null && selectedProjectIndex > 0}
        hasNext={selectedProjectIndex !== null && selectedProjectIndex < filteredProjects.length - 1}
        currentIndex={selectedProjectIndex !== null ? selectedProjectIndex : 0}
        totalProjects={filteredProjects.length}
      />
    </section>
  );
}

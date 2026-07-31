import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import VideoShowcase from './VideoShowcase';
import { LayoutGrid, Eye, ArrowUpRight, TrendingUp, Sparkles, Film, Palette } from 'lucide-react';

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

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-bold text-cyan-400 font-syne uppercase tracking-wider mb-4"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Showcase & Case Studies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Selected <span className="gradient-text">Masterpieces</span> & Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-8"
          >
            Explore client campaigns, AI visual concepts, high-converting thumbnails, and cinematic video projects.
          </motion.p>

          {/* Main Tab Switcher */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl sm:rounded-full glass-panel border-white/10 gap-2 mb-4">
            {[
              { id: 'ALL',    label: 'Full Portfolio & Videos', Icon: Sparkles },
              { id: 'DESIGN', label: 'Design Case Studies',     Icon: Palette  },
              { id: 'VIDEO',  label: 'Cinema & Video Vault',    Icon: Film     },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setPortfolioTab(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-syne tracking-wider transition-all duration-300 ${
                  portfolioTab === id
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── DESIGN CASE STUDIES ───────────────────────────────────────── */}
        {(portfolioTab === 'ALL' || portfolioTab === 'DESIGN') && (
          <div className="mb-16">

            {/* Smooth horizontal-scroll category filter */}
            <div className="relative mb-10">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-slate-950 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-slate-950 to-transparent z-10" />

              <div
                className="flex items-center gap-2 overflow-x-auto py-2 px-3"
                style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setSelectedProjectIndex(null); }}
                      className={`relative flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold font-syne tracking-wider transition-all duration-300 border ${
                        isActive
                          ? 'text-white border-violet-500/50 shadow-lg shadow-violet-600/20'
                          : 'text-gray-400 border-white/10 glass-panel hover:text-white hover:border-white/30'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryBg"
                          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full -z-10 shadow-md shadow-violet-500/30"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Portfolio Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id} layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedProjectIndex(idx)}
                    className="group relative rounded-3xl glass-panel glass-panel-hover border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between"
                    data-cursor="VIEW"
                  >
                    {/* Thumbnail Frame */}
                    <div
                      className="w-full h-56 relative overflow-hidden flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: project.imageBg }}
                    >
                      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-white/20 text-[10px] font-bold font-syne text-cyan-400 uppercase tracking-widest backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-bold font-syne text-emerald-400 flex items-center gap-1 backdrop-blur-md">
                        <TrendingUp className="w-3 h-3" />
                        {project.metrics}
                      </span>
                      <h3 className="relative z-10 text-xl font-extrabold font-syne text-white text-center drop-shadow-lg">
                        {project.title}
                      </h3>
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Eye className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-2">
                          <span>{project.client}</span>
                          <span>{project.year}</span>
                        </div>
                        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">{project.description}</p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-400">{tag}</span>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                          <span className="text-xs font-bold font-syne text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                            VIEW CASE STUDY
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* ── VIDEO SHOWCASE ───────────────────────────────────────────── */}
        {(portfolioTab === 'ALL' || portfolioTab === 'VIDEO') && (
          <VideoShowcase />
        )}

      </div>

      {/* Project Detail Modal */}
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

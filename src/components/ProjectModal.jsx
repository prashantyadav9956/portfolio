import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, User, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  currentIndex = 0,
  totalProjects = 0
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      
      {/* Outer Navigation Left Button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/90 border border-white/20 text-gray-200 hover:text-cyan-400 hover:scale-110 hover:border-cyan-400/50 backdrop-blur-md shadow-2xl transition-all z-50 group"
          title="Previous Project (Left Arrow Key)"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Outer Navigation Right Button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/90 border border-white/20 text-gray-200 hover:text-cyan-400 hover:scale-110 hover:border-cyan-400/50 backdrop-blur-md shadow-2xl transition-all z-50 group"
          title="Next Project (Right Arrow Key)"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      <motion.div
        key={project.id}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="max-w-3xl w-full p-6 sm:p-8 rounded-3xl glass-panel border-white/20 relative my-auto max-h-[90vh] overflow-y-auto scrollbar-thin shadow-2xl"
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {totalProjects > 0 && (
              <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold font-syne text-gray-300 tracking-wider">
                {currentIndex + 1} / {totalProjects}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Previous / Next Arrow buttons in header */}
            {hasPrev && (
              <button
                onClick={onPrev}
                className="flex md:hidden p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="flex md:hidden p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all"
                title="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-rose-400 hover:bg-white/20 transition-all"
              title="Close Preview (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Visual Header Canvas Mockup */}
        <div
          className="w-full h-56 sm:h-72 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6 shadow-2xl border border-white/10"
          style={{ background: project.imageBg }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative z-10 text-center">
            <span className="px-3.5 py-1 rounded-full bg-slate-950/80 border border-white/20 text-xs font-bold font-syne text-cyan-400 uppercase tracking-widest inline-block mb-3 backdrop-blur-md">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-syne text-white tracking-tight drop-shadow-lg">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Project Meta Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
              <User className="w-3 h-3 text-cyan-400" /> Client
            </span>
            <p className="text-sm font-bold font-syne text-white mt-1">{project.client}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-violet-400" /> Year
            </span>
            <p className="text-sm font-bold font-syne text-white mt-1">{project.year}</p>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" /> Key Impact
            </span>
            <p className="text-sm font-bold font-syne text-emerald-400 mt-1">{project.metrics}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xs font-bold font-syne uppercase tracking-wider text-gray-400 mb-2">Project Overview</h3>
          <p className="text-gray-200 text-sm leading-relaxed font-sans">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-xs font-bold font-syne uppercase tracking-wider text-gray-400 mb-3">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions & Navigation Hint */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 text-center py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs tracking-wider shadow-lg shadow-violet-600/30 hover:scale-[1.02] transition-transform"
          >
            COMMISSION SIMILAR PROJECT
          </a>
          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded-xl glass-panel text-gray-300 hover:text-white font-syne font-bold text-xs"
          >
            CLOSE
          </button>
        </div>

      </motion.div>
    </div>
  );
}

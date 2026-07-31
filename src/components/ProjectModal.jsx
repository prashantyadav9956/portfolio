import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, User, Tag, TrendingUp, Play, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="max-w-3xl w-full p-6 sm:p-8 rounded-3xl glass-panel border-white/20 relative my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header Canvas Mockup */}
        <div
          className="w-full h-64 sm:h-80 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6 shadow-2xl border border-white/10"
          style={{ background: project.imageBg }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative z-10 text-center">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/20 text-xs font-bold font-syne text-cyan-400 uppercase tracking-widest inline-block mb-3">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-syne text-white tracking-tight drop-shadow-md">
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
          <h3 className="text-sm font-bold font-syne uppercase tracking-wider text-white mb-2">Project Overview</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs tracking-wider shadow-lg shadow-violet-600/30"
          >
            COMMISSION SIMILAR PROJECT
          </a>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl glass-panel text-gray-300 hover:text-white font-syne font-bold text-xs"
          >
            CLOSE PREVIEW
          </button>
        </div>

      </motion.div>
    </div>
  );
}

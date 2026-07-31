import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, ChevronLeft, ChevronRight, ZoomIn, Share2, Maximize2 } from 'lucide-react';

const designs = [
  {
    id: 'gd-1',
    title: 'Premium Brand Identity System',
    category: 'Branding',
    src: '/Thumbnail & Designs/20230126_233439.png',
    tools: ['Adobe Illustrator', 'Photoshop', 'Canva Pro'],
    description: 'Full-scale brand identity package including logo suite, colour palette, typography system, and brand guidelines.',
    color: 'from-violet-700 to-indigo-900',
    accent: 'border-violet-500/40',
  },
  {
    id: 'gd-2',
    title: 'Cinematic YouTube Thumbnail',
    category: 'Thumbnail Design',
    src: '/Thumbnail & Designs/20230127_124357.png',
    tools: ['Photoshop', 'Lightroom', 'After Effects'],
    description: 'High-CTR YouTube thumbnail designed with psychology-based colour contrast, facial expression focal point, and bold kinetic typography.',
    color: 'from-cyan-700 to-blue-900',
    accent: 'border-cyan-500/40',
  },
  {
    id: 'gd-3',
    title: 'Social Media Campaign Pack',
    category: 'Social Media Creatives',
    src: '/Thumbnail & Designs/20230130_154841.png',
    tools: ['Canva Pro', 'Figma', 'Illustrator'],
    description: '12-piece Instagram campaign with story frames, carousel cards, reels cover art, and highlight icons — all on-brand.',
    color: 'from-rose-700 to-purple-900',
    accent: 'border-rose-500/40',
  },
  {
    id: 'gd-4',
    title: 'Event Poster & Promotional Flyer',
    category: 'Poster Design',
    src: '/Thumbnail & Designs/20230130_155145.png',
    tools: ['Photoshop', 'InDesign', 'Illustrator'],
    description: 'Bold print-ready event poster featuring typographic hierarchy, dynamic layout composition, and premium texture overlays.',
    color: 'from-emerald-700 to-teal-900',
    accent: 'border-emerald-500/40',
  },
  {
    id: 'gd-5',
    title: 'Product Launch Visual Suite',
    category: 'Graphic Design',
    src: '/Thumbnail & Designs/20230131_103327.png',
    tools: ['Figma', 'Photoshop', 'Blender'],
    description: 'Premium product launch graphics with 3D mockup integration, lifestyle imagery compositing, and campaign-ready ad creatives.',
    color: 'from-orange-700 to-amber-900',
    accent: 'border-orange-500/40',
  },
  {
    id: 'gd-6',
    title: 'Motion Graphics & Reel Cover',
    category: 'Video Design',
    src: '/Thumbnail & Designs/20230131_205139.png',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    description: 'Animated reel cover design featuring motion blur frame, custom overlays, and stop-motion typography for maximum impact.',
    color: 'from-fuchsia-700 to-violet-900',
    accent: 'border-fuchsia-500/40',
  },
  {
    id: 'gd-7',
    title: 'UI Design & Digital Experience',
    category: 'UI/UX',
    src: '/Thumbnail & Designs/20230212_224703.png',
    tools: ['Figma', 'Framer', 'Adobe XD'],
    description: 'Clean, conversion-focused UI design system with dark mode aesthetics, micro-interactions, and accessible colour contrast ratios.',
    color: 'from-blue-700 to-sky-900',
    accent: 'border-blue-500/40',
  },
];

const designCategories = ['ALL', ...new Set(designs.map(d => d.category))];

export default function GraphicDesignShowcase() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeFilter === 'ALL' ? designs : designs.filter(d => d.category === activeFilter);
  const current = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  const closeLightbox = () => setLightboxIdx(null);
  const goPrev = () => setLightboxIdx((i) => (i > 0 ? i - 1 : filtered.length - 1));
  const goNext = () => setLightboxIdx((i) => (i < filtered.length - 1 ? i + 1 : 0));

  return (
    <section className="py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-fuchsia-500/30 text-xs font-bold text-fuchsia-400 font-syne uppercase tracking-wider mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>Visual Design Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-syne tracking-tight mb-3">
          Graphic Design &amp; <span className="gradient-text">Creative Studio</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Thumbnails, posters, brand kits, and social media creatives — each pixel crafted to stop the scroll and drive action.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs font-bold font-syne">
          {[
            { val: '200+', label: 'Designs Created', color: 'text-fuchsia-400' },
            { val: '40%',  label: 'Avg CTR Lift',    color: 'text-cyan-400' },
            { val: '15+',  label: 'Clients Served',  color: 'text-violet-400' },
          ].map(({ val, label, color }) => (
            <div key={label} className="flex flex-col items-center">
              <span className={`text-xl font-extrabold ${color}`}>{val}</span>
              <span className="text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="relative mb-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        <div
          className="flex items-center gap-2 overflow-x-auto py-2 px-3"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {designCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setLightboxIdx(null); }}
                className={`relative flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold font-syne tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'text-white border-fuchsia-500/50 shadow-lg shadow-fuchsia-600/20'
                    : 'text-gray-400 border-white/10 glass-panel hover:text-white hover:border-white/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="gd-active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-full -z-10 shadow-md shadow-fuchsia-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry-style Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((design, idx) => (
            <motion.div
              key={design.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => setLightboxIdx(idx)}
              className={`group relative rounded-3xl glass-panel border overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-400 ${design.accent}`}
              data-cursor="VIEW"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={design.src}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent`} />
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold font-syne text-white">
                  {design.category}
                </span>
                {/* Hover zoom icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-syne font-bold text-white text-sm mb-2 line-clamp-1">{design.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2 mb-3">{design.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {design.tools.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && current && (
          <motion.div
            key="gd-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-start justify-center pt-20 p-4 overflow-y-auto"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl shadow-fuchsia-900/40 flex flex-col mb-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold font-syne text-fuchsia-400 uppercase tracking-widest">{current.category}</span>
                  <h3 className="font-syne font-bold text-white text-base">{current.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={current.src}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-fuchsia-600/20 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-bold font-syne hover:bg-fuchsia-600/40 transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Save
                  </a>
                  <button
                    onClick={closeLightbox}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-slate-950/60">
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-w-full max-h-[55vh] rounded-2xl object-contain shadow-xl"
                />
              </div>

              {/* Description */}
              <div className="px-6 py-4 border-t border-white/10">
                <p className="text-gray-400 text-xs mb-3">{current.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {current.tools.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-xl bg-fuchsia-900/40 border border-fuchsia-500/20 text-fuchsia-300 font-syne font-bold">{t}</span>
                  ))}
                </div>
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
                <button
                  onClick={goPrev}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-bold font-syne text-gray-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <span className="text-xs text-gray-500 font-syne">{lightboxIdx + 1} / {filtered.length}</span>
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-bold font-syne text-gray-300 hover:text-white transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

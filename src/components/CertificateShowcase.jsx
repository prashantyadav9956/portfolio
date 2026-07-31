import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronLeft, ChevronRight, ZoomIn, Download, BadgeCheck, Star, Trophy } from 'lucide-react';

const certificates = [
  {
    id: 'cert-1',
    title: 'Digital Marketing & Content Strategy',
    issuer: 'Certified Institute',
    date: '2023',
    type: 'pdf',
    src: '/Certificate/eCertificate.pdf',
    color: 'from-violet-700 via-purple-800 to-indigo-900',
    badge: '📜 Certified',
    skills: ['Digital Marketing', 'Content Strategy', 'Campaign Management', 'ROI Optimization'],
  },
  {
    id: 'cert-2',
    title: 'Professional Achievement & Excellence',
    issuer: 'Certified Institute',
    date: '2023',
    type: 'pdf',
    src: '/Certificate/eCertificate1.pdf',
    color: 'from-amber-700 via-orange-800 to-red-900',
    badge: '🏆 Achievement',
    skills: ['Leadership', 'Project Management', 'Professional Excellence', 'Industry Recognition'],
  },
];


export default function CertificateShowcase() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const goPrev = () => setLightboxIdx((i) => (i > 0 ? i - 1 : certificates.length - 1));
  const goNext = () => setLightboxIdx((i) => (i < certificates.length - 1 ? i + 1 : 0));

  const current = lightboxIdx !== null ? certificates[lightboxIdx] : null;

  return (
    <section className="py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-amber-500/30 text-xs font-bold text-amber-400 font-syne uppercase tracking-wider mb-4">
          <Trophy className="w-3.5 h-3.5" />
          <span>Certified Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-syne tracking-tight mb-3">
          Licenses &amp; <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Industry-recognized certifications validating expertise in design, video production, AI tools, and digital marketing.
        </p>
        <div className="flex items-center justify-center gap-6 mt-6">
          {[
            { Icon: BadgeCheck, label: '2 Certificates', color: 'text-cyan-400' },
            { Icon: Star,       label: '2 Disciplines',  color: 'text-amber-400' },
            { Icon: Award,      label: 'Officially Verified', color: 'text-violet-400' },
          ].map(({ Icon, label, color }) => (
            <div key={label} className={`flex items-center gap-1.5 text-xs font-bold font-syne ${color}`}>
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-3xl glass-panel border border-white/10 overflow-hidden cursor-pointer hover:border-white/25 transition-all duration-400"
            data-cursor="VIEW"
          >
            {/* Certificate Image Preview */}
            <div className={`relative w-full h-44 bg-gradient-to-br ${cert.color} flex items-center justify-center overflow-hidden`}>
              {cert.type === 'image' ? (
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Award className="w-14 h-14 text-white/80" />
                  <span className="text-white/70 text-xs font-bold font-syne uppercase tracking-widest">PDF Certificate</span>
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold font-syne text-white">
                {cert.badge}
              </span>
            </div>

            {/* Card Info */}
            <div className="p-5">
              <h3 className="font-syne font-bold text-white text-sm mb-1 line-clamp-1">{cert.title}</h3>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && current && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl shadow-violet-900/40 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <h3 className="font-syne font-bold text-white text-base">{current.title}</h3>
                  <p className="text-xs text-gray-400">{current.issuer} · {current.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={current.src}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-bold font-syne hover:bg-violet-600/40 transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                  <button
                    onClick={closeLightbox}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-slate-950/60">
                {current.type === 'image' ? (
                  <img src={current.src} alt={current.title} className="max-w-full max-h-[60vh] rounded-2xl object-contain shadow-xl" />
                ) : (
                  <iframe
                    src={current.src}
                    title={current.title}
                    className="w-full h-[60vh] rounded-2xl border-0"
                  />
                )}
              </div>

              {/* Bottom Nav */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
                <button
                  onClick={goPrev}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-bold font-syne text-gray-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <span className="text-xs text-gray-500 font-syne">{lightboxIdx + 1} / {certificates.length}</span>
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

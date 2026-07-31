import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, experienceTimeline } from '../data/portfolioData';
import { User, Briefcase, Award, Download, CheckCircle, Sparkles, X, FileText } from 'lucide-react';

export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-violet-500/30 text-xs font-bold text-violet-400 font-syne uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>Behind The Visuals</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Architecting The Future Of <span className="gradient-text">Creative Media</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Combining human artistic intuition with cutting-edge AI neural models to craft visual assets that grab attention, tell memorable stories, and drive unprecedented engagement.
          </motion.p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Card & Resume Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl glass-panel glass-panel-hover border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold font-syne text-white mb-4 flex items-center gap-3">
                <span>Passionate Visual Storyteller</span>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Expert in Midjourney v6, Stable Diffusion XL & Runway Gen-2</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Mastery over Adobe Creative Cloud (Photoshop, Premiere, After Effects)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Data-backed YouTube Thumbnail CTR Optimization</span>
                </div>
              </div>

              {/* Resume Preview Modal Button */}
              <button
                onClick={() => setShowResumeModal(true)}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs tracking-wider shadow-lg shadow-violet-600/30 hover:scale-105 transition-all duration-300"
                data-cursor="RESUME"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span>PREVIEW & DOWNLOAD RESUME</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl glass-panel border-white/10">
              <h3 className="text-xl font-bold font-syne text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-violet-400" />
                <span>Professional Career Timeline</span>
              </h3>

              <div className="relative border-l-2 border-violet-500/30 pl-6 space-y-8">
                {experienceTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300" />
                    
                    <span className="text-xs font-bold font-syne text-cyan-400 uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold font-syne text-white mt-1">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-violet-300 mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Resume Preview Modal Overlay */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full p-6 sm:p-8 rounded-3xl glass-panel border-white/20 relative my-4 mb-8"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="p-3 rounded-2xl bg-violet-600/30 text-violet-400">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-syne text-white">Prashant Yadav — Resume Overview</h3>
                  <p className="text-xs text-gray-400">Creative Designer & AI Content Specialist</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-300 mb-8">
                <div>
                  <h4 className="font-bold font-syne text-white text-base">Summary</h4>
                  <p className="text-gray-400">2+ years designing award-winning digital creatives, high-retention video editing, branding systems, and AI visual assets for global brands and creators.</p>
                </div>

                <div>
                  <h4 className="font-bold font-syne text-white text-base">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["AI Prompt Architecture", "Video Editing & Sound Design", "CTR Thumbnail Optimization", "Brand Identity Systems", "Exec Pitch Decks", "Motion Graphics"].map((s, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold font-syne text-white text-base">Software & Tools</h4>
                  <p className="text-gray-400">CapCut (90%), Picsart (90%), VN Video Editor (90%), Adobe Express (85%), Adobe Lightroom (80%), Canva (80%), Adobe Premiere Pro (75%), Adobe Photoshop (70%), Midjourney v6, Stable Diffusion, Runway Gen-2.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onClick={() => setShowResumeModal(false)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs tracking-wider"
                >
                  DIRECT CONTACT PRASHANT
                </a>
                <button
                  onClick={() => {
                    alert("Resume downloaded! (Simulated download file)");
                    setShowResumeModal(false);
                  }}
                  className="px-6 py-3 rounded-xl glass-panel text-white font-syne font-bold text-xs"
                >
                  DOWNLOAD PDF
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

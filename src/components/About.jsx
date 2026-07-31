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
                  <span>Expert in Premiere Pro, Photoshop & Adobe Express</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Mastery over Flow AI, Gemini & ChatGPT</span>
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
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-10 p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) setShowResumeModal(false); }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="max-w-xl w-full rounded-3xl glass-panel border-white/20 relative my-4 mb-12 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center gap-4 px-6 pt-6 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-2xl bg-violet-600/30 text-violet-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-syne text-white leading-tight">Prashant Yadav — Resume</h3>
                  <p className="text-xs text-gray-400">Creative Designer &amp; AI Content Specialist</p>
                </div>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Resume Image Preview */}
              <div className="px-6 pt-5 pb-2">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
                  <img
                    src="/resume1.jpeg"
                    alt="Prashant Yadav Resume"
                    className="w-full object-contain bg-white"
                    style={{ maxHeight: '60vh' }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 px-6 py-5">
                <a
                  href="/resume1.jpeg"
                  download="Prashant_Yadav_Resume.jpeg"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs tracking-wider shadow-lg shadow-violet-600/30 hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD RESUME
                </a>
                <a
                  href="#contact"
                  onClick={() => setShowResumeModal(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-panel border border-white/15 text-white font-syne font-bold text-xs tracking-wider hover:bg-white/10 transition-all duration-300"
                >
                  CONTACT PRASHANT
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

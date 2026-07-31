import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Cpu, Wrench, CheckCircle, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-violet-500/30 text-xs font-bold text-violet-400 font-syne uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Software & <span className="gradient-text">AI Neural Toolkit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Mastering industry-standard creative software and state-of-the-art generative AI systems to yield world-class visual output.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold font-syne tracking-wider transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
              data-cursor="AI TOOLS"
            >
              GEN-AI & PROMPTING
            </button>
            <button
              onClick={() => setActiveTab('suite')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold font-syne tracking-wider transition-all duration-300 ${
                activeTab === 'suite'
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
              data-cursor="CREATIVE SUITE"
            >
              CREATIVE SUITE & TOOLS
            </button>
          </div>
        </div>

        {/* Skills Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {(activeTab === 'ai' ? skillsData.aiTools : skillsData.creativeSuite).map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl glass-panel border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 font-syne font-bold text-xs">
                    {skill.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-white text-base">{skill.name}</h3>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">{skill.category}</span>
                  </div>
                </div>
                <span className="font-syne font-extrabold text-sm text-cyan-400">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2.5 bg-slate-900/80 rounded-full overflow-hidden border border-white/5 p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies Badges */}
        <div className="p-8 rounded-3xl glass-panel border-white/10 text-center">
          <h3 className="text-xl font-bold font-syne text-white mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Strategic Creative Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.coreCompetencies.map((comp, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 text-xs font-semibold font-syne text-gray-300 hover:text-white transition-all duration-300"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import {
  Video,
  Sparkles,
  LayoutGrid,
  Image,
  Share2,
  Palette,
  Presentation,
  FileText,
  Camera,
  Layers,
  ArrowRight,
  X,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Video: Video,
  Sparkles: Sparkles,
  LayoutGrid: LayoutGrid,
  Image: Image,
  Share2: Share2,
  Palette: Palette,
  Presentation: Presentation,
  FileText: FileText,
  Camera: Camera,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative py-24 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-bold text-cyan-400 font-syne uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Creative Solutions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Full-Spectrum <span className="gradient-text">Design & AI Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Tailored visual solutions crafted for high engagement, brand prestige, and viral digital reach.
          </motion.p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedService(service)}
                className="group relative p-8 rounded-3xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between cursor-pointer overflow-hidden"
                data-cursor="EXPLORE"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl group-hover:bg-violet-600/25 transition-all duration-500" />

                <div>
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600/30 to-cyan-500/30 p-[1px] shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-cyan-400 group-hover:text-violet-400 transition-colors duration-300" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold font-syne uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key deliverables list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Highlight & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-cyan-400 font-syne">
                    {service.highlight}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 text-gray-300 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-xl w-full p-6 sm:p-8 rounded-3xl glass-panel border-white/20 relative my-4 mb-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white">
                  {React.createElement(iconMap[selectedService.iconName] || Sparkles, { className: "w-7 h-7" })}
                </div>
                <div>
                  <span className="text-xs font-bold font-syne text-cyan-400 uppercase tracking-widest">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold font-syne text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6">
                <h4 className="text-xs font-bold font-syne text-white uppercase tracking-wider mb-3">
                  Key Service Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-syne text-violet-400">
                  {selectedService.highlight}
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs"
                >
                  REQUEST THIS SERVICE
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

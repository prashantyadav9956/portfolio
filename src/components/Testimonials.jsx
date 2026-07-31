import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolioData';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-violet-500/30 text-xs font-bold text-violet-400 font-syne uppercase tracking-wider mb-4"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Trusted By <span className="gradient-text">Founders & Creators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Read what global YouTube creators, startup founders, and brand executives say about working with Prashant.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-white/5 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-sm italic leading-relaxed mb-8 relative z-10">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 p-[2px]">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-syne font-extrabold text-sm text-cyan-300">
                    {testi.avatarText}
                  </div>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-base">{testi.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium">{testi.role}</p>
                  <p className="text-[10px] text-gray-400">{testi.company}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

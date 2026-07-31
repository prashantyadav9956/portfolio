import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Film, Flame, X, TrendingUp, Award, Clapperboard } from 'lucide-react';

export const videoShowcaseData = {
  topVideos: [
    {
      id: "top-1",
      title: "Masterclass Commercial Edit & Visual Flow",
      category: "Signature Edit",
      videoUrl: "/videos/top/top-commercial.mp4",
      duration: "0:45",
      metrics: "3.4M+ Impressions",
      description: "High-impact commercial video edit featuring custom motion graphics, sound design SFX, dynamic pacing, and 4K color grading.",
      tags: ["Premiere Pro", "After Effects", "Sound Design", "4K Grading"]
    },
    {
      id: "top-2",
      title: "Cinematic Reel Hook & Motion Preview",
      category: "Flagship Reel",
      videoUrl: "/videos/top/flagship-reel.mp4",
      duration: "0:30",
      metrics: "88% Retention Rate",
      description: "Fast-paced retention hook engineered for social ads and brand promotions with seamless transitions and kinetic typography.",
      tags: ["Kinetic Motion", "Reel Hook", "Color LUTs", "Sound FX"]
    }
  ],
  aiVideos: [
    {
      id: "ai-1",
      title: "Boy Meets Girlfriend After Emotional Journey",
      category: "AI Narrative Cinema",
      videoUrl: "/videos/ai/boy-meets-girlfriend.mp4",
      duration: "0:15",
      metrics: "Next-Gen Synthetic Media",
      description: "Hyper-realistic AI narrative scene generated using Midjourney v6 character consistency & Runway Gen-2 motion physics.",
      tags: ["Runway Gen-2", "Midjourney v6", "Synthetic Character", "AI Motion"]
    },
    {
      id: "ai-2",
      title: "Traditional Outfit Aesthetic AI Motion",
      category: "AI Commercial Concept",
      videoUrl: "/videos/ai/girl-traditional-outfit.mp4",
      duration: "0:12",
      metrics: "Award-Grade Realism",
      description: "Photorealistic AI fashion model motion simulation created with custom LoRA weights and photorealistic depth lighting.",
      tags: ["Photorealistic AI", "Stable Diffusion", "Fashion Motion", "AI Concept"]
    },
    {
      id: "ai-3",
      title: "Futuristic Synthetic Storytelling Scene",
      category: "Generative Cinema",
      videoUrl: "/videos/ai/vn-scene-1.mp4",
      duration: "0:25",
      metrics: "Generative Storytelling",
      description: "Cinematic synthetic sequence blending generative AI camera moves with composite lighting and atmospheric VFX.",
      tags: ["AI Video", "Prompt Architecture", "Cinematic Motion", "VFX"]
    },
    {
      id: "ai-4",
      title: "Generative AI Character Story Sequence",
      category: "AI Concept Art",
      videoUrl: "/videos/ai/vn-scene-2.mp4",
      duration: "0:35",
      metrics: "Viral Social Reach",
      description: "Custom AI character storytelling sequence engineered for commercial brand storytelling and synthetic media campaigns.",
      tags: ["Character Consistency", "AI Prompting", "Synthetic Cinema", "Sora AI"]
    }
  ],
  longVideos: [
    {
      id: "long-1",
      title: "Origin of Clea: Doctor Strange's Wife Explained in Hindi",
      category: "In-Depth Explainer & Lore",
      videoUrl: "/videos/long/origin-of-clea.mp4",
      duration: "Full Breakdown",
      metrics: "1.2M+ Views",
      description: "Comprehensive cinematic lore explainer video featuring custom graphic overlays, lower thirds, voiceover sync, and narrative pacing.",
      tags: ["YouTube Long-Form", "Lore Explainer", "Infographics", "Editing"]
    },
    {
      id: "long-2",
      title: "All Black Panther Suit Technologies & Suits Explained",
      category: "Deep Dive Breakdown",
      videoUrl: "/videos/long/black-panther-suits.mp4",
      duration: "Full Breakdown",
      metrics: "850K+ Views",
      description: "High-retention video essay breakdown with custom 3D suit animation cutouts, kinetic subtitles, and sound design.",
      tags: ["Video Essay", "Marvel Breakdown", "Custom Graphics", "VFX Subtitles"]
    }
  ],
  shortVideos: [
    {
      id: "short-1",
      title: "Secret Features of Black Panther Suit You Didn't Know",
      category: "Viral Shorts Hook",
      videoUrl: "/videos/shorts/secret-features-black-panther.mp4",
      duration: "0:58",
      metrics: "High-CTR Hook",
      description: "Fast-paced vertical reel with expressive face cutouts, sound effects, dynamic motion subtitles, and click-retention loops.",
      tags: ["Reels / Shorts", "Dynamic Subtitles", "Fast Pacing", "High CTR"]
    },
    {
      id: "short-2",
      title: "Brand Buddies Marketing Studio Agency Promo Reel",
      category: "Commercial Short",
      videoUrl: "/videos/shorts/brand-buddies-promo.mp4",
      duration: "0:30",
      metrics: "High Conversion Ad",
      description: "High-converting social ad creative designed for local business acquisition and brand campaign launches.",
      tags: ["Social Ad", "Commercial Reel", "Agency Creative", "Conversion Hook"]
    }
  ]
};

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  const sections = [
    {
      key: "top",
      badge: "Signature Highlights",
      icon: Award,
      title: "Featured Cinema & High-Retention Edits",
      subtitle: "Our top-rated commercial video edits, flagship hooks, and viral masterworks engineered for maximum retention.",
      videos: videoShowcaseData.topVideos,
      accentColor: "from-amber-500 to-rose-500",
      gridCols: "grid-cols-1 md:grid-cols-2"
    },
    {
      key: "ai",
      badge: "Synthetic Cinema",
      icon: Sparkles,
      title: "Generative AI Media & Synthetic Storytelling",
      subtitle: "Next-generation AI video generation, synthetic character animation, and prompt architecture bringing surreal visions to life.",
      videos: videoShowcaseData.aiVideos,
      accentColor: "from-violet-500 to-cyan-500",
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    },
    {
      key: "long",
      badge: "In-Depth Narratives",
      icon: Film,
      title: "Long-Form Breakdowns & Extended Commercials",
      subtitle: "Comprehensive video essays, commercial explainer cuts, and extended cinematic stories crafted for deep audience engagement.",
      videos: videoShowcaseData.longVideos,
      accentColor: "from-emerald-500 to-teal-500",
      gridCols: "grid-cols-1 md:grid-cols-2"
    },
    {
      key: "shorts",
      badge: "Viral Micro-Hooks",
      icon: Flame,
      title: "High-Retention Reels & Viral Micro-Hooks",
      subtitle: "Fast-paced vertical shorts, dynamic motion subtitles, and high-CTR hooks designed to dominate Instagram Reels & YouTube Shorts.",
      videos: videoShowcaseData.shortVideos,
      accentColor: "from-rose-500 to-purple-500",
      gridCols: "grid-cols-1 sm:grid-cols-2"
    }
  ];

  return (
    <div className="mt-8 pt-4 border-t border-white/10">
      
      {/* Section Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-purple-500/30 text-xs font-bold text-purple-400 font-syne uppercase tracking-wider mb-4"
        >
          <Clapperboard className="w-3.5 h-3.5 text-purple-400" />
          <span>Cinema &amp; Video Vault</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-syne text-white tracking-tight mb-4"
        >
          Cinematic Edits &amp; <span className="gradient-text">AI Visual Media</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg"
        >
          Explore high-converting video edits, synthetic generative AI cinema, long-form explainers, and viral short-form micro-hooks.
        </motion.p>
      </div>

      {/* Render Video Sub-sections */}
      <div className="space-y-20">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.key} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${section.accentColor} text-white shadow-md`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold font-syne uppercase tracking-widest text-cyan-400">
                      {section.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-white tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                  {section.subtitle}
                </p>
              </div>

              {/* Video Cards Grid */}
              <div className={`grid ${section.gridCols} gap-6`}>
                {section.videos.map((vid) => (
                  <motion.div
                    key={vid.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveVideo(vid)}
                    className="group relative rounded-2xl glass-panel glass-panel-hover border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between"
                  >
                    {/* Video Player Preview Frame */}
                    <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                      <video
                        key={vid.id}
                        preload="metadata"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play().catch(() => {})}
                        onMouseLeave={(e) => {
                          e.target.pause();
                          e.target.currentTime = 0;
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                      >
                        <source src={vid.videoUrl} type="video/mp4" />
                      </video>

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 opacity-60 group-hover:opacity-30 transition-opacity" />

                      {/* Duration Tag */}
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-white/20 text-[10px] font-bold font-syne text-gray-200 backdrop-blur-md">
                        {vid.duration}
                      </span>

                      {/* Category Tag */}
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-bold font-syne text-cyan-400 uppercase tracking-wider backdrop-blur-md">
                        {vid.category}
                      </span>

                      {/* Play Button Overlay — shown always, click to open player */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white flex items-center justify-center shadow-2xl shadow-violet-600/50 group-hover:scale-110 transition-transform duration-300 border border-white/30 opacity-90 group-hover:opacity-100">
                          <Play className="w-6 h-6 fill-white translate-x-0.5" />
                        </div>
                      </div>

                      {/* Impact Pill */}
                      <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-bold font-syne text-emerald-400 flex items-center gap-1 backdrop-blur-md">
                        <TrendingUp className="w-3 h-3" />
                        {vid.metrics}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="text-base font-extrabold font-syne text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                          {vid.title}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                          {vid.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {vid.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400 font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

      {/* Full HD Lightbox Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full rounded-3xl glass-panel border-white/20 relative overflow-hidden shadow-2xl my-4 mb-8"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-bold font-syne text-cyan-400 uppercase tracking-widest">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold font-syne text-white line-clamp-1">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-rose-400 hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  key={activeVideo.id}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Modal Body Info */}
              <div className="p-6 space-y-4 bg-slate-950/60">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                    {activeVideo.description}
                  </p>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold font-syne text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    {activeVideo.metrics}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeVideo.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    onClick={() => setActiveVideo(null)}
                    className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-xs tracking-wider shadow-lg shadow-violet-600/30"
                  >
                    COMMISSION VIDEO EDITING / AI CINEMA
                  </a>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="px-6 py-3 rounded-xl glass-panel text-gray-300 hover:text-white font-syne font-bold text-xs"
                  >
                    CLOSE PLAYER
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

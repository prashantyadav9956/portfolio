import React from 'react';
import { motion } from 'framer-motion';

export default function Background3DOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orb 1: Cyan Violet Glow top left */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-transparent blur-3xl opacity-60"
      />

      {/* Orb 2: Rose Purple Glow mid right */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-rose-500/15 via-purple-700/20 to-transparent blur-3xl opacity-50"
      />

      {/* Orb 3: Deep Blue Amber bottom left */}
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-indigo-600/15 via-cyan-600/15 to-transparent blur-3xl opacity-50"
      />
    </div>
  );
}

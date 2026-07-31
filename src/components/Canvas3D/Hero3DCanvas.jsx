import React from 'react';
import { motion } from 'framer-motion';
import cartoonManImage from '../../assets/cartoon_man_camera_3d.png';

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full relative flex items-center justify-center select-none py-2 pointer-events-none">
      {/* 3D Stage Container */}
      <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center p-4">
        
        {/* Background Glowing Ambient Ring */}
        <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500/30 via-violet-600/40 to-rose-500/30 rounded-full blur-3xl opacity-70 animate-pulse -z-10" />

        {/* 3D Glass Pedestal Backdrop */}
        <div className="absolute inset-4 rounded-3xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-purple-950/50 overflow-hidden" />

        {/* 100% Automatic 360-Degree Self-Rotating 3D Model */}
        <div
          style={{ transformStyle: 'preserve-3d' }}
          className="relative z-10 w-full h-full flex items-center justify-center p-4"
        >
          {/* Continuous Automatic 360 Degree Spinning Layer */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              y: [0, -10, 0]
            }}
            transition={{
              rotateY: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(35px)' }}
          >
            {/* 3D Model Image */}
            <img
              src={cartoonManImage}
              alt="3D Cartoon Video Creator Camera Mascot Auto 360 Spinning"
              className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(6,182,212,0.5)]"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}

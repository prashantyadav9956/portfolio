import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, ArrowUp, Clock, Heart, Link2 } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const istTime = new Date().toLocaleTimeString('en-US', options);
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950 pt-12 sm:pt-16 pb-12 border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10 text-center md:text-left">

          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-syne font-extrabold text-base sm:text-lg text-white tracking-tight">
                PRASHANT YADAV
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm">
              Creative Designer & AI Content Creator crafting high-converting visuals, 3D scenes, and digital art.
            </p>
          </div>

          {/* Center LinkedIn Link & IST Clock */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border-blue-500/30 text-xs font-syne font-bold text-cyan-300 hover:text-white transition-colors"
              data-cursor="LINKEDIN"
            >
              <Link2 className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-panel border-white/10 text-xs text-gray-300">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Gorakhpur, IN:</span>
              <span className="font-syne font-bold text-white">{time || '09:33 AM IST'}</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl glass-panel border-white/10 text-gray-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all active:scale-95"
            title="Back to top"
            data-cursor="TOP"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Prashant Yadav. All Rights Reserved.</p>
          <p className="font-syne text-xs">
            <span className="text-gray-500">Made by </span>
            <span className="text-cyan-400 font-extrabold">Saksham Agrahari</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

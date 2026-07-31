import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enable custom cursor on desktop screens
    if (window.innerWidth < 1024) return;

    document.body.classList.add('custom-cursor-enabled');

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea, select, [role="button"]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Sleek Custom Arrow Pointer Container (Only Arrow, No Circle) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center gap-1.5 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isClicked ? 0.85 : isHovered ? 1.25 : 1,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.1 }}
      >
        {/* Glowing Arrow Pointer Icon */}
        <div className="p-1 rounded-md bg-gradient-to-tr from-cyan-400 via-violet-500 to-rose-500 text-slate-950 shadow-lg shadow-cyan-500/50">
          <MousePointer2 className="w-4 h-4 fill-slate-950 stroke-slate-950 transform -rotate-12" />
        </div>

        {/* Optional Hover Badge Label alongside Arrow */}
        {cursorText && isHovered && (
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-cyan-400/50 text-[10px] font-extrabold font-syne uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-xl"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

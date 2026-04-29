'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from './cursor-context';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { cursorState, setCursorState } = useCursor();
  const pathname = usePathname();

  // Reset cursor to default on route change
  useEffect(() => {
    setCursorState('default');
  }, [pathname, setCursorState]);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;
    setIsVisible(true);
    const update = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  if (!isClient || !isVisible) return null;

  const isCaseStudy = cursorState === 'case-study';

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: 'rgba(10,10,10,0.5)',
      transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 25 },
    },
    'case-study': {
      x: mousePosition.x - 56,
      y: mousePosition.y - 22,
      width: 112,
      height: 44,
      borderRadius: '999px',
      backgroundColor: 'rgba(10,10,10,0.95)',
      transition: { type: 'spring', mass: 0.2, stiffness: 400, damping: 28 },
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) { body, a, button { cursor: none !important; } }
      `}} />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        variants={variants}
        animate={cursorState}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <AnimatePresence>
          {isCaseStudy && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap"
            >
              View Case
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

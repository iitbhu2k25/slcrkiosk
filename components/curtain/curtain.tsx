'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LaunchCurtainProps {
  onComplete?: () => void;
}

export default function LaunchCurtain({ onComplete }: LaunchCurtainProps) {
  const [isOpen, setIsOpen] = useState(false); // closed by default
  const [showCurtain, setShowCurtain] = useState(true);

  // Wait for right-click to open
  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault(); // prevent default context menu
      setIsOpen(true);
      setTimeout(() => {
        setShowCurtain(false);
        onComplete?.();
      }, 1500); // wait for animation to complete
    };

    window.addEventListener('contextmenu', handleRightClick);
    return () => {
      window.removeEventListener('contextmenu', handleRightClick);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showCurtain && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* LEFT CURTAIN */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-red-800 bg-[radial-gradient(circle_at_30%_50%,#b91c1c_0%,#7f1d1d_70%)] shadow-[inset_-15px_0_25px_rgba(0,0,0,0.6)]"
            initial={{ x: 0 }}
            animate={{ x: isOpen ? '-100%' : 0 }}
            transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 22px)',
            }}
          />

          {/* RIGHT CURTAIN */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-red-800 bg-[radial-gradient(circle_at_70%_50%,#b91c1c_0%,#7f1d1d_70%)] shadow-[inset_15px_0_25px_rgba(0,0,0,0.6)]"
            initial={{ x: 0 }}
            animate={{ x: isOpen ? '100%' : 0 }}
            transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 22px)',
            }}
          />

          {/* CENTER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

          {/* TEXT / LOGO */}
          <motion.div
            className="relative z-20 text-center px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-widest mb-4">
              <span className="text-red-400">✨ WELCOME ✨</span>
            </h1>
           
          </motion.div>

          {/* SPOTLIGHT EFFECTS */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3] }}
            transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}



// Hook for first-time visitor detection
export function useFirstVisit() {
  const [showCurtain, setShowCurtain] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has seen the curtain before
    const hasSeenCurtain = localStorage.getItem('curtain-seen');
    
    if (!hasSeenCurtain) {
      // First time visitor - show curtain
      setShowCurtain(true);
    }
    
    setIsChecking(false);
  }, []);

  const handleComplete = () => {
    // Mark curtain as seen in localStorage
    localStorage.setItem('curtain-seen', 'true');
    setShowCurtain(false);
  };

  return { showCurtain, isChecking, handleComplete };
}

// Optional: Hook with reset capability (for testing)
export function useFirstVisitWithReset() {
  const { showCurtain, isChecking, handleComplete } = useFirstVisit();

  const resetCurtain = () => {
    localStorage.removeItem('curtain-seen');
    window.location.reload();
  };

  return { showCurtain, isChecking, handleComplete, resetCurtain };
}
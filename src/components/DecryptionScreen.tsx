import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Activity, Cpu } from 'lucide-react';

interface DecryptionProps {
  onComplete: () => void;
}

export default function DecryptionScreen({ onComplete }: DecryptionProps) {
  const [progress, setProgress] = useState(0);
  const [activePhrase, setActivePhrase] = useState('Decrypting simulation environment...');

  useEffect(() => {
    // Stage-based phrases
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next === 30) {
          setActivePhrase('Accessing hidden interface...');
        } else if (next === 65) {
          setActivePhrase('Loading DarkWeb marketplace simulation...');
        } else if (next === 88) {
          setActivePhrase('Allocating in-memory SQLite sandbox buffers...');
        } else if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return next;
      });
    }, 35); // Approx 3.5 seconds download simulation

    return () => clearInterval(timer);
  }, [onComplete]);

  // Fictional cascading hex block backdrop
  const hexLines = [
    "0x9F3A 0x2211 0xBC4E 0xFF31 0x00A1 0x6E01 0x77BA 0x33A0",
    "0x0E81 0x1121 0xBB44 0xCDA0 0x82BE 0x55BF 0x129B 0x7E1A",
    "0xAB4E 0x992B 0xC00A 0x7E55 0x018C 0xF4BE 0xAA02 0x9099",
    "0x7F22 0xFB84 0xD832 0xA512 0x749C 0xC491 0x301B 0xDBCC",
    "0xDF11 0x5B59 0xCEAA 0x111E 0xAEFF 0xCA88 0x120C 0x9115"
  ];

  return (
    <div id="decryption-viewport" className="min-h-screen bg-[#050505] text-green-500 font-mono flex items-center justify-center p-6 relative overflow-hidden">
      {/* Absolute scrolling digital data streams for matrix immersion */}
      <div className="absolute inset-0 opacity-15 select-none pointer-events-none text-[10px] sm:text-xs leading-relaxed py-6 flex flex-col justify-around">
        {hexLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
            animate={{ x: i % 2 === 0 ? '100%' : '-100%' }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, ease: 'linear' }}
            className="whitespace-nowrap text-green-800 font-mono tracking-widest font-black"
          >
            {line} {line} {line}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-xl w-full bg-black/80 border border-green-500/30 p-8 rounded shadow-[0_0_80px_rgba(34,197,94,0.15)] backdrop-blur-sm z-10 text-center">
        {/* Terminal Header Accessories */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="text-green-500"
          >
            <Activity size={24} />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-green-500 font-black">
            Bypass Protocol Engaged
          </span>
        </div>

        <div className="space-y-4">
          <div className="h-16 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activePhrase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-md text-green-400 font-black tracking-wider uppercase select-none"
              >
                {activePhrase}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Percentage Display */}
          <div className="text-4xl font-black font-mono tracking-tighter text-green-500">
            {progress}%
          </div>

          {/* Graphical Loading Bar */}
          <div className="w-full h-2.5 bg-[#0a0a0a] border border-green-950 rounded-full overflow-hidden p-[1px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-green-600 to-green-500 rounded-full shadow-[0_0_8px_#22c55e]"
            />
          </div>

          <div className="pt-6 border-t border-green-950 flex items-center justify-between text-[10px] text-green-700 font-bold">
            <span className="flex items-center gap-1">
              <Cpu size={12} className="animate-pulse text-green-500" /> GATEWAY BYPASS: OK
            </span>
            <span className="flex items-center gap-1">
              <Terminal size={12} className="text-green-500" /> SECURE SHELL ESTABLISHED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

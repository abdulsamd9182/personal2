"use client";

import React, { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ValentineProtocol = () => {
  const [stage, setStage] = useState('auth'); 
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '60%' });
  const [noCount, setNoCount] = useState(0);

  // Password Verification Logic
  const handleVerify = () => {
    const password = prompt("ENTER ACCESS KEY:");
    if (password && password.toLowerCase() === "21 april") {
      setStage('proposal');
    } else {
      alert("ACCESS DENIED: Incorrect Identity Key.");
    }
  };

  const handleNo = () => {
    const randomTop = Math.random() * 60 + 20;
    const randomLeft = Math.random() * 60 + 20;
    setNoButtonPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setNoCount(noCount + 1);
  };

  const fireworks = Array.from({ length: 40 });

  return (
    <div className="w-full bg-[#020205] text-white font-sans select-none relative overflow-hidden flex flex-col items-start justify-start" style={{ height: '93.5vh', margin: 0, padding: 0 }}>
      
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 to-transparent pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {/* --- STAGE 1: AUTH --- */}
        {stage === 'auth' && (
          <motion.div 
            key="auth"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="h-full w-full flex flex-col items-center justify-center p-4 text-center z-10"
          >
            <div className="w-20 h-20 border border-white/10 flex items-center justify-center mb-8 bg-white/[0.02]">
               <Lock className="text-red-600 animate-pulse" size={32} />
            </div>
            <h1 className="text-4xl font-black uppercase tracking-widest mb-12 italic">Private Channel:<br/>Sana Saleem</h1>
            <button 
              onClick={handleVerify} 
              className="px-16 py-5 bg-white text-black font-black uppercase tracking-[0.4em] rounded-none hover:bg-red-600 hover:text-white transition-all duration-300 shadow-2xl"
            >
              Verify Identity
            </button>
          </motion.div>
        )}

        {/* --- STAGE 2: PROPOSAL --- */}
        {stage === 'proposal' && (
          <motion.div 
            key="proposal"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="h-full w-full flex flex-col items-center justify-center p-4 text-center z-10"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-14">
              SANA SALEEM, <br /> WILL YOU BE MY <br />
              <span className="text-red-600 drop-shadow-[0_0_50px_rgba(220,38,38,0.8)]">VALENTINE?</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setStage('success')}
                className="px-20 py-6 bg-red-600 text-white font-black uppercase tracking-[0.5em] rounded-none hover:scale-110 transition-all shadow-[0_0_50px_rgba(220,38,38,0.5)] z-20"
              >
                Accept
              </button>
              <button 
                onMouseEnter={handleNo}
                style={noCount > 0 ? { position: 'fixed', top: noButtonPos.top, left: noButtonPos.left } : {}}
                className="px-10 py-4 border border-white/10 text-neutral-600 font-black uppercase tracking-[0.3em] rounded-none z-20 backdrop-blur-md"
              >
                Decline
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STAGE 3: SUCCESS --- */}
        {stage === 'success' && (
          <motion.div 
            key="success"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="h-full w-full flex flex-col items-center justify-center p-4 text-center relative z-10"
          >
            {/* Professional Fireworks */}
            {fireworks.map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 1.2, 0], 
                  x: (Math.random() - 0.5) * 1400, 
                  y: (Math.random() - 0.5) * 1000,
                  opacity: [1, 1, 0],
                  backgroundColor: ["#ff0000", "#ffffff", "#ff6b6b", "#ffd700"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
                className="absolute w-1.5 h-1.5 rounded-full z-0 shadow-[0_0_10px_#fff]"
              />
            ))}

            {/* --- YOUR ORIGINAL FLOWER BACK --- */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
              className="z-20 mb-4 mt-4 flex justify-center"
            >
              <img 
                src="https://pngimg.com/uploads/rose/rose_PNG639.png" 
                alt="Full Red Rose" 
                className="w-56 h-56  pt-5 pb-4 md:w-80 md:h-80 object-contain filter drop-shadow-[0_0_25px_rgba(220,38,38,0.6)]"
              />
            </motion.div>

            {/* --- TEXT CONTENT (WIDE) --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="z-20 w-full"
            >
              <h2 className="text-3xl md:text-3xl font-black uppercase tracking-[0.2em] mb-4 italic text-red-500">
                Specially For You My Love
              </h2>
              
              <div className="max-w-5xl mx-auto bg-white/[0.04] border border-white/10 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
                <p className="text-neutral-200 font-mono text-[9px] md:text-[12px] tracking-[0.1em] leading-relaxed uppercase text-left border-l-4 border-red-600 pl-5">
                  Sana Saleem, this simple rose is a symbol of my pure love for you. 
                  Every petal represents a beautiful memory we've shared, 
                  and every thorn represents my promise to protect you forever. 
                  I am the luckiest person to have you by my side.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                   <p className="text-[10px] font-black tracking-[0.4em] text-white opacity-60 uppercase">Abdul Samad</p>
                   <Heart className="text-red-600 fill-red-600 animate-pulse" size={18} />
                </div>
              </div>
            </motion.div>

            {/* Background Aesthetic Text */}
            <h1 className="absolute bottom-10 text-[10vw] font-black uppercase tracking-tighter text-white/[0.03] pointer-events-none whitespace-nowrap z-0">
              Abdul Samad ❤️ Sana Saleem
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="absolute bottom-4 w-full px-10 flex justify-between items-end opacity-20 pointer-events-none z-20">
        <div className="text-[8px] font-black uppercase tracking-[0.4em]">Secure Heart.OS</div>
        <div className="text-[8px] font-black uppercase tracking-[0.4em]">14.02.2026</div>
      </footer>
    </div>
  );
};

export default ValentineProtocol;
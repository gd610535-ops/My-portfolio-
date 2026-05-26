import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 70);
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}<span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-1 align-middle" /></span>;
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col justify-center">
        <motion.div
          className="space-y-2 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary text-xs font-mono tracking-widest uppercase">Personal Portfolio</span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.9] tracking-tight mt-4">
            Frontend Web <br/>
            <span className="italic font-serif">Developer</span> {'&'} <br/>
            Designer
          </h1>
        </motion.div>

        <motion.div 
          className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md min-h-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypingText text="Building modern, responsive, and visually attractive websites with a focus on seamless user experiences, premium aesthetics, and cutting-edge technologies." />
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects" className="glow-btn">
            View Projects
          </a>
          <a href="#contact" className="glow-btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Decorative Floating Element */}
      <motion.div 
        className="absolute bottom-[15%] right-[5%] md:right-[15%] w-32 h-32 border border-white/10 rounded-full flex items-center justify-center opacity-40 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
      >
         <motion.div 
           className="w-[80%] h-[80%] border border-dashed border-white/20 rounded-full"
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
         />
         <span className="absolute text-[8px] text-white/40 rotate-12 uppercase tracking-widest font-mono">OPEN TO WORK</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium">Scroll</span>
        <div className="w-[1px] h-16 overflow-hidden relative">
           <motion.div 
             className="w-full h-1/2 bg-gradient-to-b from-primary to-transparent absolute top-0"
             animate={{ top: ['-50%', '100%'] }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
           />
        </div>
      </motion.div>
    </section>
  );
}

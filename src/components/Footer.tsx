"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <footer ref={containerRef} id="contact" className="relative bg-[#0a0a0a] pt-32 overflow-hidden border-t border-white/10 mt-10">
      <div className="px-6 max-w-[1200px] mx-auto relative z-10">
        
        <div className="flex justify-center mb-32">
          <motion.button 
            style={{ opacity, y }}
            className="w-24 h-24 rounded-full bg-white text-black text-[10px] uppercase tracking-widest flex items-center justify-center hover:scale-105 transition-transform duration-300 font-semibold"
            data-hover="true"
          >
            Let's Talk
          </motion.button>
        </div>

        <motion.h2 
          style={{ y }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-center max-w-4xl mx-auto leading-tight mb-32 text-white"
        >
          Rolland Studio is your trusted <span className="italic text-gray-500">strategy & technology</span> partner
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 text-sm">
          <div className="md:col-span-4 flex items-start gap-3">
            <div className="relative w-5 h-5 flex items-center justify-center mt-1">
              <div className="absolute inset-0 border-[1.5px] border-white rounded-[4px] rotate-45" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="font-serif text-xl tracking-tight leading-none font-bold text-white">Rolland<br/>Studio</span>
          </div>

          <div className="md:col-span-4 space-y-2">
            <p className="text-gray-500 mb-4 text-xs uppercase tracking-widest">[ Phone ]</p>
            <a href="tel:+491501234567" className="text-white hover:text-gray-300 transition-colors block text-base" data-hover="true">+49 150 1234567</a>
            <p className="text-gray-500 mb-4 mt-8 text-xs uppercase tracking-widest">[ Email ]</p>
            <a href="mailto:hai@rollandstudio.com" className="text-white text-lg hover:text-gray-300 transition-colors block" data-hover="true">hai@rollandstudio.com</a>
            <p className="text-gray-500 mt-10 text-xs leading-relaxed max-w-[260px]">
              Building timeless websites and brands—designed with clarity, crafted for impact, and made to last.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-500 mb-4 text-xs uppercase tracking-widest">[ Navigation ]</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-hover="true">Home</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors" data-hover="true">Work</a></li>
              <li><a href="#service" className="text-gray-300 hover:text-white transition-colors" data-hover="true">Service</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors" data-hover="true">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors" data-hover="true">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-500 mb-4 text-xs uppercase tracking-widest">[ Social ]</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-hover="true">X</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-hover="true">In</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-hover="true">Be</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-hover="true">Ig</a>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4 relative z-20">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" data-hover="true">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" data-hover="true">Terms & Conditions</a>
          </div>
          <p>© 2026 Rolland Studio. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0 opacity-[0.02]">
        <h1 className="font-serif text-[18vw] leading-[0.8] whitespace-nowrap text-white">
          Rolland Studio
        </h1>
      </div>
    </footer>
  );
}

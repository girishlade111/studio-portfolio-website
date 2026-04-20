"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 max-w-[1200px] mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-8 z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="mb-10 flex items-center gap-4 text-gray-400 text-xs tracking-[0.2em] uppercase">
            <span>Strategy</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Design</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Development</span>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight mb-12">
            <motion.span variants={item} className="block text-gray-300">Designing</motion.span>
            <motion.span variants={item} className="block italic text-white pr-8">with Certainty</motion.span>
          </h1>
          
          <motion.div variants={item} className="flex items-center gap-8 border-t border-white/10 pt-8 max-w-lg">
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted by partners connecting bold ideas with world-class execution.
            </p>
            <div className="flex gap-4 text-white opacity-50">
              {/* Client logos placeholder */}
              <div className="h-6 w-20 bg-white/20 rounded animate-pulse" />
              <div className="h-6 w-20 bg-white/20 rounded animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:col-span-4 relative h-[450px] lg:h-[600px] w-full rounded-2xl overflow-hidden group cursor-pointer"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          data-hover="true"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 ease-out opacity-40" />
          
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <p className="text-xs text-gray-400 mb-3 tracking-widest uppercase">Featured Case</p>
            <p className="font-serif text-2xl leading-snug">Rolland Studio is trusted strategy & design partner.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

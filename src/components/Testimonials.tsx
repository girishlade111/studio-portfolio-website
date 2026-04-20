"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Founder, Voxel labs",
    quote: "The entire process felt collaborative and efficient. The results exceeded our expectations—visually and strategically.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "David Kim",
    role: "Product Manager, Sperule",
    quote: "Clear communication, strong visual instinct, and fast iteration. Easily one of the best design partners we've worked with.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Lena Miller",
    role: "Marketing Lead, Solace Energy",
    quote: "From wireframes to final polish—everything was handled with care and craft. Our audience noticed the difference.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "James Chen",
    role: "CEO, Visionwork",
    quote: "Rolland Studio transformed our product experience. They perfectly balanced aesthetics with functionality.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  }
];

export function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-32 overflow-hidden border-t border-white/5 relative">
      <div className="px-6 max-w-[1200px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl max-w-2xl leading-tight mb-4">
            <span className="italic">Results, through</span> Partnership.
          </h2>
          <p className="text-sm text-gray-400 max-w-md">
            Success is not accidental; it is engineered. We don't just deliver projects, we foster enduring growth through strategic clarity and relentless execution.
          </p>
        </div>
        <p className="text-xs uppercase tracking-widest text-gray-500">[ Testimonials ]</p>
      </div>

      <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden ml-6 xl:ml-[calc(50vw-600px)]" data-hover="true">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-6 pb-8 pr-6 xl:pr-[calc(50vw-600px)]"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="min-w-[320px] md:min-w-[420px] bg-[#0a0a0a] rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors pointer-events-none"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

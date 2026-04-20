"use client";

import { motion } from "framer-motion";

const statsData = [
  { id: "01", number: "120+", label: "Successive Launches" },
  { id: "02", number: "8+", label: "Years of Innovation" },
  { id: "03", number: "96%", label: "Client Continuity" },
  { id: "04", number: "20+", label: "Industries Transformed" },
];

export function Stats() {
  return (
    <section className="px-6 py-32 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <p className="text-xs text-gray-500 uppercase tracking-widest">[ About ]</p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight"
        >
          At Rolland Studio, we believe that great design isn't just felt—it's proven. We move beyond trends to find the enduring essence of a brand.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            className="group relative bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 hover:bg-[#111111] transition-colors duration-500"
          >
            <div className="text-xs text-gray-500 mb-12 font-mono tracking-wider">[{stat.id}]</div>
            <div className="font-serif text-5xl mb-4 flex items-start gap-1 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
              <span className="text-xl mt-1 text-gray-500">*</span>
              {stat.number}
            </div>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-32 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
        <p className="text-xs text-gray-500 uppercase tracking-widest w-full md:w-auto">[ Pricing ]</p>
        <h2 className="font-serif text-4xl md:text-5xl flex-1">
          <span className="italic">Pricing</span> plan
        </h2>
        <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
          From strategic metrics to production execution. Two ways we typically partner with teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tier 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a] rounded-[24px] p-10 border border-white/5 relative flex flex-col hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-gray-400">Annual</span>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
          
          <h3 className="text-2xl mb-2 text-white">Ongoing Partnership</h3>
          <p className="text-gray-400 text-sm mb-12">For teams that need a long-term design & development partner.</p>

          <div className="mb-12 flex-1">
            <p className="text-sm text-white mb-6 font-medium">Includes</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3"><span className="text-white">+</span> Product and brand strategy alignment</li>
              <li className="flex gap-3"><span className="text-white">+</span> UI/UX design and system evolution</li>
              <li className="flex gap-3"><span className="text-white">+</span> Front-end and CMS development</li>
              <li className="flex gap-3"><span className="text-white">+</span> Framer or Webflow implementation</li>
              <li className="flex gap-3"><span className="text-white">+</span> Performance optimization and maintenance</li>
              <li className="flex gap-3"><span className="text-white">+</span> Async collaboration with regular check-ins</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-serif text-4xl text-white"><sup>$</sup>5,000 - <sup>$</sup>8,000</span>
              <span className="text-gray-500">/ mo</span>
            </div>
            <button className="w-full py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors" data-hover="true">
              → Apply for a Slot
            </button>
          </div>
        </motion.div>

        {/* Tier 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-10 flex flex-col border border-transparent"
        >
          <h3 className="text-2xl mb-2 mt-10 md:mt-12 text-white">Fixed Scope Engagement</h3>
          <p className="text-gray-400 text-sm mb-12 border-b border-white/10 pb-8">For clearly defined launches or transformations.</p>

          <div className="mb-12 flex-1">
            <p className="text-sm text-white mb-6 font-medium">Includes</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3"><span className="text-white">+</span> Discovery and strategic direction</li>
              <li className="flex gap-3"><span className="text-white">+</span> Visual identity & motion</li>
              <li className="flex gap-3"><span className="text-white">+</span> High-fidelity UI and prototyping</li>
              <li className="flex gap-3"><span className="text-white">+</span> Front-end build and CMS setup</li>
              <li className="flex gap-3"><span className="text-white">+</span> Launch support and handover</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-gray-400">Starting at</span>
              <span className="font-serif text-4xl text-white"><sup>$</sup>7,500</span>
            </div>
            <button className="w-full py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-black transition-colors" data-hover="true">
              → Request Proposal
            </button>
            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              We work with a limited number of clients at a time. Availability is intentionally constrained to maintain quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

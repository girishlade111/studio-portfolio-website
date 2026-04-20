"use client";

import { motion } from "framer-motion";

const expertiseData = [
  {
    title: "Strategy",
    description: "Mapping the path from abstract vision to market reality.",
    list: [
      "Product Roadmapping",
      "Market & Opportunity Analysis",
      "Digital Transformation Consulting",
      "Ideation Sprints",
    ],
  },
  {
    title: "Design",
    description: "Translating complex strategy into high-fidelity visual narratives.",
    list: [
      "Visual Identity & Art Direction",
      "Enterprise Design Systems (DLS)",
      "UI/UX Design & Prototyping",
      "Digital Art Direction",
      "Interaction & Motion Design",
    ],
  },
  {
    title: "Development",
    description: "Engineering high-performance digital environments built for scale.",
    list: [
      "Full-Stack Product Development",
      "High-Fidelity Front-end Architecture",
      "Custom Framer & Webflow Deployment",
      "CMS & E-Commerce Ecosystems",
      "Technical Performance Auditing",
    ],
  },
];

export function Expertise() {
  return (
    <section id="service" className="px-6 py-32 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <p className="text-xs text-gray-500 uppercase tracking-widest">[ Service ]</p>
        <h2 className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight">
          <span className="italic">Our Areas</span> of Expertise.
        </h2>
      </div>

      <div className="space-y-4">
        {expertiseData.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-12 bg-[#0a0a0a] rounded-2xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="md:col-span-4">
              <h3 className="font-serif text-4xl mb-6 text-white">{item.title}</h3>
              <p className="text-gray-400 max-w-sm leading-relaxed">{item.description}</p>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-300">
                {item.list.map((listItem) => (
                  <li key={listItem} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

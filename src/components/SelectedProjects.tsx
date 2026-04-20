"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Voxel labs",
    category: "Computational Visual Identity",
    size: "large",
    bg: "bg-neutral-900",
  },
  {
    id: 2,
    title: "Sperule",
    category: "Reimagining Digital Commerce",
    size: "large",
    bg: "bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80",
  },
  {
    id: 3,
    title: "Solace Energy",
    category: "Visualizing the Future of Power",
    size: "large",
    bg: "bg-neutral-950",
  },
  {
    id: 4,
    title: "Visionwork",
    category: "The Architecture of Productivity",
    size: "large",
    bg: "bg-[url('https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-60",
  }
];

export function SelectedProjects() {
  return (
    <section id="work" className="px-6 py-24 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 pb-8 gap-6">
        <h2 className="font-serif text-4xl md:text-5xl flex items-center gap-4">
          <span className="italic">Selected</span> Projects
        </h2>
        <button 
          className="text-xs uppercase tracking-widest border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          data-hover="true"
        >
          + See all Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
            className={`group relative rounded-[20px] overflow-hidden bg-[#111111] cursor-pointer ${
              project.size === "large" ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-square"
            }`}
            data-hover="true"
          >
            <div className={`absolute inset-0 ${project.bg} group-hover:scale-105 transition-transform duration-1000 ease-out`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <h3 className="font-serif text-3xl mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

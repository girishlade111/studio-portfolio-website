"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is the typical lead time for onboarding?",
    answer: "Once the initial strategy is aligned and the investment is secured, we typically initiate the first sprint within 7 to 10 business days. This allows us to assign your dedicated senior architect and prepare the necessary workspace environments."
  },
  {
    question: "Which platforms and technologies do you specialize in?",
    answer: "We primarily work with React, Next.js, and Tailwind CSS for front-end architecture. For CMS and e-commerce, we specialize in Sanity, Shopify, and Webflow."
  },
  {
    question: "Who owns the intellectual property of the work?",
    answer: "You do. Upon full payment of the final invoice, all intellectual property rights for the design and code are transferred entirely to your organization."
  },
  {
    question: "How do you manage communication and feedback?",
    answer: "We maintain an async-first approach using Slack/Discord for daily updates and Figma for visual feedback. We also schedule weekly strategy syncs via video call."
  },
  {
    question: "Can I adjust or scale my engagement mid-project?",
    answer: "Yes, our Ongoing Partnership model is designed to be flexible. We can adjust sprint velocity and resource allocation with a 30-day notice."
  },
  {
    question: "What does the final handover process look like?",
    answer: "We provide comprehensive documentation, recorded walkthroughs of the codebase or CMS, and a dedicated 2-week support window post-launch to ensure a seamless transition."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-32 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              <span className="italic">Asked</span> Questions
            </h2>
            <p className="text-sm text-gray-400">Got specific questions?</p>
            <a href="#contact" className="text-sm text-white underline mt-4 inline-block hover:text-gray-300 transition-colors" data-hover="true">Contact Us</a>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden transition-colors hover:bg-[#111111]"
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  data-hover="true"
                >
                  <span className="text-white text-base md:text-lg pr-8 font-light tracking-wide">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-sm text-gray-400 leading-relaxed pr-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

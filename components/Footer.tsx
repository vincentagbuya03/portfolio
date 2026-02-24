"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Vincent.dev — All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Twitter/X"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-slate-500 hover:text-cyan-accent transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-xs font-medium rounded-lg border border-white/10 text-slate-400 hover:border-cyan-accent/40 hover:text-cyan-accent transition-all duration-200"
        >
          ↑ Back to top
        </motion.button>
      </div>
    </footer>
  );
}

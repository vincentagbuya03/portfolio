"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Marquee from "./Marquee";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(15,52,96,0.3), transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            What I Use
          </p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Marquee skills={skills} />
          <Marquee skills={[...skills].reverse()} />
        </motion.div>
      </div>
    </section>
  );
}

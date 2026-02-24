"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

interface MarqueeProps {
  skills: Skill[];
}

export default function Marquee({ skills }: MarqueeProps) {
  const duplicated = [...skills, ...skills];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-4 w-max"
      >
        {duplicated.map((skill, index) => (
          <div
            key={index}
            className="glass flex items-center gap-3 px-5 py-3 rounded-xl whitespace-nowrap flex-shrink-0"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-sm font-medium text-slate-300">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

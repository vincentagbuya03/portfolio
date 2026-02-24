"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer glow-cyan-hover transition-all duration-300"
    >
      {/* Thumbnail */}
      <div
        className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        <span className="font-heading font-bold text-2xl text-white/30 group-hover:text-white/50 transition-colors duration-300">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full border border-cyan-accent/30 text-cyan-accent/80 bg-cyan-accent/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 text-center text-xs font-semibold rounded-lg border border-white/20 text-slate-300 hover:border-cyan-accent hover:text-cyan-accent transition-all duration-200"
          >
            GitHub
          </motion.a>
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 text-center text-xs font-semibold rounded-lg transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #00d4ff, #00fff5)", color: "#1a1a2e" }}
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(26,26,46,0.8), transparent)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-cyan-accent/30 to-slate-blue/50 flex items-center justify-center text-6xl border border-cyan-accent/20">
                👨‍💻
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                Hey, I&apos;m <span className="text-gradient">Vincent</span>
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m a passionate Full-Stack Developer with 4+ years of
                  experience building modern, scalable web applications. I
                  thrive at the intersection of design and engineering, crafting
                  digital experiences that are both beautiful and performant.
                </p>
                <p>
                  My expertise spans the full development spectrum — from
                  designing intuitive React frontends to architecting robust
                  Node.js backends. I&apos;m particularly passionate about
                  developer experience, clean architecture, and pushing the
                  boundaries of what&apos;s possible on the web.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or
                  leveling up through courses and certifications.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Projects", value: "30+" },
                  { label: "Years Exp.", value: "4+" },
                  { label: "Clients", value: "15+" },
                  { label: "Certs", value: "6" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="font-heading font-black text-xl text-cyan-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            Certifications{" "}
            <span className="text-gradient">&amp; Badges</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Professional certifications that validate my expertise and
            commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 glow-cyan-hover transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4`}
              >
                {cert.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1 leading-tight">
                {cert.name}
              </h3>
              <p className="text-cyan-accent/80 text-sm mb-1">{cert.issuer}</p>
              <p className="text-slate-500 text-xs mb-4">{cert.date}</p>
              <motion.a
                href={cert.credentialUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-cyan-accent/40 text-cyan-accent hover:bg-cyan-accent/10 transition-all duration-200"
              >
                Verify Credential →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

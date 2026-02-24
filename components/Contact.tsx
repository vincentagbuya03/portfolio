"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  { label: "GitHub", icon: "📦", href: "#" },
  { label: "LinkedIn", icon: "💼", href: "#" },
  { label: "Twitter/X", icon: "🐦", href: "#" },
  { label: "Email", icon: "✉️", href: "#" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (placeholder)");
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm text-slate-400 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/50 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-slate-400 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/50 transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm text-slate-400 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/50 transition-all duration-200 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-heading font-bold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #00fff5)",
                color: "#1a1a2e",
              }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-slate-500 text-sm mb-4">
              Or find me on
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:border-cyan-accent/40 transition-all duration-200"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-xs text-slate-500">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

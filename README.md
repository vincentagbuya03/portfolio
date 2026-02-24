# Vincent.dev — Glassmorphic Portfolio

A production-ready, glassmorphic minimalist portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Fonts**: System fonts (ui-sans-serif stack)
- **Icons**: React Icons

## Features

- 🎨 Glassmorphic UI with cyan accent glow effects
- ✨ Animated particle canvas hero section
- 📱 Fully responsive with mobile hamburger navigation
- 🚀 Smooth scroll animations via Framer Motion
- 🔄 Infinite marquee skills section
- 📋 Projects grid with hover effects
- 🏆 Certifications showcase
- 📬 Contact form with social links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Tailwind v4 theme + glassmorphism utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page composing all sections
├── components/
│   ├── Navbar.tsx       # Fixed navbar with scroll + mobile menu
│   ├── Hero.tsx         # Animated particle canvas hero
│   ├── Projects.tsx     # Projects grid section
│   ├── ProjectCard.tsx  # Individual project card
│   ├── Skills.tsx       # Tech stack section
│   ├── Marquee.tsx      # Infinite scrolling marquee
│   ├── Certifications.tsx
│   ├── About.tsx        # Bio + stats
│   ├── Contact.tsx      # Contact form + social links
│   └── Footer.tsx
└── data/
    ├── projects.ts
    ├── certifications.ts
    └── skills.ts
```

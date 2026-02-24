# Vincent.dev — Glassmorphic Portfolio

A production-ready, glassmorphic minimalist portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Fonts**: Inter + Montserrat via next/font/google
- **Icons**: React Icons

## Features

- 🎨 Glassmorphic UI with cyan accent glow effects
- ✨ Animated particle canvas hero section
- 📱 Fully responsive with mobile hamburger navigation
- 🚀 Smooth scroll animations via Framer Motion
- 🔄 Infinite marquee skills section
- 📋 Projects bento-grid with hover effects
- 🏆 Certifications showcase
- 📬 Contact form with social links

---

## 🚀 How to Put This in Your Repository

### Step 1 — Merge this Pull Request

This portfolio code lives on the `copilot/build-glassmorphic-portfolio` branch. To get it into your **main** branch:

1. Go to your repository on GitHub: `https://github.com/vincentagbuya03/portfolio`
2. Click the **"Pull requests"** tab
3. Open the pull request for this branch
4. Click **"Merge pull request"** → **"Confirm merge"**

Your `main` branch will now contain the full portfolio code. ✅

---

### Step 2 — Run Locally

Make sure you have **Node.js 18+** installed, then:

```bash
# Clone your repo (if you haven't already)
git clone https://github.com/vincentagbuya03/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

---

### Step 3 — Deploy to Vercel (Recommended — Free)

Vercel is the easiest way to deploy a Next.js site and is **free** for personal projects.

#### Option A: One-click deploy from GitHub

1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `vincentagbuya03/portfolio` repository
4. Leave all settings as defaults — Vercel auto-detects Next.js
5. Click **"Deploy"**

Your site will be live at `https://portfolio-vincentagbuya03.vercel.app` (or a custom domain you set up).

#### Option B: Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

Every future `git push` to `main` will automatically redeploy your site.

---

### Step 4 — Customize Your Content

All placeholder content is in the `data/` folder — just edit these three files:

| File | What to change |
|------|---------------|
| `data/projects.ts` | Your real projects, GitHub links, live demo URLs |
| `data/certifications.ts` | Your actual certificates and verification URLs |
| `data/skills.ts` | Your personal tech stack |

To update your **name, bio, and stats**, edit `components/About.tsx` and `components/Navbar.tsx`.

To update your **social links**, edit `components/Contact.tsx` and `components/Footer.tsx`.

To update your **page title and description**, edit `app/layout.tsx`.

---

## Build & Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm start
```

---

## Project Structure

```
├── app/
│   ├── globals.css      # Tailwind v4 theme + glassmorphism utilities
│   ├── layout.tsx       # Root layout with metadata and fonts
│   └── page.tsx         # Main page composing all sections
├── components/
│   ├── Navbar.tsx       # Fixed navbar with scroll + mobile menu
│   ├── Hero.tsx         # Animated particle canvas hero
│   ├── Projects.tsx     # Projects bento-grid section
│   ├── ProjectCard.tsx  # Individual project card
│   ├── Skills.tsx       # Tech stack section
│   ├── Marquee.tsx      # Infinite scrolling marquee
│   ├── Certifications.tsx
│   ├── About.tsx        # Bio + stats
│   ├── Contact.tsx      # Contact form + social links
│   └── Footer.tsx
└── data/
    ├── projects.ts      # ← Edit your projects here
    ├── certifications.ts # ← Edit your certifications here
    └── skills.ts        # ← Edit your tech stack here
```

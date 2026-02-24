export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-purple-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Intelligent conversational AI with context awareness, multi-modal inputs, and streaming responses.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "A Kanban-style project management tool with drag-and-drop, team collaboration, and analytics.",
    tech: ["TypeScript", "React", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    title: "Real-Time Collaboration Tool",
    description: "Live collaborative workspace with real-time editing, video calls, and integrated whiteboard.",
    tech: ["WebSockets", "Express", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, glassmorphic developer portfolio built with cutting-edge web technologies.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
  {
    id: 6,
    title: "Weather Analytics App",
    description: "Advanced weather forecasting with historical data visualization, alerts, and climate insights.",
    tech: ["Python", "Flask", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
];

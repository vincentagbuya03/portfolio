export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  icon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    credentialUrl: "#",
    icon: "☁️",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 2,
    name: "Google IT Support Professional",
    issuer: "Google / Coursera",
    date: "Mar 2023",
    credentialUrl: "#",
    icon: "🔧",
    color: "from-blue-500/20 to-green-500/20",
  },
  {
    id: 3,
    name: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    date: "Jun 2023",
    credentialUrl: "#",
    icon: "⚛️",
    color: "from-blue-600/20 to-purple-500/20",
  },
  {
    id: 4,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Sep 2023",
    credentialUrl: "#",
    icon: "🏆",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 5,
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "Nov 2023",
    credentialUrl: "#",
    icon: "🍃",
    color: "from-green-600/20 to-cyan-500/20",
  },
  {
    id: 6,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "Feb 2024",
    credentialUrl: "#",
    icon: "🐳",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

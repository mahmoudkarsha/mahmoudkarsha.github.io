// Variables for dynamic content
const profileImage = "https://avatars.githubusercontent.com/u/63265034?s=256&v=4";
const fullName = "Mahmoud Abdulbari Karsha";
const email = "mahmoud.bari.karsha@gmail.com";
const phone = "+964 751 760 6295";
const linkedin =
  "https://www.linkedin.com/in/mahmoud-karsha-539434340?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const contactInfo = `Erbil, Kurdistan Region`;

const professionalSummary = `Software Engineer with 6+ years of experience in full-stack development, backend systems, and infrastructure. Proven ability to build scalable web and mobile applications, manage servers, and deliver production-ready solutions.`;

// Skill level: 1 Basic, 2 Intermediate, 3 Proficient, 4 Advanced, 5 Expert
const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { label: "TypeScript/JavaScript", link: "https://www.typescriptlang.org/", level: 5 },
      { label: "Python", link: "https://www.python.org/", level: 3 },
      { label: "Dart", link: "https://dart.dev/", level: 3 },
    ],
  },
  {
    category: "Front-End Frameworks",
    skills: [
      { label: "React", link: "https://reactjs.org/", level: 5 },
      { label: "Flutter", link: "https://flutter.dev/", level: 3 },
      { label: "Next.js", link: "https://nextjs.org/", level: 4 },
      { label: "React Native (Expo)", link: "https://reactnative.dev/", level: 3 },
    ],
  },
  {
    category: "Back-End Frameworks",
    skills: [
      { label: "NestJS", link: "https://nestjs.com/", level: 4 },
      { label: "Express.js", link: "https://expressjs.com/", level: 5 },
      { label: "FastAPI", link: "https://fastapi.tiangolo.com/", level: 3 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { label: "MongoDB", link: "https://www.mongodb.com/", level: 4 },
      { label: "PostgreSQL", link: "https://www.postgresql.org/", level: 4 },
      { label: "Redis", link: "https://redis.io/", level: 3 },
    ],
  },
  { category: "AI", skills: [{ label: "RAG Systems and AI Agents", link: "#", level: 3 }] },
  {
    category: "Infrastructure",
    skills: [
      { label: "Ubuntu Server", link: "https://ubuntu.com/server", level: 4 },
      { label: "Windows Server", link: "https://www.microsoft.com/en-us/windows-server", level: 4 },
      { label: "VPS", link: "#", level: 4 },
      { label: "DNS", link: "#", level: 4 },
      { label: "Email Servers", link: "#", level: 3 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { label: "Docker and Docker Compose", link: "https://www.docker.com/", level: 4 },
      { label: "CI/CD", link: "#", level: 2 },
      { label: "Nginx and Traefik", link: "#", level: 3 },
    ],
  },
  {
    category: "Networking",
    skills: [
      { label: "Routing", link: "#", level: 4 },
      { label: "Switching", link: "#", level: 4 },
      { label: "Firewall Configuration", link: "#", level: 3 },
    ],
  },
];

const education = "BSc in Computer Systems Engineering - Cordoba Private University (2024)";

const languages = [
  "Northern Kurdish (Kurmanji): native",
  "Central Kurdish (Sorani): good",
  "Arabic: fluent",
  "English: very good",
];

const professionalExperience = [
  {
    title: "Software Engineer - NewStarters (Remote, Germany)",
    duration: "Feb 2023 - Present",
    responsibilities: [
      "Built web applications for clients in Germany using React, Next.js, and NestJS.",
      "Built a FastAPI service for serving AI models and features.",
      "Built TypeScript libraries for internal use and open-source release.",
      "Built a RAG system for document search and question answering using LangChain, OpenAI, OpenRouter, and FAISS.",
      "Built an SSO identity provider and authorization server (OAuth 2.0 and OpenID Connect).",
      "Built a multi-product, microservice-based platform that serves as the foundation for several applications.",
      "Built interactive landing pages using React and Next.js.",
      "Developed mobile applications using Flutter.",
      "Developed a WhatsApp chatbot.",
      "Managed VPS infrastructure, DNS, a self-hosted cloud (Coolify), Docker, the Traefik proxy, and email servers (Mailcow).",
    ],
  },
  {
    title: "Data Center Engineer - (Syria)",
    duration: "Jul 2022 - Oct 2023",
    responsibilities: [
      "Managed enterprise servers (HPE, Dell EMC) across Linux and Windows.",
      "Configured Active Directory, DHCP, DNS, and Hyper-V clusters.",
      "Implemented storage solutions (TrueNAS) and backup systems.",
      "Managed networking (Cisco, Mikrotik, VPN, firewalls).",
    ],
  },
  {
    title: "Software Developer - (Syria)",
    duration: "Jun 2020 - Jul 2022",
    responsibilities: [
      "Built chat applications with file transfer and calling features.",
      "Developed financial and salary management systems.",
      "Delivered a delivery mobile app with its backend and admin dashboard.",
      "Optimized legacy PHP systems and improved SQL performance.",
      "Designed frontend layouts and backend features.",
      "Built hardware-integrated solutions using Raspberry Pi and Arduino.",
    ],
  },
  {
    title: "Network Technician - Tera Center (Syria)",
    duration: "Feb 2017 - Apr 2020",
    responsibilities: [
      "Managed ISP infrastructure using Mikrotik and Ubiquiti devices.",
      "Provided hardware and software troubleshooting.",
    ],
  },
];

const projects = [
  {
    name: "Node.js HTTP Library",
    link: "https://github.com/lazy-js/server",
    description:
      "A modern, TypeScript-first Node.js server framework built on Express.js. It provides a clean, modular architecture for building scalable web applications and APIs with built-in security, logging, and error handling.",
  },
  {
    name: "Error Guard Library",
    link: "https://github.com/lazy-js/error-guard",
    description: "An error transformation library for structured error management in TypeScript.",
  },
  {
    name: "Keycloak Auth Library",
    link: "https://github.com/lazy-js/auth",
    description:
      "A comprehensive authentication and authorization package built on top of Keycloak, providing a unified API for user management, authentication, and role-based access control across multiple clients and applications.",
  },
  {
    name: "Archive Project",
    link: "https://github.com/mahmoudkarsha/archive-project",
    description: "A desktop archive application built with Electron, React, and Express.js, with full-text search across document contents.",
  },
  {
    name: "IT Solutions Project",
    link: "https://github.com/mahmoudkarsha/it-solutions-website",
    description: "A company website for an IT services firm, built with React.",
  },
];

const certificates = [
  {
    label: "Introduction to Software Product Management",
    link: "https://coursera.org/share/e0d01a68e5560ad8a9f6df38403f25d2",
  },
  { label: "React Basics", link: "https://coursera.org/share/e4ab8a8968c862594f8b847627dd35ea" },
];

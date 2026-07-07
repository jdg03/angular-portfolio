import { Technology } from '../models/technology.model';

export const TECHNOLOGIES = {
  JAVA: {
    name: "Java",
    class: "border-red-500/20 text-red-300 bg-red-500/5",
    icon: "Java",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "border-yellow-500/20 text-yellow-300 bg-yellow-500/5",
    icon: "JavaScript",
  },
  PYTHON: {
    name: "Python",
    class: "border-blue-500/20 text-blue-300 bg-blue-500/5",
    icon: "Python",
  },
  SQLSERVER: {
    name: "SQL Server",
    class: "border-red-600/20 text-red-300 bg-red-600/5",
    icon: "SqlServer",
  },
  MYSQL: {
    name: "MySQL",
    class: "border-cyan-600/20 text-cyan-300 bg-cyan-600/5",
    icon: "MySQL",
  },
  MONGODB: {
    name: "MongoDB",
    class: "border-emerald-600/20 text-emerald-300 bg-emerald-600/5",
    icon: "MongoDB",
  },
  CSHARP: {
    name: "C#",
    class: "border-purple-600/20 text-purple-300 bg-purple-600/5",
    icon: "CSharp",
  },
  NET: {
    name: "NET Core",
    class: "border-indigo-500/20 text-indigo-300 bg-indigo-500/5",
    icon: "Net",
  },
  SPRING: {
    name: "Spring Boot",
    class: "border-green-500/20 text-green-300 bg-green-500/5",
    icon: "Spring",
  },
  NODEJS: {
    name: "Node.js",
    class: "border-emerald-500/20 text-emerald-300 bg-emerald-500/5",
    icon: "NodeJs",
  },
  NEXT: {
    name: "Next.js",
    class: "border-black/20 text-white bg-black/40",
    icon: "NextJS",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "border-sky-500/20 text-sky-300 bg-sky-500/5",
    icon: "Tailwind",
  },
  REACT: {
    name: "React",
    class: "border-cyan-500/20 text-cyan-300 bg-cyan-500/5",
    icon: "React",
  },
  ANGULAR: {
    name: "Angular",
    class: "border-red-500/20 text-red-400 bg-red-500/5",
    icon: "Angular",
  },
  GITHUB: {
    name: "GitHub",
    class: "border-slate-500/20 text-slate-300 bg-slate-500/5",
    icon: "GitHub",
  },
  DOCKER: {
    name: "Docker",
    class: "border-blue-400/20 text-blue-300 bg-blue-400/5",
    icon: "Docker",
  },
  GCP: {
    name: "GCP",
    class: "border-blue-500/20 text-blue-300 bg-blue-500/5",
    icon: "Gcp",
  },
  AZURE: {
    name: "Azure",
    class: "border-sky-600/20 text-sky-300 bg-sky-600/5",
    icon: "Azure",
  },
} satisfies Record<string, Technology>;

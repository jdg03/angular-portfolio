import { Technology } from '../models/technology.model';

export const TAGS = {
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
  FIREBASE: {
    name: "Firebase",
    class: "border-amber-500/20 text-amber-300 bg-amber-500/5",
    icon: "Firebase",
  },
  NODEJS: {
    name: "Node.js",
    class: "border-emerald-500/20 text-emerald-300 bg-emerald-500/5",
    icon: "NodeJs",
  },
  SUPABASE: {
    name: "Supabase",
    class: "border-teal-500/20 text-teal-300 bg-teal-500/5",
    icon: "Supabase",
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
  CSHARP: {
    name: "C#",
    class: "border-violet-500/20 text-violet-300 bg-violet-500/5",
    icon: "CSharp",
  },
  TENSORFLOW: {
    name: "TensorFlow",
    class: "border-orange-500/20 text-orange-300 bg-orange-500/5",
    icon: "TensorFlow",
  },
  JWT: {
    name: "JWT",
    class: "border-purple-500/20 text-purple-300 bg-purple-500/5",
    icon: "Jwt",
  },
  NET: {
    name: "NET Core",
    class: "border-indigo-500/20 text-indigo-300 bg-indigo-500/5",
    icon: "Net",
  },
  TypeScript: {
    name: "TypeScript",
    class: "border-blue-600/20 text-blue-300 bg-blue-600/5",
    icon: "TypeScript",
  },
  Mongo: {
    name: "MongoDB",
    class: "border-green-600/20 text-green-300 bg-green-600/5",
    icon: "MongoDB",
  },
} satisfies Record<string, Technology>;

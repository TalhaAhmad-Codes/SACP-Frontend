
import {
  ShieldUser,
  BookOpen,
  GitBranch,
  BellRing,
  BarChart3,
  Brain,
} from "lucide-react";

export const STATS = [
  { value: "3",   label: "User Roles"         },
  { value: "10+", label: "Core Features"      },
  { value: "4",   label: "Tech Stacks"        },
  { value: "AI",  label: "ML Classification"  },
];

export const FEATURES = [
  {
    id: "auth",
    icon: ShieldUser,             
    iconBg: "bg-[#dce9ff]", iconColor: "text-[#004ac6]",
    title: "Role-Based Access",
    desc: "Separate secure dashboards for Admins, Faculty, and Students with JWT-based authentication.",
    tags: ["Admin", "Faculty", "Student"],
    large: true,
    notification: null,
  },
  {
    id: "records",
    icon: BookOpen,
    iconBg: "bg-[#d3f5e5]", iconColor: "text-[#1a7a4a]",
    title: "Academic Records",
    desc: "Centralized storage for all academic history, performance metrics, and vital documentation.",
    tags: [],
    large: false,
    notification: null,
  },
  {
    id: "workflow",
    icon: GitBranch,
    iconBg: "bg-[#ede9fe]", iconColor: "text-[#7c3aed]",
    title: "Workflow Automation",
    desc: "Trigger-based workflows for attendance warnings, deadlines, and exam schedules — fully automated.",
    tags: [],
    large: false,
    notification: null,
  },
  {
    id: "notif",
    icon: BellRing,
    iconBg: "bg-[#fef3c7]", iconColor: "text-[#d97706]",
    title: "Smart Notifications",
    desc: "Intelligent alert system that prioritizes messages based on urgency and user context.",
    tags: [],
    large: true,
    notification: [
      { label: "Exam Schedule Updated", sub: "Room 402 · 10:00 AM", border: "border-l-[#004ac6]" },
      { label: "Emergency Alert",       sub: "Campus Maintenance Notice", border: "border-l-[#dc2626]" },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    iconBg: "bg-[#e0f2fe]", iconColor: "text-[#0891b2]",
    title: "Analytics Dashboard",
    desc: "Real-time visualization of communication efficiency and institutional engagement metrics.",
    tags: [],
    large: false,
    notification: null,
  },
  {
    id: "ai",
    icon: Brain,
    iconBg: "bg-[#fee2e2]", iconColor: "text-[#dc2626]",
    title: "AI Classification",
    desc: "ML-powered categorization and routing of incoming communications automatically using NLP.",
    tags: [],
    large: false,
    notification: null,
  },
];


export { ARCH_STEPS } from "./arch.data";

export const TECH_TAGS = ["ASP.NET Core", "React", "Python", "PostgreSQL", "Node.js", "Socket.IO"];
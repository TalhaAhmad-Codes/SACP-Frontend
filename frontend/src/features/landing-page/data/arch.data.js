
import { CalendarDays, GitFork, Bot, Send, LineChart } from "lucide-react";

export const ARCH_STEPS = [
  { id:"events",   icon: CalendarDays, label:"Academic Events", active:false },
  { id:"rules",    icon: GitFork,      label:"Rule Engine",     active:false },
  { id:"ai",       icon: Bot,          label:"AI Core",         active:true  },
  { id:"dispatch", icon: Send,         label:"Dispatch",        active:false },
  { id:"analytics",icon: LineChart,    label:"Analytics",       active:false },
];
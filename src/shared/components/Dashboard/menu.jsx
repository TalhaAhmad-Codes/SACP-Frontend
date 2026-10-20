import { BookOpenText, LayoutDashboard, LogOut, Send, Settings, Workflow } from "lucide-react";

export const menu = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: <LayoutDashboard size={30} strokeWidth={2.25} />,
        path: "/",
        role: ["admin", "faculty", "student"]
    },
    {
        id: "academic",
        title: "Academic",
        icon: <BookOpenText size={30} strokeWidth={2.25} />,
        path: "/academic",
        role: ["admin", "faculty", "student"]
    },
    {
        id: "communication",
        title: "Communication",
        icon: <Send size={30} strokeWidth={2.25} />,
        path: "/communication",
        role: ["admin", "faculty", "student"]
    },
    {
        id: "automation",
        title: "Automation",
        icon: <Workflow size={30} strokeWidth={2.25} />,
        path: "/automation",
        role: ["admin", "faculty"]
    },
   
    
];

export const bottomMenu=[
     {
        id: "settings",
        title: "Settings",
        icon: <Settings size={30} strokeWidth={2.25} />,
        path: "/settings",
        role: ["admin", "faculty", "student"]
    },
   
    {
        id: "logout",
        title: "Log Out",
        icon: <LogOut size={30} strokeWidth={2.25}  />,
        path: "/logout",
        role: ["admin", "faculty", "student"]
    },
    
    
]
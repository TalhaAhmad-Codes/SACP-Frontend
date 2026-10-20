import { useState } from "react";
import Sidebar from "@shared/components/Dashboard/Sidebar";
import DashboardNavbar from "@shared/components/Dashboard/DashboardNavbar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Sidebar - Highest z-index to sit on top of everything */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Container - Offset dynamically by sidebar width */}
      <div
        className={`flex flex-col flex-1 h-full w-full transition-all duration-300 ease-in-out ${
          open ? "ml-70" : "ml-25"
        }`}
      >
        <DashboardNavbar />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Main workspace content */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
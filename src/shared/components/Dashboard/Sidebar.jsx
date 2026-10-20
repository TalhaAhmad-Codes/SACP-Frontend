import { ChevronLeft } from "lucide-react";
import Links from "./NavLinks";

const Sidebar = ({ open, setOpen }) => {
  return (
    <aside
      className={`bg-white shadow-lg h-full border-r border-slate-100 dark:border-slate-700 outline-none flex flex-col fixed top-0 left-0 transition-all duration-300 ease-in-out dark:bg-slate-800 dark:shadow-2xl z-50 ${
        open ? "w-70" : "w-25"
      }`}
    >
      {/* Toggle Button */}
      <button
        type="button"
        className="absolute top-6 -right-3.5 z-50 rounded-full p-1 hover:cursor-pointer bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-600 shadow-md transition-colors duration-300 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Sidebar"
      >
        <ChevronLeft
          size={18}
          strokeWidth={3}
          className={`text-slate-700 dark:text-slate-200 transition-transform duration-500 ease-in-out ${
            !open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Header Space */}
      <div className="w-full py-6 px-4 flex items-center justify-center">
        <h2 className="font-bold text-xl text-blue-600 dark:text-blue-400">
          {open ? "ACADEMIC" : "AC"}
        </h2>
      </div>

      <hr className="dark:border-slate-700 border-slate-100" />

      {/* Links Navigation */}
      <div className="h-full ">
        <Links open={open} />
      </div>
    </aside>
  );
};

export default Sidebar;
import { Search, BellIcon, MessageCircleIcon, CircleSmall } from "lucide-react";

function DashboardNavbar({ onToggleSidebar }) {
  return (
    <nav className="w-full h-16 bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 flex justify-between items-center py-3 px-6 sticky top-0 z-30 transition-colors duration-200">
      {/* Left Badge */}
      <div className="hidden md:flex w-fit bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 items-center justify-center py-1.5 px-4 rounded-2xl gap-2">
        <CircleSmall className="h-4 w-4 rounded-full fill-blue-500 stroke-none" />
        <h3 className="text-sm font-semibold whitespace-nowrap text-slate-700 dark:text-slate-200 tracking-wide">
          fall-2024 CS
        </h3>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden mx-3 w-10 bg-white dark:bg-slate-700 p-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg text-blue-600 shadow-sm"
        onClick={onToggleSidebar}
      >
        ☰
      </button>

      {/* Right Utility Icons */}
      <div className="flex gap-2 md:gap-5 items-center">
        <div className="flex justify-between items-center bg-white dark:bg-slate-700/50 rounded-xl w-90 h-9 shadow-sm border border-gray-200 dark:border-slate-600 dark:text-slate-200 px-3">
          <input
            className="outline-none w-full bg-transparent text-sm  dark:text-slate-200 placeholder:text-gray-400 dark:placeholder:text-slate-400"
            type="search"
            placeholder="Search Text"
          />
          <Search className="w-4 h-4 text-gray-400 mr-2 hover:cursor-pointer" />
        </div>

        <div className="rounded-full w-10 h-10 flex justify-center items-center bg-transparent text-slate-600 dark:text-slate-300  dark:hover:bg-slate-700 hover:bg-gray-100/60 hover:text-gray-500 cursor-pointer transition-colors duration-200 ">
          <BellIcon className="w-5 h-5  " />
        </div>
        <div className="hidden sm:flex bg-transparent rounded-full w-10 h-10 justify-center items-center text-slate-600 dark:text-slate-300 hover:bg-gray-100/60 hover:text-gray-500  dark:hover:bg-slate-700 cursor-pointer transition-colors duration-200">
          <MessageCircleIcon className="w-5 h-5" />
        </div>
        <div className="bg-blue-600 text-white font-semibold rounded-full w-9 h-9 flex justify-center items-center text-sm shadow-sm">
          R
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-sm font-semibold leading-tight">Raza</span>
          <span className="text-xs text-gray-500">@gmail.com</span>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
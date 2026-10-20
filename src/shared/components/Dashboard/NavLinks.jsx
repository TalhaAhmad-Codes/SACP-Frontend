import { useState } from "react";
import { bottomMenu, menu } from "./menu.jsx";
import { NavLink } from "react-router-dom";

const Links = ({ open }) => {
  // Store active item by unique ID to prevent index collision between arrays
  const [activeId, setActiveId] = useState(menu[0]?.id || "dashboard");

  const FloatingLabel = ({ title }) => {
    return (
      <div className="absolute left-full top-1/2 -translate-y-1/2 translate-x-5 ml-3 px-3 py-1.5 rounded-xl bg-slate-800 dark:bg-slate-700 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-md">
        {title}
      </div>
    );
  };

  const iconsStyle = {
    open: {
      active:
        "bg-blue-200 text-blue-600 font-semibold p-4 cursor-pointer duration-300 transition-colors active:scale-90 border-r-3 border-l-blue-600 dark:bg-slate-700 dark:text-white ",
      closed:
        "hover:bg-blue-200/40 hover:text-blue-500 font-semibold p-3 cursor-pointer duration-300 text-slate-400 active:scale-90 transition-colors dark:hover:bg-slate-600 dark:hover:text-white",
    },
    closed: {
      active:
        "bg-blue-200/60 text-blue-600 font-semibold rounded-2xl p-4 cursor-pointer duration-300 transition active:scale-90 transition-colors dark:bg-slate-700 dark:text-white",
      notActive:
        "hover:bg-blue-200/40 hover:text-blue-500 font-semibold rounded-2xl p-4 cursor-pointer duration-300 text-slate-400 transition-colors active:scale-90 transition dark:hover:bg-slate-600 dark:hover:text-white",
    },
  };

  const renderItem = (item) => {
    const isActive = activeId === item.id;

    return (
      <li key={item.id} className="flex justify-center items-center">
        {open ? (
          <NavLink
            to={item.path}
            className={`${
              isActive ? iconsStyle.open.active : iconsStyle.open.closed
            } justify-center items-center w-full`}
            onClick={(e) => {
              e.preventDefault();
              setActiveId(item.id);
            }}
          >
            <div className="flex gap-4 items-center transition-all duration-300 tracking-normal translate-x-5">
              {item.icon}
              <span className="text-xl whitespace-nowrap">{item.title}</span>
            </div>
          </NavLink>
        ) : (
          <NavLink
            to={item.path}
            className={`${
              isActive
                ? iconsStyle.closed.active
                : iconsStyle.closed.notActive
            } relative group flex justify-center items-center`}
            onClick={(e) => {
              e.preventDefault();
              setActiveId(item.id);
            }}
          >
            {item.icon}
            <FloatingLabel title={item.title} />
          </NavLink>
        )}
      </li>
    );
  };

  return (
    <nav className="flex flex-col justify-between h-full  py-4  transition-all duration-300 grow">
      {/* Top Main Navigation */}
      <ul className="flex flex-col gap-4">
        {menu.map((item) => renderItem(item))}
      </ul>

      {/* Bottom Navigation (e.g. Settings, Logout) */}
      <ul className="flex flex-col gap-3 mt-auto">
        
        {bottomMenu.map((item) => renderItem(item))}
      </ul>
    </nav>
  );
};

export default Links;
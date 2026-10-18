// import { useState } from "react"
import { Search } from "lucide-react"
import { BellIcon } from "lucide-react"
import { MessageCircleIcon } from "lucide-react"
import { CircleSmall } from "lucide-react"

function DashboardNavbar({ ontogglesidebar }) {

      return (
            <>
                  {/* navbar bacground color and positioning */}
                  <nav className=" h-16 md:h-14 bg-gray-100 md:bg-white shadow-sm border-b border-gray-200 flex justify-between items-center py-3 md:px-6 m-0 md:rounded-xl sticky top-0 z-50">
                        {/* this will show on  desktop only*/}
                        <div className="flex items-center justify-center">
                              <div className="hidden md:flex w-fit bg-slate-100 border gap-2 border-slate-200  items-center justify-center py-1.5 px-4 rounded-2xl ">
                                    <CircleSmall className="h-4 w-4 rounded-4xl fill-blue-500 stroke-none" />
                                    <h3 className="text-sm font-semibold text-slate-700 tracking-wide">fall-2024 CS</h3>
                              </div>
                              <div>

                              </div>
                        </div>

                        {/* for mobile view  hamburger and serchbar*/}
                        <button className="md:hidden mx-3 w-10 bg-white p-1.5 cursor-pointer hover:bg-gray-100 rounded-lg text-blue-600 text-[20px] shadow-sm" onClick={ontogglesidebar}>
                              ☰
                        </button>

                        <div className="md:hidden flex shadow-sm justify-between  bg-white rounded-xl full h-8  items-center px-3">
                              <input className=" outline-none w-full" type="search" placeholder="Search Text" />
                              <Search className="w-5 h-5 text-gray-400 mr-2 hover:cursor-pointer " />
                        </div>
                        {/* icons and profile menu for both view but some icon and text will not be shown on mobile view */}
                        <div className="flex gap-2 ml-2 md:gap-5 items-center mr-4 md:mr-0">
                              <div className="hidden md:flex justify-between items-center bg-white rounded-xl w-2xs h-8 shadow-sm border border-gray-200 px-3">

                                    <input className=" outline-none w-full" type="search" placeholder="Search Text" />
                                    <Search className="w-5 h-5 text-gray-400 mr-2 hover:cursor-pointer" />
                              </div>
                              <div className=" rounded-4xl w-10 h-10 flex justify-center items-center bg-transparent"><BellIcon className="w-5 h-5" /></div>
                              <div className="hidden sm:flex bg-transparent rounded-4xl w-10 h-10  justify-center items-center "><MessageCircleIcon className="w-5 h5" /></div>
                              <div className="bg-white shadow-sm rounded-4xl w-11 h-11 flex justify-center items-center ">img</div>
                              <div className="hidden sm:flex flex-col ">
                                    <span className="text-sm font-semibold">Raza</span>
                                    <span className="text-xs text-gray-600 ">@gmail.com</span>
                              </div>

                        </div>




                  </nav>
            </>
      )
}

export default DashboardNavbar
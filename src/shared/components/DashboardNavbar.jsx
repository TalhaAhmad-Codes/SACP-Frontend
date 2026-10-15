// import { useState } from "react"
import { Search } from "lucide-react"
import { BellIcon } from "lucide-react"
import { MessageCircleIcon } from "lucide-react"

function DashboardNavbar({ ontogglesidebar }) {

      return (
            <>
                  {/* navbar bacground color and positioning */}
                  <nav className=" h-16 md:h-14 bg-gray-100 md:bg-gray-200 flex justify-between items-center py-3 md:px-6 m-0 md:m-2 md:rounded-xl sticky top-0 z-50">
                        {/* this will show on  desktop only*/}
                        <div className="hidden md:flex bg-white rounded-xl w-2xs h-8  items-center md:focus-within:ring-2  md:focus-within:ring-offset-2 md:focus-within:ring-blue-300 px-3">

                              <Search className="w-5 h-5 text-gray-400 mr-2 " />
                              <input className=" outline-none w-full" type="search" placeholder="Search Text" />
                        </div>
                        {/* for mobile view  hamburger and serchbar*/}
                        <button className="md:hidden mx-3 w-10 bg-white p-1.5 rounded-lg text-blue-600 text-[20px] shadow-sm" onClick={ontogglesidebar}>
                              ☰
                        </button>

                        <div className="md:hidden flex bg-white rounded-xl full h-8  items-center px-3">
                              <Search className="w-5 h-5 text-gray-400 mr-2 " />
                              <input className=" outline-none w-full" type="search" placeholder="Search Text" />
                        </div>
                        {/* icons and profile menu for both view but some icon and text will not be shown on mobile view */}
                        <div className="flex gap-2 ml-2 md:gap-5 items-center mr-4 md:mr-0">
                              <div className="bg-white rounded-4xl w-10 h-10 flex justify-center items-center shadow-sm"><BellIcon className="w-5 h-5" /></div>
                              <div className="hidden sm:flex bg-white rounded-4xl w-10 h-10  justify-center items-center shadow-sm"><MessageCircleIcon className="w-5 h5" /></div>
                              <div className="bg-white rounded-4xl w-11 h-11 flex justify-center items-center ">img</div>
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
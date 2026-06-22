import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinkStyles = ({ isActive }) => 
    isActive 
      ? "text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1" 
      : "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors pb-1";

  const mobileNavLinkStyles = ({ isActive }) => 
    isActive 
      ? "block text-base font-medium text-blue-600 bg-blue-50 px-3 py-2 rounded-md" 
      : "block text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md";

  return (
    <nav className="w-full bg-white border-b border-gray-100 font-sans">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
         
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#1C39BB] tracking-wider">
              SACP
            </Link>
          </div>

         
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={navLinkStyles} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact Us
            </NavLink>
          </div>

         
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-[#0066fe] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-blue-700 transition-all transform active:scale-95"
            >
              Sign Up
            </Link>
          </div>

          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
               
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 shadow-lg`} id="mobile-menu">
        <div className="px-4 pt-3 pb-4 space-y-3">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles} end>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles}>
            Contact Us
          </NavLink>
          
          <hr className="border-gray-200 my-2" />
          
          <div className="space-y-2 pt-2">
            <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center text-base font-medium text-gray-600 hover:text-gray-900 py-2">
              Login
            </Link>
            <Link 
              to="/signup" 
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#0066fe] text-white px-4 py-2.5 rounded-full text-base font-medium shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
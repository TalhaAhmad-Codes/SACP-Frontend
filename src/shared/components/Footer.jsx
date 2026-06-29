
export default function Footer() {
  return (
    <footer className="bg-[#0b1b2d] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        
        <div className="space-y-2">
          <div className="text-xl font-bold tracking-tight text-white">
            SACP
          </div>
          <p className="text-xs text-gray-400/80 tracking-wide">
            &copy; 2026 Smart Academic Communication Platform. All rights reserved.
          </p>
        </div>

       
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 ml-auto md:ml-0">
          
         
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-gray-300">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#access" className="hover:text-white transition-colors">Institutional Access</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </nav>

         
          <div className="flex items-center gap-3">
           
            <button 
              className="w-8 h-8 rounded-full border border-gray-700/60 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all focus:outline-none"
              aria-label="Share"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 10.742l4.632-2.316m0 0a3 3 0 102.684-2.684 3 3 0 00-2.684 2.684zm-4.632 2.316m0 0a3 3 0 10-5.367-2.684 3 3 0 005.367 2.684zm0 0l4.632 2.316m0 0a3 3 0 102.684 2.684 3 3 0 00-2.684-2.684z" />
              </svg>
            </button>

            
            <button 
              className="w-8 h-8 rounded-full border border-gray-700/60 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all focus:outline-none"
              aria-label="Language Selector"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

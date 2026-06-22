function FooterSection(){
    return(
        <>
        <footer className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-8 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
        
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-slate-800 tracking-wider">SACP</span>
            <span className="text-slate-300">|</span>
            <span>&copy; 2024 Smart Academic Communication Platform. All rights reserved.</span>
          </div>

        
          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-slate-800 transition-colors">Contact Support</a>
            <a href="#documentation" className="hover:text-slate-800 transition-colors">Documentation</a>
          </div>

        </div>
      </footer>
        </>
    )
}
export default FooterSection

function PlatformSection() {
    return (

            <div className="bg-white font-sans text-slate-600 antialiased">
              
                <section className="bg-[#031530] text-white py-12 px-6 sm:px-12 md:px-16 rounded-b-none lg:rounded-2xl max-w-7xl mx-auto my-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                       
                        <div className="lg:col-span-6 space-y-6">
                            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
                                Empowering educational ecosystems with unified intelligence.
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                                SACP is built on the foundation of rigorous academic standards and
                                modern architectural patterns. We believe that communication should be
                                an enabler, not a bottleneck for institutional success.
                            </p>

                           
                            <div className="flex flex-row gap-12 pt-4">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Uptime</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white">15k+</div>
                                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Processed Messages</div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="lg:col-span-6 flex justify-end w-full">
                            <div className="w-full bg-[#0a2246] border border-slate-800/60 rounded-xl p-8 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[260px]">

                                
                                <div className="my-auto text-slate-400/80">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5L12 9.5M12 14.5L12 19.5M4.5 12L9.5 12M14.5 12L19.5 12M18.364 5.636l-3.536 3.536M9.172 14.828l-3.536 3.536M18.364 18.364l-3.536-3.536M9.172 9.172L5.636 5.636M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    </svg>
                                </div>

                              
                                <div className="w-full bg-[#031530]/80 backdrop-blur-sm border border-slate-800/40 rounded-lg p-3 text-left">
                                    <p className="text-xs sm:text-sm text-slate-300 italic font-light tracking-wide">
                                        "The architecture reflects our commitment to stability and scalability across multiple service layers."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            )
}
export default PlatformSection
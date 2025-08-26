import Screenshot from '../assets/Screenshot.jpg';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 lg:py-10 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden min-h-[90vh]">
            {/* Enhanced floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full opacity-40 animate-float blur-2xl"></div>
                <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full opacity-50 animate-bounce blur-xl"></div>
                <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-pink-500/20 transform rotate-45 opacity-30 animate-rotate-slow blur-lg"></div>
                <div className="absolute top-32 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/15 to-teal-500/15 rounded-full opacity-25 animate-pulse blur-lg"></div>
            </div>

            <div className="max-w-3xl z-10 animate-fade-in-up lg:pr-8">
                <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                        ✨ Trusted by 500+ companies
                    </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-[1.1] bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    We craft fast, scalable sites for teams of all sizes.
                </h1>
                <p className="text-lg lg:text-xl mb-12 text-gray-300 leading-relaxed max-w-2xl">
                    WebEngine empowers marketing teams to break free from website bottlenecks with a composable approach built for speed and scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                    <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 text-lg flex items-center justify-center gap-2">
                        Book intro call
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="group bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm text-lg flex items-center justify-center gap-2">
                        View client stories
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-gray-700/50">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">500+</div>
                        <div className="text-gray-400 text-sm">Websites Built</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">98%</div>
                        <div className="text-gray-400 text-sm">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">3x</div>
                        <div className="text-gray-400 text-sm">Faster Delivery</div>
                    </div>
                </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:mb-10 w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
                <div className="relative">
                    {/* Glow effect behind screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform scale-110"></div>

                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-0 w-full max-w-lg transform hover:scale-105 transition-transform duration-700 border border-white/20">
                        {/* Enhanced browser mockup header */}
                        <div className="flex items-center justify-between px-6 py-2 bg-gray-50/90 backdrop-blur-sm rounded-t-2xl border-b border-gray-200/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
                                <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
                                <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
                            </div>
                            <div className="flex-1 bg-white/70 rounded-lg px-4 py-1 mx-6 text-sm text-gray-600 flex items-center gap-3 backdrop-blur-sm border border-gray-200/50">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">site.webengine.com</span>
                            </div>
                            
                        </div>

                        {/* Auto-scrolling screenshot container */}
                        <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-2xl overflow-hidden relative">
                            <div className="screenshot-scroll-container h-full overflow-hidden">
                                <img
                                    src={Screenshot}
                                    alt="Website Screenshot"
                                    className="w-full h-auto object-cover screenshot-scroll"
                                />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    );
}

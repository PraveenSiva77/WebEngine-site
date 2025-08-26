export default function CallToAction() {
  const trustMetrics = [
    { value: "500+", label: "Happy Clients", icon: "👥" },
    { value: "98%", label: "Success Rate", icon: "📈" },
    { value: "24/7", label: "Support", icon: "💬" },
    { value: "5★", label: "Rating", icon: "⭐" }
  ];

  const benefits = [
    "Free consultation & strategy session",
    "No commitment required to get started", 
    "Expert advice from certified professionals",
    "Custom roadmap for your business goals"
  ];

  return (
    <section className="px-8 lg:px-16 py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-center relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-transparent" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
             }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="mb-12">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
              Ready to transform your business?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Let's get
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              started.
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Talk with our experts to start your website transformation today. 
            <span className="text-blue-400 font-medium"> Join the ranks of industry leaders</span> who trust us with their digital presence.
          </p>
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 min-w-[250px]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Book intro call
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="text-gray-500 text-lg font-medium">or</div>
          
          <button className="group bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:border-blue-500/50 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-3 min-w-[250px]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View case studies
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-3 border-gray-800 flex items-center justify-center text-white font-bold text-sm">
                JD
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full border-3 border-gray-800 flex items-center justify-center text-white font-bold text-sm">
                SM
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-3 border-gray-800 flex items-center justify-center text-white font-bold text-sm">
                MK
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-3 border-gray-800 flex items-center justify-center text-white font-bold text-sm">
                +500
              </div>
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Join 500+ happy clients</div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-400 text-sm ml-1">(4.9/5)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits grid */}
        <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/30 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What you get when you work with us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-700/20 border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency element */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-center gap-3 text-blue-400">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              Limited availability - Book your consultation this week to secure your spot
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

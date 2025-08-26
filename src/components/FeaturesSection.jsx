export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Design",
      description: "Designs that engage, inspire, and drive results with modern aesthetics and user-centered approaches.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/30",
      stats: "150+ Projects",
      features: ["UI/UX Design", "Brand Identity", "Prototyping", "Design Systems"]
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Development",
      description: "Modern builds that are fast, scalable, and future-proof using cutting-edge technologies.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/5",
      borderColor: "border-purple-500/30",
      stats: "300+ Websites",
      features: ["React/Next.js", "Node.js APIs", "Cloud Deploy", "Performance"]
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "CRO",
      description: "Data-driven experiments that turn visitors into customers with proven optimization strategies.",
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-500/10 to-green-600/5",
      borderColor: "border-green-500/30",
      stats: "3x Conversion",
      features: ["A/B Testing", "Analytics", "User Research", "Optimization"]
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO",
      description: "Optimized websites that rank higher and load faster with comprehensive SEO strategies.",
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-500/10 to-orange-600/5",
      borderColor: "border-orange-500/30",
      stats: "200% Traffic",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"]
    },
    // More Data with different title
    {
      icon: (
        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Content Writing",
      description: "Engaging content that resonates with your audience and drives conversions.",
      color: "pink",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-500/10 to-pink-600/5",
      borderColor: "border-pink-500/30",
      stats: "100+ Articles",
      features: ["Blog Posts", "Copywriting", "SEO Content", "Social Media"]
    }

  ];

  return (
    <section className="px-8 lg:px-16 py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              succeed online
            </span>
          </h2>
          <p className="text-gray-400 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            From design to development, optimization to maintenance - we provide end-to-end web solutions that drive results and accelerate growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:${feature.borderColor} transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div className="mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    {feature.icon}
                  </div>
                  
                  {/* Stats badge */}
                  <div className={`inline-flex items-center gap-1 mt-4 px-3 py-1 bg-gray-700/50 rounded-full text-xs text-${feature.color}-400 font-medium`}>
                    <span className={`w-1.5 h-1.5 bg-${feature.color}-400 rounded-full`}></span>
                    {feature.stats}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 text-white group-hover:text-${feature.color}-300 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Feature list */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className={`w-1 h-1 bg-${feature.color}-400 rounded-full`}></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className={`flex items-center text-${feature.color}-400 font-medium text-sm group-hover:text-${feature.color}-300 transition-all duration-300 group-hover:gap-3`}>
                  Learn more
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 border-${feature.color}-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125`}>
                <div className={`w-2 h-2 bg-${feature.color}-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to transform your website?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help your business achieve its online goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 justify-center">
                Start Your Project
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-700/30">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

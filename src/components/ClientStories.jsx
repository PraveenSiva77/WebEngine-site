export default function ClientStories() {
  const stories = [
    {
      title: "How Mutiny Achieves Leaner Marketing Website Operations",
      subtitle: "WebEngine Subscription Model",
      brand: "Mutiny",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-700",
      textColor: "text-white",
      metric: "50%",
      metricLabel: "Faster Updates",
      tags: ["Subscription", "Operations"],
      logo: "🎯"
    },
    {
      title: "Circle's HubSpot Website Increases Product Demos",
      subtitle: "Complete Website Redesign",
      brand: "Circle",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      textColor: "text-white",
      metric: "500%",
      metricLabel: "Demo Increase",
      tags: ["HubSpot", "CRO"],
      icon: "⭕"
    },
    {
      title: "Redesigning Snowflake's University Platform",
      subtitle: "Educational Services Microsite",
      brand: "Snowflake",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      textColor: "text-white",
      metric: "300%",
      metricLabel: "User Engagement",
      tags: ["Education", "Platform"],
      logo: "❄️"
    },
    {
      title: "Calendly's Up-Market Website Strategy",
      subtitle: "Enterprise Growth Initiative",
      brand: "Calendly",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
      textColor: "text-white",
      metric: "250%",
      metricLabel: "Enterprise Leads",
      tags: ["Strategy", "Growth"],
      logo: "📅"
    }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
          <div className="mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Brands you know.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Results you'll love.
              </span>
            </h2>
            <p className="text-gray-400 text-xl lg:text-2xl leading-relaxed max-w-2xl">
              Real stories from companies that wanted more—and got it. See how we've helped industry leaders achieve extraordinary results.
            </p>
          </div>
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 text-lg flex items-center gap-2">
            View All Stories
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`${story.bgColor} ${story.textColor} rounded-3xl p-8 hover:-translate-y-4 hover:shadow-2xl cursor-pointer transition-all duration-500 border border-white/10 group relative overflow-hidden`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-3xl"></div>
              
              <div className="relative z-10">
                {/* Header with logo/icon */}
                <div className="flex flex-col justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {story.icon ? (
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{story.icon}</span>
                      </div>
                    ) : (
                      <div className="text-3xl">{story.logo}</div>
                    )}
                    <div>
                      <div className="font-bold text-lg">{story.brand}</div>
                      <div className="text-white/70 text-xs">Case Study</div>
                    </div>
                  </div>
                  
                  {/* Metric badge */}
                  {/* <div className="flex items-end gap-2">
                    <div className="text-lg font-bold">{story.metric}</div>
                    <div className="text-white/70 text-lg">{story.metricLabel}</div>
                  </div> */}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                    {story.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {story.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {story.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more link */}
                <div className="flex items-center text-white/90 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Read case study
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our client success stories speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                500%
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Average Conversion Increase</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                300%
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Traffic Growth</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                50%
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Faster Time to Market</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                98%
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

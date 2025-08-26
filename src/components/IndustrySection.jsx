export default function IndustrySection() {
  const industries = [
    { 
      name: "SaaS", 
      icon: "⚡", 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
      borderColor: "hover:border-blue-500/30",
      description: "Software as a Service platforms"
    },
    { 
      name: "AI/ML", 
      icon: "🤖", 
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/10",
      borderColor: "hover:border-purple-500/30",
      description: "Artificial Intelligence & Machine Learning"
    },
    { 
      name: "Web3", 
      icon: "🔗", 
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
      borderColor: "hover:border-green-500/30",
      description: "Blockchain & Decentralized apps"
    },
    { 
      name: "Fintech", 
      icon: "💰", 
      color: "hover:text-yellow-400",
      bgColor: "hover:bg-yellow-500/10",
      borderColor: "hover:border-yellow-500/30",
      description: "Financial Technology solutions"
    },
    { 
      name: "Developers", 
      icon: "👨‍💻", 
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/10",
      borderColor: "hover:border-pink-500/30",
      description: "Developer tools & platforms"
    },
    { 
      name: "Enterprise", 
      icon: "🏢", 
      color: "hover:text-cyan-400",
      bgColor: "hover:bg-cyan-500/10",
      borderColor: "hover:border-cyan-500/30",
      description: "Large-scale enterprise solutions"
    }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Industry Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Serving industries that demand
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              speed and scale
            </span>
          </h2>
          <p className="text-gray-400 text-xl lg:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
            We specialize in industries where high performance, scalability, and innovation matter most.
          </p>
        </div>
        
        {/* Enhanced industry cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 ${industry.borderColor} transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer ${industry.bgColor}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${industry.color}`}></div>
              
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className={`text-2xl lg:text-3xl font-bold mb-3 text-white ${industry.color} transition-all duration-300`}>
                  {industry.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                  {industry.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className={`absolute bottom-4 right-4 w-6 h-6 border-2 border-current opacity-20 group-hover:opacity-100 rounded-full transition-all duration-500 ${industry.color}`}>
                <div className={`w-1.5 h-1.5 bg-current rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-20">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 text-lg flex items-center gap-2 mx-auto">
            View all industries
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Enhanced testimonial section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/30 relative overflow-hidden">
            {/* Testimonial glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    TW
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-xl text-white mb-1">Tucker Wieland</div>
                  <div className="text-blue-400 font-medium">Director, Marketing Strategy Operations</div>
                  <div className="text-gray-400 text-sm">@ Justworks</div>
                </div>
              </div>
              
              {/* Quote icon */}
              <div className="text-blue-400/30 text-6xl mb-4 font-serif">"</div>
              
              <blockquote className="text-gray-300 italic text-lg lg:text-xl leading-relaxed mb-6">
                One of the things that I appreciate quite a bit is that the WebEngine relationship feels very casual. Being able to talk to them directly feels very much like we're just one big team.
              </blockquote>
              
              {/* Rating stars */}
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-400 text-sm ml-2">5.0 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

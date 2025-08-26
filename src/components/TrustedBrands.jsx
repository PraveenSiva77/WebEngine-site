export default function TrustedBrands() {
  const brands = [
    { name: "ServiceTitan", logo: "🔧", category: "SaaS" },
    { name: "Circle", logo: "⭕", category: "Community" },
    { name: "Calendly", logo: "📅", category: "Productivity" },
    { name: "Justworks", logo: "⚖️", category: "HR Tech" },
    { name: "Braze", logo: "📱", category: "Marketing" },
    { name: "Cribl", logo: "📊", category: "Data" },
    { name: "Varonis", logo: "🔒", category: "Security" },
    { name: "Motive", logo: "🚛", category: "Logistics" },
    { name: "BetterUp", logo: "📈", category: "Coaching" },
    { name: "Snowflake", logo: "❄️", category: "Data Cloud" },
    { name: "Mutiny", logo: "🎯", category: "CRO" },
    { name: "Webflow", logo: "🌊", category: "Design" }
  ];

  return (
    <section className="px-8 lg:px-16 py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-400 text-sm font-medium">Trusted by 500+ companies</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Trusted by the world's fastest growing
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300">
            Startups and{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Enterprises
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </span>
          </p>
        </div>
        
        {/* Enhanced brand grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
                  {brand.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {brand.category}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 pt-12 border-t border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                500+
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Companies Trust Us</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                98%
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                3x
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Faster Delivery</div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-sm lg:text-base">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to join these industry leaders?
          </p>
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 mx-auto">
            Start Your Project
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

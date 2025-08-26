export default function BlogSection() {
  const blogPosts = [
    {
      title: "Composable CMS: What Is It And Why You Need It",
      description: "Learn how a composable CMS can transform your digital experience with unprecedented flexibility and scalability.",
      author: "Jesse Schor",
      date: "Friday, May 23rd",
      readTime: "2 min",
      category: "CMS",
      categoryColor: "bg-purple-500",
      featured: true,
      thumbnail: "🏗️"
    },
    {
      title: "The 25 Best B2B SaaS Websites in 2025",
      description: "See the best B2B SaaS websites that are enticing prospective customers and driving conversions.",
      author: "Devon Wood",
      date: "Wednesday, October",
      readTime: "6 min",
      category: "Design",
      categoryColor: "bg-blue-500",
      featured: false,
      thumbnail: "🚀"
    },
    {
      title: "The 12 Best Enterprise CMS Platforms in 2025",
      description: "Discover 2025's top 12 enterprise CMS platforms like Contentful, Sanity, and more for scalable content management.",
      author: "Devon Wood",
      date: "Tuesday, October 8th",
      readTime: "4 min",
      category: "Enterprise",
      categoryColor: "bg-green-500",
      featured: false,
      thumbnail: "⚡"
    },
    {
      title: "How to Build an Enterprise Design System",
      description: "Discover how to implement an enterprise design system for consistent, scalable user experiences across your organization.",
      author: "Eric Izazaga",
      date: "Wednesday, December",
      readTime: "3 min",
      category: "Design System",
      categoryColor: "bg-orange-500",
      featured: false,
      thumbnail: "🎨"
    }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Latest Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Check out our latest
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              blog insights
            </span>
          </h2>
          <p className="text-gray-400 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Stay ahead with expert strategies, trends, and actionable tactics from the WebEngine team.
          </p>
          
          {/* Blog stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="group">
              <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">100+</div>
              <div className="text-gray-500 text-sm">Articles</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">50K+</div>
              <div className="text-gray-500 text-sm">Monthly Readers</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">Weekly</div>
              <div className="text-gray-500 text-sm">New Content</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                post.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Featured badge */}
              {post.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </div>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Thumbnail with category */}
                <div className="relative mb-6">
                  <div className="h-32 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-600/20">
                    <div className="text-4xl">{post.thumbnail}</div>
                  </div>
                  
                  {/* Category badge */}
                  <div className={`absolute bottom-3 left-3 ${post.categoryColor} text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm`}>
                    {post.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3 text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
                
                {/* Meta information */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{post.author}</div>
                      <div className="text-gray-500 text-xs">{post.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-400 text-sm font-medium">{post.readTime}</span>
                  </div>
                </div>

                {/* Read more link */}
                <div className="mt-4 pt-4 border-t border-gray-700/20">
                  <div className="flex items-center text-blue-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Read article
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-blue-500/20 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter signup section */}
        <div className="bg-gradient-to-r from-gray-800/20 to-gray-900/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/30 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Never miss an insight
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest trends, strategies, and expert insights delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                Subscribe
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

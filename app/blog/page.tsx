'use client';

import Link from 'next/link';

export default function Blog() {
  const featuredPost = {
    title: "How to Choose the Right Sports Flooring for Schools, Clubs & Stadiums",
    excerpt: "When it comes to building a safe, high-performance sports facility, the flooring you choose plays a huge role. Whether you're planning an indoor badminton court, an outdoor basketball court, an athletic running track, or a multi-purpose hall, picking the right sports flooring ensures durability, athlete safety, and low maintenance costs.",
    fullContent: `When it comes to building a safe, high-performance sports facility, the flooring you choose plays a huge role. Whether you're planning an indoor badminton court, an outdoor basketball court, an athletic running track, or a multi-purpose hall, picking the right sports flooring ensures durability, athlete safety, and low maintenance costs.

In this guide, we break down key factors to help you choose the perfect sports flooring for schools, sports clubs, and stadiums.

1. Understand the Purpose of the Court
Start by defining the main activities.

Will it be used for a single sport (e.g., badminton, squash, tennis)?

Or will it host multiple sports like volleyball, basketball, futsal, or skating?

For single-sport courts, go with flooring approved for that game by relevant federations (like BWF for badminton or FIBA for basketball). For multi-purpose areas, choose durable, easy-to-maintain surfaces like synthetic or modular tiles.

2. Indoor vs Outdoor — Pick the Right Material
Indoor Flooring Options:

Wooden Flooring: Popular for badminton and squash courts; provides perfect bounce and shock absorption.

PVC / Vinyl Flooring: Good for multi-purpose halls and schools. Cost-effective, easy to clean, and anti-slip.

PU Flooring: Great for indoor basketball and futsal courts.

Outdoor Flooring Options:

Acrylic Coating: Common for basketball, tennis, and multi-purpose courts. UV-resistant and weatherproof.

Synthetic Turf: Perfect for football fields and cricket practice pitches.

EPDM Flooring: Widely used for jogging tracks, kids' play areas, and walking tracks.

3. Focus on Safety & Performance
Your flooring must protect athletes from injuries. Look for:
✔ Shock absorption
✔ Anti-slip properties
✔ Good ball bounce (for sports like basketball & badminton)
✔ Seamless joints to prevent tripping

Certified materials and skilled installation ensure these standards.

4. Consider Long-Term Maintenance
Choose flooring that fits your maintenance capacity:
✔ Frequency of cleaning required
✔ Resistance to wear and tear
✔ Ease of repair and replacement
✔ Cost of ongoing maintenance

High-quality flooring may cost more initially but saves money in long-term maintenance.

5. Budget Planning & Return on Investment
Plan your budget considering:
✔ Initial installation costs
✔ Long-term durability
✔ Maintenance expenses
✔ Potential for multi-sport usage

Invest in certified materials and professional installation for maximum ROI and athlete satisfaction.`,
    image: "https://readdy.ai/api/search-image?query=Modern%20sports%20facility%20with%20multiple%20flooring%20types%2C%20school%20gymnasium%20with%20basketball%20court%2C%20professional%20sports%20flooring%20installation%2C%20indoor%20multi-purpose%20sports%20hall%2C%20athletic%20facility%20design%2C%20safety%20focused%20sports%20surfaces%2C%20educational%20sports%20infrastructure%2C%20premium%20sports%20flooring%20materials&width=800&height=500&seq=blog-featured-001&orientation=landscape",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Sports Flooring Guide"
  };

  const blogPosts = [
    {
      title: "Best Sports Flooring Options for Schools",
      excerpt: "Discover the most suitable flooring solutions for educational institutions, focusing on safety, durability, and cost-effectiveness.",
      image: "https://readdy.ai/api/search-image?query=School%20sports%20gymnasium%20with%20safe%20flooring%2C%20educational%20facility%20sports%20court%2C%20student%20athletes%20playing%20on%20professional%20flooring%2C%20school%20basketball%20court%20with%20proper%20surface%2C%20indoor%20school%20sports%20facility%2C%20safety%20focused%20athletic%20flooring&width=400&height=300&seq=blog-001&orientation=landscape",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Education"
    },
    {
      title: "Indoor Sports Flooring: What You Need to Know",
      excerpt: "Complete guide to indoor sports flooring materials, installation process, and maintenance requirements for optimal performance.",
      image: "https://readdy.ai/api/search-image?query=Indoor%20sports%20facility%20with%20professional%20flooring%2C%20basketball%20court%20with%20wooden%20surface%2C%20badminton%20courts%20with%20synthetic%20flooring%2C%20indoor%20athletics%20facility%2C%20modern%20sports%20complex%20interior%2C%20premium%20indoor%20sports%20surfaces&width=400&height=300&seq=blog-002&orientation=landscape",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Installation"
    },
    {
      title: "Multi-Purpose Sports Courts: Maximizing Your Investment",
      excerpt: "Learn how multi-purpose sports courts can serve multiple sports while maintaining quality and performance standards.",
      image: "https://readdy.ai/api/search-image?query=Multi-purpose%20sports%20court%20with%20versatile%20flooring%2C%20court%20markings%20for%20multiple%20sports%2C%20gymnasium%20with%20convertible%20sports%20surface%2C%20flexible%20athletic%20facility%20design%2C%20multi-sport%20indoor%20facility%2C%20professional%20sports%20flooring&width=400&height=300&seq=blog-003&orientation=landscape",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Planning"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guidance on sports flooring solutions, trends, and best practices
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-green-600 font-medium text-sm">{featuredPost.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <div className="text-gray-600 leading-relaxed mb-6 max-h-96 overflow-y-auto">
                  {featuredPost.fullContent.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {/* <Link href="/blog/how-to-choose-right-sports-flooring" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors cursor-pointer">
                  Read Full Article
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                {/* <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-colors cursor-pointer">
                  Read More
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link> */}
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Link href="/blog" className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold cursor-pointer">
            View All Articles
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
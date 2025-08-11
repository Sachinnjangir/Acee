
'use client';

export default function Stats() {
  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '7+', label: 'Years Experience' },
    { number: '20+', label: 'Cities Served' },
    { number: '100%', label: 'Quality Guaranteed' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Sports Facilities Worldwide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to excellence has made us the preferred choice for sports flooring solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20indoor%20sports%20facility%20with%20multiple%20courts%20including%20basketball%20court%20with%20wooden%20flooring%2C%20badminton%20courts%20with%20proper%20lighting%2C%20modern%20sports%20arena%20interior%2C%20clean%20geometric%20lines%2C%20bright%20natural%20lighting%2C%20professional%20sports%20flooring%20surfaces%2C%20indoor%20stadium%20architecture%2C%20athletic%20facility%20design%2C%20green%20and%20blue%20color%20accents%2C%20premium%20sports%20infrastructure&width=1920&height=1080&seq=sports-hero-001&orientation=landscape')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-transparent to-blue-600/30"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Premium
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Sports </span>
            Flooring
          </h1> */}
          
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional sports flooring solutions for badminton, basketball, football, squash courts, running tracks and more.
          </p> */}
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap cursor-pointer">
              View Products
            </button>
          </div> */}
          
          {/* <div className="mt-16 flex justify-center space-x-8 text-sm text-gray-500"> */}
            {/* <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-award-line text-green-500"></i>
              </div>
              <span>Premium Quality</span>
            </div> */}
            {/* <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-hammer-line text-blue-500"></i>
              </div>
              <span>Professional Installation</span>
            </div> */}
            {/* <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line text-orange-500"></i>
              </div>
              <span>25+ Years Experience</span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

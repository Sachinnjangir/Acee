
'use client';

export default function CTA() {
  return (
    <section id="contact"className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your Sports Facility?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you create the perfect sports flooring solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap cursor-pointer">
              Get Free Quote
            </button> */}
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-200 whitespace-nowrap cursor-pointer">
              Call Now: +91 9323993344
            </button>
          </div>
          
          {/* <div className="mt-8 flex justify-center items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-check-line text-green-500"></i>
              </div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-check-line text-green-500"></i>
              </div>
              <span>Professional installation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-check-line text-green-500"></i>
              </div>
              <span>25-year warranty</span>
            </div>
          </div> */}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-phone-line text-green-600 text-xl"></i>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 9323993344</p>
              <p className="text-gray-600">Mon-Fri 8AM-6PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-mail-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 break-all">acersportsflooringindia@gmail.com</p>
              {/* <p className="text-gray-600">quotes@acersportsflooring.com</p> */}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-map-pin-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Gala no 1a,sagar industrial estate Mumbai </p>
              <p className="text-gray-600"> Maharashtra 401208, IN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

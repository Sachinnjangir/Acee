// app/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-600 mb-8">
            Crafting Champions, One Court at a Time
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Established in 2019, Acer Sports Floor India is a leading sports flooring company in India, trusted for quality, innovation, and timely project execution. We specialise in installing IAAF-certified running tracks, FIBA-standard basketball courts, badminton courts, synthetic turfs, squash courts, and more.
            </p>
            <p>
              Our mission is to promote sports culture by providing athletes with safe, world-class surfaces that enhance performance and minimise injuries. We combine advanced materials with skilled workmanship to deliver results that last.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IAAF Certified</h4>
              <p className="text-gray-600 text-sm">International standards</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-basketball-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">FIBA Standard</h4>
              <p className="text-gray-600 text-sm">Basketball excellence</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Since 2019</h4>
              <p className="text-gray-600 text-sm">Trusted experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

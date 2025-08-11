
'use client';

import { useState } from 'react';

export default function Features() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const flooringTypes = [
    {
      icon: 'ri-basketball-line',
      title: 'Basketball Courts',
      description: 'Professional hardwood and synthetic flooring with excellent grip and shock absorption for optimal performance.',
      color: 'from-orange-500 to-red-500',
      image: 'https://readdy.ai/api/search-image?query=Professional%20basketball%20court%20with%20wooden%20flooring%2C%20proper%20court%20markings%2C%20bright%20arena%20lighting%2C%20modern%20sports%20facility%20interior%2C%20orange%20and%20red%20color%20scheme%2C%20premium%20hardwood%20surface%2C%20basketball%20hoops%2C%20clean%20geometric%20lines&width=400&height=300&seq=basketball-001&orientation=landscape'
    },
    {
      icon: 'ri-ping-pong-line',
      title: 'Badminton Courts',
      description: 'Specialized synthetic surfaces with perfect bounce characteristics and anti-slip properties for competitive play.',
      color: 'from-green-500 to-emerald-500',
      image: 'https://readdy.ai/api/search-image?query=Badminton%20court%20with%20green%20synthetic%20flooring%2C%20white%20court%20lines%2C%20badminton%20net%20setup%2C%20indoor%20sports%20facility%2C%20bright%20lighting%2C%20professional%20sports%20surface%2C%20clean%20modern%20design%2C%20green%20and%20white%20color%20scheme&width=400&height=300&seq=badminton-001&orientation=landscape'
    },
    {
      icon: 'ri-football-line',
      title: 'Football Courts',
      description: 'Durable artificial turf and specialized indoor surfaces designed for football training and matches.',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=Indoor%20football%20court%20with%20artificial%20turf%2C%20goal%20posts%2C%20proper%20field%20markings%2C%20modern%20sports%20facility%2C%20blue%20and%20green%20colors%2C%20professional%20artificial%20grass%20surface%2C%20athletic%20training%20facility&width=400&height=300&seq=football-001&orientation=landscape'
    },
    {
      icon: 'ri-boxing-line',
      title: 'Squash Courts',
      description: 'High-performance flooring with superior ball response and durability for intense squash competitions.',
      color: 'from-purple-500 to-pink-500',
      image: 'https://readdy.ai/api/search-image?query=Squash%20court%20with%20wooden%20flooring%2C%20glass%20walls%2C%20proper%20court%20markings%2C%20enclosed%20sports%20facility%2C%20professional%20sports%20surface%2C%20modern%20lighting%2C%20clean%20minimalist%20design%2C%20purple%20and%20pink%20accents&width=400&height=300&seq=squash-001&orientation=landscape'
    },
    {
      icon: 'ri-run-line',
      title: 'Running Tracks',
      description: 'Weather-resistant synthetic tracks with optimal traction and cushioning for all running events.',
      color: 'from-red-500 to-orange-500',
      image: 'https://readdy.ai/api/search-image?query=Professional%20running%20track%20with%20red%20synthetic%20surface%2C%20white%20lane%20markings%2C%20curved%20track%20design%2C%20outdoor%20athletics%20facility%2C%20modern%20sports%20infrastructure%2C%20track%20and%20field%20stadium%2C%20athletic%20surface&width=400&height=300&seq=track-001&orientation=landscape'
    },
    {
      icon: 'ri-table-tennis-line',
      title: 'Multi-Sport Courts',
      description: 'Versatile flooring solutions that can accommodate multiple sports with quick conversion capabilities.',
      color: 'from-indigo-500 to-blue-500',
      image: 'https://readdy.ai/api/search-image?query=Multi-purpose%20sports%20court%20with%20versatile%20flooring%2C%20multiple%20court%20markings%2C%20indoor%20sports%20facility%2C%20modern%20athletic%20center%2C%20professional%20sports%20surface%2C%20bright%20lighting%2C%20clean%20contemporary%20design&width=400&height=300&seq=multi-001&orientation=landscape'
    }
  ];

  const openImageModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  const downloadImage = async (imageUrl: string, title: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '_')}_flooring.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <>
      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">

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

      <section id ="product" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sports Flooring Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional flooring for every sport, manufactured with precision and installed by experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flooringTypes.map((flooring, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openImageModal(flooring.image, flooring.title)}>
                  <img 
                    src={flooring.image} 
                    alt={flooring.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-zoom-in-line text-white text-lg"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${flooring.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${flooring.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{flooring.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{flooring.description}</p>
                  <button className="mt-4 text-green-600 hover:text-green-700 font-medium cursor-pointer whitespace-nowrap">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">{selectedTitle}</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => downloadImage(selectedImage, selectedTitle)}
                  className="w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-200"
                  title="Download Image"
                >
                  <i className="ri-download-line text-lg"></i>
                </button>
                <button
                  onClick={closeImageModal}
                  className="w-10 h-10 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                  title="Close"
                >
                  <i className="ri-close-line text-lg"></i>
                </button>
              </div>
            </div>
            <div className="p-4">
              <img 
                src={selectedImage} 
                alt={selectedTitle}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

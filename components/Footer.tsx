
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-basketball-line text-white text-lg"></i>
              </div>
              <div>
                <span className="text-xl font-bold">Acer</span>
                <span className="text-lg text-green-400 ml-1">Sports Flooring</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading manufacturer of premium sports flooring solutions. From basketball courts to running tracks, we deliver excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <div className="space-y-2">
              <Link href="/products/basketball" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Basketball Courts
              </Link>
              <Link href="/products/badminton" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Badminton Courts
              </Link>
              <Link href="/products/football" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Football Turf
              </Link>
              <Link href="/products/squash" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Squash Courts
              </Link>
              <Link href="/products/running-track" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Running Tracks
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                About Us
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Our Projects
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact Us
              </Link>
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Acer Sports Flooring. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            {/* <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors cursor-pointer">
              Sitemap
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

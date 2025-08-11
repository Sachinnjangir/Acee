
// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4">
//         <nav className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
//               <i className="ri-basketball-line text-white text-lg"></i>
//             </div>
//             <div>
//               <span className="text-2xl font-bold text-gray-900">Acer</span>
//               <span className="text-lg text-green-600 ml-1">Sports Flooring</span>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//               Home
//             </Link>
//             <button
//               onClick={() => scrollToSection('product')}
//               className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
//             >
//               Products
//             </button>
//             <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//               Projects
//             </Link>

//             <button
//               onClick={() => scrollToSection('about')}
//               className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
//             >
//               About
//             </button>
//             {/* <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//               About
//             </Link> */}
//             <button
//               onClick={() => scrollToSection('blog')}
//               className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
//             >
//               Blog
//             </button>

//             <button
//               onClick={() => scrollToSection('contact')}
//               className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
//             >
//               Contact
//             </button>

//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <button className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer">
//               <i className="ri-phone-line mr-2"></i>
//               +91 9323993344
//             </button>
//             {/* <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
//               Get Quote
//             </button> */}
//           </div>

//           <button
//             className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <i className="ri-menu-line text-xl"></i>
//           </button>
//         </nav>

//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
//             <div className="flex flex-col space-y-3 mt-4">
//               <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//                 Home
//               </Link>
//               <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//                 Products
//               </Link>
//               <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//                 Projects
//               </Link>
//               <button
//                 onClick={() => scrollToSection('blog')}
//                 className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left"
//               >
//                 Blog
//               </button>
//               <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//                 About
//               </Link>
//               <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
//                 Contact
//               </Link>
//               <div className="flex flex-col space-y-2 pt-2">
//                 <button className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer">
//                   <i className="ri-phone-line mr-2"></i>
//                   +1 (555) 123-4567
//                 </button>
//                 <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
//                   Get Quote
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

/// changes for page by sachin


// Header.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // अब इस फंक्शन की जरूरत नहीं है क्योंकि हम सीधे पेजेस पर लिंक कर रहे हैं
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMenuOpen(false);
  // };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-basketball-line text-white text-lg"></i>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Acer</span>
              <span className="text-lg text-green-600 ml-1">Sports Flooring</span>
            </div>
          </div>

          {/* --- Desktop Navigation (बदला हुआ कोड) --- */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Products
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              +91 9323993344
            </button>
          </div>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </nav>

        {/* --- Mobile Navigation (बदला हुआ कोड) --- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 mt-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <button className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  +91 9323993344
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
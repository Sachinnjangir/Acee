
// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";

// const pacifico = Pacifico({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-pacifico',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Acer Sports Flooring - Premium Sports Court Manufacturer",
//   description: "Leading manufacturer of professional sports flooring for badminton, basketball, football, squash courts, running tracks and more. Premium quality sports surfaces.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <head>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
//         <script src="https://cdn.tailwindcss.com"></script>
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


///// app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// import './globals.css';

// const pacifico = Pacifico({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-pacifico',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Acer Sports Flooring - Premium Sports Court Manufacturer",
//   description: "Leading manufacturer of professional sports flooring for badminton, basketball, football, squash courts, running tracks and more. Premium quality sports surfaces.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <head>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
//         {/*
//           Next.js प्रोजेक्ट में Tailwind CSS को आमतौर पर globals.css के माध्यम से कॉन्फ़िगर किया जाता है।
//           इसलिए, आप इस CDN स्क्रिप्ट को हटा सकते हैं।
//           <script src="https://cdn.tailwindcss.com"></script> 
//         */}
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
//       >
//         {/* 3. कंपोनेंट्स को यहाँ जोड़ें */}
//         <Header />
//         <main>
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

import './globals.css';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acer Sports Flooring - Premium Sports Court Manufacturer",
  description: "Leading manufacturer of professional sports flooring for badminton, basketball, football, squash courts, running tracks and more. Premium quality sports surfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
        {/* ❌ 2. इस लाइन को हटा दें, क्योंकि अब हम globals.css इम्पोर्ट कर रहे हैं */}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
// "use client";

// import React, { useCallback } from "react";
// import Link from "next/link";
// import { Instagram, Linkedin, Twitter } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = useCallback(() => {
//     const scrollStep = -window.scrollY / (500 / 15);
//     const scrollInterval = setInterval(() => {
//       if (window.scrollY !== 0) {
//         window.scrollBy(0, scrollStep);
//       } else {
//         clearInterval(scrollInterval);
//       }
//     }, 15);
//   }, []);

//   return (
//     <footer className="w-full text-white py-12 relative z-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-[rgb(168,104,240)]">
//               KW Sandbox
//             </h3>
//             <p className="text-sm">
//               Waterloo&apos;s largest high school engineering community
//             </p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-[rgb(101,77,228)]">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {["Events", "Sponsors", "FAQs"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href={`#${item.toLowerCase()}`}
//                     className="hover:text-[rgb(168,104,240)] transition-colors duration-300"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-[rgb(101,77,228)]">
//               Contact
//             </h4>
//             <p className="text-sm ">Email: team@kwsandbox.org</p>
//             <p className="text-sm ">Location: Waterloo, ON, Canada</p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-[rgb(101,77,228)]">
//               Follow Us
//             </h4>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.instagram.com/highlanderengineering/"
//                 className="hover:text-[rgb(168,104,240)] transition-colors duration-300"
//               >
//                 <Instagram size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/highlander-engineering"
//                 className="hover:text-[rgb(168,104,240)] transition-colors duration-300"
//               >
//                 <Linkedin size={24} />
//               </a>
//               <a
//                 href="https://x.com/HighlanderEng"
//                 className="hover:text-[rgb(168,104,240)] transition-colors duration-300"
//               >
//                 <Twitter size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center">
//           <p className="!text-sm !text-extrabold">
//             &copy; {new Date().getFullYear()} KW Sandbox. All rights reserved.
//           </p>
//         </div>
//       </div>
//       <div className="mt-12 relative overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center opacity-10">
//           <div className="w-64 h-64 bg-[rgb(168,104,240)] rounded-full filter blur-3xl animate-pulse"></div>
//         </div>
//         <div className="relative z-10 text-center">
//           <button
//             onClick={scrollToTop}
//             className="inline-block px-6 py-2 text-sm font-medium text-white bg-[rgb(101,77,228)] rounded-full hover:bg-[rgb(168,104,240)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(101,77,228)]"
//             aria-label="Scroll to top of page"
//           >
//             Back to Top
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }

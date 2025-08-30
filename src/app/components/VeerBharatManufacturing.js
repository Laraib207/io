// 'use client';
// import React, { useState } from 'react';

// const VeerBharatManufacturing = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg sticky top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo Section */}
//             <div className="flex items-center space-x-3">
//               {/* VB Logo */}
//               <div className="relative">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
//                   <div className="text-2xl font-bold">
//                     <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">V</span>
//                     <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">B</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Company Name */}
//               <div className="text-white hidden sm:block">
//                 <h1 className="text-xl font-bold">VEER BHARAT</h1>
//                 <p className="text-sm opacity-90">वाह! मजा आ गया</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a 
//                 href="#manufacturing" 
//                 className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
//               >
//                 Manufacturing Products
//               </a>
//               <a 
//                 href="#home" 
//                 className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
//               >
//                 Home
//               </a>
//               <a 
//                 href="#contact" 
//                 className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
//               >
//                 Contact
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={toggleMobileMenu}
//               className="md:hidden text-white hover:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-2"
//               aria-label="Toggle mobile menu"
//             >
//               <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//                 <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
//                 <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
//                 <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'}`}>
//             <div className="flex flex-col space-y-2 bg-white bg-opacity-10 rounded-lg p-4 mt-2">
//               <a 
//                 href="#manufacturing" 
//                 className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-10"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Manufacturing Products
//               </a>
//               <a 
//                 href="#home" 
//                 className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-10"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </a>
//               <a 
//                 href="#contact" 
//                 className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-10"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Manufacturing Products Section - First Page */}
//       <div className="bg-white" id="manufacturing">
//         <div className="max-w-6xl mx-auto p-6">
//           {/* Company Header like Dhara */}
//           <div className="text-center mb-8">
//             <div className="flex items-center justify-center mb-6">
//               {/* VB Logo */}
//               <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center shadow-xl mr-6">
//                 <div className="text-4xl font-bold text-white">
//                   <span>V</span><span>B</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <h1 className="text-5xl font-bold gradient-text mb-2">Veer Bharat</h1>
//                 <p className="text-2xl text-red-600 font-bold">वाह! मजा आ गया</p>
//               </div>
//             </div>
//           </div>

//           {/* Blue Note Bar like Dhara */}
//           <div className="bg-blue-600 text-white p-4 mb-6 rounded-lg">
//             <p className="text-center font-medium">
//               <strong>Note:</strong> For Manufacturing & Packaging unit / Packaging unit address, read the first two characters of Batch No. & see below
//             </p>
//           </div>

//           {/* First Table - VEER BHARAT KACHI GHANI MUSTARD OIL COLD PRESSED */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
//               VEER BHARAT KACHI GHANI MUSTARD OIL COLD PRESSED
//             </h2>
            
//             <div className="overflow-x-auto border border-gray-300">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border border-gray-300 px-4 py-3 text-left font-bold">Code</th>
//                     <th className="border border-gray-300 px-4 py-3 text-left font-bold">
//                       Address with Lic. No.<br/>
//                       <span className="font-normal">Manufactured & Packed By:</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-4 text-center font-bold text-lg">MO</td>
//                     <td className="border border-gray-300 px-4 py-4">
//                       <div className="space-y-1">
//                         <div className="text-sm text-gray-600">First character of Batch No. – (MO)</div>
//                         <div className="font-bold text-gray-800">Mukesh Oil Mill Pvt. Ltd.</div>
//                         <div className="text-sm text-gray-700">E-59, Riico Industrial Area, Khairthal, Rajasthan - 301404.</div>
//                         <div className="text-sm font-medium text-blue-600">FSSAI Lic. No. 10012013000206</div>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Second Table - VEER BHARAT OIL PRODUCTS */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
//               VEER BHARAT OIL PRODUCTS
//             </h2>
            
//             <div className="overflow-x-auto border border-gray-300">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border border-gray-300 px-4 py-3 text-left font-bold">Code</th>
//                     <th className="border border-gray-300 px-4 py-3 text-left font-bold">
//                       Address with Lic. No.<br/>
//                       <span className="font-normal">Manufactured & Packed By:</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-4 text-center font-bold text-lg">RR</td>
//                     <td className="border border-gray-300 px-4 py-4">
//                       <div className="space-y-1">
//                         <div className="text-sm text-gray-600">First character of Batch No. – (RR)</div>
//                         <div className="font-bold text-gray-800">Ramchandra Ramniwas Oil Mill</div>
//                         <div className="text-sm text-gray-700">E-102, Riico Industrial Area, Khairthal, Alwar, Rajasthan - 301404.</div>
//                         <div className="text-sm font-medium text-blue-600">FSSAI Lic. No. 10012013000208</div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-4 text-center font-bold text-lg">SF</td>
//                     <td className="border border-gray-300 px-4 py-4">
//                       <div className="space-y-1">
//                         <div className="text-sm text-gray-600">First character of Batch No. – (SF)</div>
//                         <div className="font-bold text-gray-800">Spartan Food Industries</div>
//                         <div className="text-sm text-gray-700">Factory at Survey No. 155/1, Paiki Vill. Kidana, Gandhidham, Kutch-370201, Gujarat.</div>
//                         <div className="text-sm font-medium text-blue-600">FSSAI Lic. No. 10017021002751</div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-4 text-center font-bold text-lg">MO</td>
//                     <td className="border border-gray-300 px-4 py-4">
//                       <div className="space-y-1">
//                         <div className="text-sm text-gray-600">First character of Batch No. – (MO)</div>
//                         <div className="font-bold text-gray-800">Mukesh Oil Mill Pvt. Ltd.</div>
//                         <div className="text-sm text-gray-700">Gajanand Oil Mills Pvt. Ltd., Khairthal, Alwar, Rajasthan - 301404.</div>
//                         <div className="text-sm font-medium text-blue-600">FSSAI Lic. No. 12223010000205</div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-4 text-center font-bold text-lg">RR</td>
//                     <td className="border border-gray-300 px-4 py-4">
//                       <div className="space-y-1">
//                         <div className="text-sm text-gray-600">First character of Batch No. – (RR)</div>
//                         <div className="font-bold text-gray-800">Ramchandra Ramniwas Oil Mill</div>
//                         <div className="text-sm text-gray-700">E-102, Riico Industrial Area, Khairthal, Alwar, Rajasthan-301404.</div>
//                         <div className="text-sm font-medium text-blue-600">FSSAI Lic. No. 10012013000208</div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-4 text-center font-bold text-lg">SF</td>
//                     <td className="border border-gray-300 px-4 py-4">
//                       <div className="space-y-1">
//                         <div className="text-sm text-gray-600">First character of Batch No. – (SF)</div>
//                         <div className="font-bold text-gray-800">Spartan Food Industries</div>
//                         <div className="text-sm text-gray-700">Factory at Survey No. 155/1, Paiki Vill. Kidana, Gandhidham, Kutch-370201, Gujarat.</div>
//                         <div className="text-sm font-medium text-blue-600">FSSAI Lic. No. 10017021002751</div>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-white py-8">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Sri Shyam Agro Industries</h2>
//           <p className="text-gray-600">Premium Quality Oil Products</p>
//         </div>

//         {/* Contact Section */}
//         <div className="mt-12" id="contact">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="text-center mb-8">
//               <div className="flex items-center justify-center mb-6">
//                 {/* VB Logo */}
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
//                   <div className="text-3xl font-bold text-white">
//                     <span>V</span><span>B</span>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
//                   <p className="text-lg text-purple-700 font-semibold">VEER BHARAT</p>
//                   <p className="text-sm text-gray-600">वाह! मजा आ गया</p>
//                 </div>
//               </div>
//               <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-red-500 mx-auto mb-6"></div>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center p-6 bg-purple-50 rounded-lg">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold text-purple-800 mb-2">Head Office</h3>
//                 <p className="text-gray-600 text-sm">Sri Shyam Agro Industries<br/>Rajasthan, India</p>
//               </div>
              
//               <div className="text-center p-6 bg-pink-50 rounded-lg">
//                 <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold text-pink-800 mb-2">Email</h3>
//                 <p className="text-gray-600 text-sm">info@veerbharat.com<br/>contact@veerbharat.com</p>
//               </div>
              
//               <div className="text-center p-6 bg-red-50 rounded-lg">
//                 <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold text-red-800 mb-2">Phone</h3>
//                 <p className="text-gray-600 text-sm">+91 XXXX-XXXX-XX<br/>+91 XXXX-XXXX-XX</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto p-6" id="home">
//         {/* Instructions */}
//         <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
//           <p className="text-blue-800 font-medium">
//             <strong>Note:</strong> For Manufacturing & Packaging unit / Packaging unit address, read the first two characters of Batch No. & see below
//           </p>
//         </div>

//         {/* Manufacturing Units Table */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
//             <h2 className="text-2xl font-bold text-white text-center">
//               MANUFACTURING UNIT ADDRESSES
//             </h2>
//             <p className="text-white text-center opacity-90 mt-1">
//               To Identify manufacturing unit address in India, Read the first two characters of the batch number and see below:
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Serial No.</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Product Name / Brand Name</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Code</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Address with License No.</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Row 1 */}
//                 <tr className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-4 font-medium">1</td>
//                   <td className="px-4 py-4">
//                     <div className="font-medium text-purple-700">Kachi Ghani Mustard Oil</div>
//                   </td>
//                   <td className="px-4 py-4">
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-bold">(MO)</span>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div className="space-y-1">
//                       <div className="font-semibold text-gray-800">Mukesh Oil Mill Pvt. Ltd.</div>
//                       <div className="text-sm text-gray-600">E-59, Riico Industrial Area, Khairthal, Rajasthan - 301404.</div>
//                       <div className="text-xs text-blue-600 font-medium">FSSAI Lic. No. 10012013000206</div>
//                     </div>
//                   </td>
//                 </tr>

//                 {/* Row 2 */}
//                 <tr className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-4 font-medium">2</td>
//                   <td className="px-4 py-4">
//                     <div className="font-medium text-pink-700">Refined Palmolein Oil</div>
//                   </td>
//                   <td className="px-4 py-4">
//                     <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded font-bold">(RR)</span>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div className="space-y-1">
//                       <div className="font-semibold text-gray-800">Ramchandra Ramniwas Oil Mill</div>
//                       <div className="text-sm text-gray-600">E-102, Riico Industrial Area, Khairthal, Alwar, Rajasthan - 301404.</div>
//                       <div className="text-xs text-blue-600 font-medium">FSSAI Lic. No. 10012013000208</div>
//                     </div>
//                   </td>
//                 </tr>

//                 {/* Row 3 */}
//                 <tr className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-4 font-medium">3</td>
//                   <td className="px-4 py-4">
//                     <div className="font-medium text-red-700">Refined Soyabean Oil</div>
//                   </td>
//                   <td className="px-4 py-4">
//                     <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold">(SF)</span>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div className="space-y-1">
//                       <div className="font-semibold text-gray-800">Spartan Food Industries</div>
//                       <div className="text-sm text-gray-600">Factory at Survey No. 155/1, Paiki Vill. Kidana, Gandhidham, Kutch-370201, Gujarat.</div>
//                       <div className="text-xs text-blue-600 font-medium">FSSAI Lic. No. 10017021002751</div>
//                     </div>
//                   </td>
//                 </tr>

//                 {/* Row 4 */}
//                 <tr className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-4 font-medium">4</td>
//                   <td className="px-4 py-4">
//                     <div className="font-medium text-orange-700">Refined Sunflower Oil Gold</div>
//                   </td>
//                   <td className="px-4 py-4">
//                     <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold">(SF)</span>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div className="space-y-1">
//                       <div className="font-semibold text-gray-800">Spartan Food Industries</div>
//                       <div className="text-sm text-gray-600">Factory at Survey No. 155/1, Paiki Vill. Kidana, Gandhidham, Kutch-370201, Gujarat.</div>
//                       <div className="text-xs text-blue-600 font-medium">FSSAI Lic. No. 10017021002751</div>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Additional Manufacturing Units */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="bg-gradient-to-r from-pink-600 to-red-600 px-6 py-3">
//             <h3 className="text-xl font-bold text-white text-center">
//               ADDITIONAL MANUFACTURING PARTNERS
//             </h3>
//           </div>
          
//           <div className="p-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
//                 <h4 className="font-bold text-purple-800 mb-2">Gajanand Oil Mills Pvt. Ltd.</h4>
//                 <p className="text-sm text-gray-700">Khairthal, Alwar, Rajasthan - 301404.</p>
//                 <p className="text-xs text-blue-600 font-medium mt-1">FSSAI Lic. No. 12223010000205</p>
//               </div>
              
//               <div className="p-4 border-l-4 border-pink-500 bg-pink-50 rounded-r-lg">
//                 <h4 className="font-bold text-pink-800 mb-2">Mukesh Oil Mill Pvt. Ltd.</h4>
//                 <p className="text-sm text-gray-700">E-59, Riico Industrial Area, Khairthal, Rajasthan - 301404.</p>
//                 <p className="text-xs text-blue-600 font-medium mt-1">FSSAI Lic. No. 10012013000206</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-6 mt-12">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <div className="flex items-center justify-center space-x-2 mb-2">
//             <div className="text-2xl font-bold">
//               <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">V</span>
//               <span className="bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent">B</span>
//             </div>
//             <span className="text-lg font-semibold">VEER BHARAT</span>
//           </div>
//           <p className="text-sm opacity-90">Sri Shyam Agro Industries - Quality Oil Products</p>
//           <p className="text-xs opacity-80 mt-1">© 2025 Veer Bharat. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default VeerBharatManufacturing;

'use client';
import React, { useState, useEffect } from 'react';

const VeerBharatManufacturing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Circular Logo - Bigger for TM visibility */}
      <div className="fixed top-2 left-4 z-[60]">
        <div className="w-36 h-36 bg-white rounded-full border-4 border-blue-300 shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <img
            src="/veer-bharat-logo.jpg"
            alt="Veer Bharat Logo"
            className="w-32 h-32 rounded-full object-contain"
          />
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-lg border-b-2 border-blue-200'
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Brand Name - moved right */}
            <div className="relative ml-40">
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 bg-clip-text text-transparent tracking-wide">
                VEER BHARAT
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { href: '#home', label: 'Home' },
                { href: '#manufacturing', label: 'Manufacturing Products' },
                { href: '#contact', label: 'Contact Us' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-6 py-3 text-blue-800 hover:text-blue-900 hover:bg-blue-100 rounded-lg font-medium transition-all duration-300 border border-transparent hover:border-blue-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-blue-800 hover:bg-blue-100 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
              isMobileMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 mt-4 space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#manufacturing', label: 'Manufacturing Products' },
                { href: '#contact', label: 'Contact Us' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-blue-800 hover:text-blue-900 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>

      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-b-2 border-blue-100"
        id="home"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          {/* Sri Shyam Agro Industries Title */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-2">
              SRI SHYAM AGRO INDUSTRIES
            </h1>
          </div>

          {/* <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">
            VEER BHARAT
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-purple-700 font-bold mb-6">
            वाह! मजा आ गया
          </p> */}

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-base sm:text-lg md:text-xl text-blue-800 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
           
           
             Manufacturing Unit Addresses To Identify manufacturing unit address in India, Read the first twocharacters of the batch number and see below:
            
          </p>

          {/* Manufacturing Table */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-200"
            id="manufacturing"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-100 to-purple-100">
                    <th className="border-2 border-blue-300 px-2 sm:px-4 py-2 sm:py-4">
                      Serial No.
                    </th>
                    <th className="border-2 border-blue-300 px-2 sm:px-4 py-2 sm:py-4">
                      Product Name/Brand Name
                    </th>
                    <th className="border-2 border-blue-300 px-2 sm:px-4 py-2 sm:py-4">
                      Code
                    </th>
                    <th className="border-2 border-blue-300 px-2 sm:px-4 py-2 sm:py-4">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center font-bold align-top">
                      1
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Kachi Ghani Mustard Oil</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center align-top">
                      <strong>(MO)</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Mukesh Oil Mill Pvt. Ltd.</strong>
                      <br />
                      E-59, Riico Industrial Area,
                      <br />
                      Khairthal, Rajasthan - 301404.
                      <br />
                      Fssai Lic. No. 10012013000206
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center font-bold align-top">
                      2
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Refined Palmolein Oil</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center align-top">
                      <strong>(RR)</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Ramchandra Ramniwas Oil Mill</strong>
                      <br />
                      E- 102, Riico Industrial Area,
                      <br />
                      Khairthal, Alwar, Rajasthan - 301404.
                      <br />
                      Fssai Lic. No. 10012013000208
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center font-bold align-top">
                      3
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Refined Soyabean Oil</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center align-top">
                      <strong>(SF)</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Spartan Food Industries</strong>
                      <br />
                      Factory at Survey No. 155/1, Paiki
                      <br />
                      Vill. Kidana, Gandhidham,
                      <br />
                      Kutch-370201, Gujarat.
                      <br />
                      Fssai Lic. No. 10017021002751
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center font-bold align-top">
                      4
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Refined Sunflower Oil Gold</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 text-center align-top">
                      <strong>(MO)</strong>
                    </td>
                    <td className="border-2 border-blue-200 px-2 sm:px-4 py-4 align-top">
                      <strong>Gajanand Oil Mills Pvt. Ltd.</strong>
                      <br />
                      Khairthal, Alwar, Rajasthan - 301404.
                      <br />
                      Fssai Lic. No. 12223010000205
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg border-2 border-blue-200 flex items-center justify-center">
                <img
                  src="/veer-bharat-logo.jpg"
                  alt="Veer Bharat Logo"
                  className="w-28 h-28 rounded-full object-contain"
                />
              </div>

              <div className="ml-6 text-left">
                <h2 className="text-4xl font-bold text-blue-900 mb-2">
                  Contact Us
                </h2>
                <p className="text-2xl text-blue-700 font-semibold">
                  VEER BHARAT
                </p>
                <p className="text-lg text-blue-600">वाह! मजा आ गया</p>
              </div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏢',
                title: 'Head Office',
                content:
                  'Sri Shyam Agro Industries\n802, 8th Floor, Tower-C, Ithum\nPlot No-A-40, Rajat Vihar\nSector 62, Noida, Uttar Pradesh 201020, India',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200',
                iconBg: 'bg-blue-500',
              },
              {
                icon: '📧',
                title: 'Email',
                content:
                  'info@veer-bharat.com\nsale@veer-bharat.com',
                bgColor: 'bg-purple-50',
                borderColor: 'border-purple-200',
                iconBg: 'bg-purple-500',
              },
              {
                icon: '📞',
                title: 'Phone',
                content: '+91 0120-4550138\n+91 9871769051',
                bgColor: 'bg-pink-50',
                borderColor: 'border-pink-200',
                iconBg: 'bg-pink-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} p-8 rounded-xl shadow-lg border-2 ${item.borderColor} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 ${item.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-white`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-blue-800 leading-relaxed whitespace-pre-line text-center">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeerBharatManufacturing;

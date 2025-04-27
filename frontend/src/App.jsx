// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import 'animate.css';

// // const App = () => {
// //   return (
// //     <div className="bg-gradient-to-tr from-gray-900 to-black min-h-screen text-white font-sans">
// //       {/* Navbar */}
// //       <nav className="backdrop-blur-md bg-white/5 fixed w-full top-0 z-50 shadow-md border-b border-white/10">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// //           <div className="text-3xl font-extrabold text-teal-400 tracking-tight">MealMaster</div>
// //           <div className="space-x-6 text-md font-medium">
// //             <Link to="/signup" className="text-gray-300 hover:text-teal-400 transition">Sign Up</Link>
// //             <Link to="/login" className="text-gray-300 hover:text-teal-400 transition">Log In</Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="pt-32 pb-24 text-center relative overflow-hidden">
// //         <div className="max-w-3xl mx-auto px-6">
// //           <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeInDown">Fuel Your Life, One Meal at a Time</h1>
// //           <p className="text-gray-400 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
// //             Smart meal planning, AI-picked recipes, and nutrition magic—built just for *you*.
// //           </p>
// //           <Link
// //             to="/signup"
// //             className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/50 animate__animated animate__zoomIn animate__delay-2s"
// //           >
// //             Get Started
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Feature Cards */}
// //       <section className="py-20 px-6 bg-black/40 backdrop-blur-sm">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h2 className="text-3xl font-semibold mb-12 text-white">✨ What You'll Love</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
// //             {[
// //               {
// //                 title: 'Smart Meal Planner',
// //                 desc: 'Plan your week with AI assistance and get meals tailored to your goals.',
// //                 emoji: '📅',
// //               },
// //               {
// //                 title: 'Recipe Vault',
// //                 desc: 'Access a delicious library of healthy, quick recipes anytime.',
// //                 emoji: '🍲',
// //               },
// //               {
// //                 title: 'Nutrition Tracking',
// //                 desc: 'Track your macros, calories, and feel in control of your health.',
// //                 emoji: '📊',
// //               },
// //             ].map(({ title, desc, emoji }, i) => (
// //               <div
// //                 key={i}
// //                 className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 backdrop-blur-md"
// //               >
// //                 <div className="text-4xl mb-4">{emoji}</div>
// //                 <h3 className="text-xl font-semibold mb-2 text-teal-300">{title}</h3>
// //                 <p className="text-gray-300">{desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-20 text-center bg-gradient-to-r from-teal-800 via-black to-indigo-900">
// //         <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Meal Game?</h2>
// //         <p className="text-gray-300 mb-8">Join now and start eating smarter, living better.</p>
// //         <Link
// //           to="/signup"
// //           className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-10 rounded-full text-xl transition-all shadow-lg"
// //         >
// //           Create Your Account
// //         </Link>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-8 border-t border-white/10 bg-black/70 text-center text-gray-500 text-sm">
// //         &copy; 2025 MealMaster · <Link to="/about" className="text-teal-400">About</Link> · <Link to="/contact" className="text-teal-400">Contact</Link>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default App;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'animate.css';

// const App = () => {
//   return (
//     <div className="bg-gradient-to-br from-white via-blue-50 to-pink-50 min-h-screen text-gray-800 font-sans">
//       {/* Navbar */}
//       <nav className="backdrop-blur-sm bg-white/70 fixed w-full top-0 z-50 shadow-md border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-3xl font-extrabold text-pink-500 tracking-tight">MealMaster</div>
//           <div className="space-x-6 text-md font-medium">
//             <Link to="/signup" className="text-gray-700 hover:text-pink-500 transition">Sign Up</Link>
//             <Link to="/login" className="text-gray-700 hover:text-pink-500 transition">Log In</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 text-center relative overflow-hidden">
//         <div className="max-w-3xl mx-auto px-6">
//           <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeInDown text-blue-800">Fuel Your Life, One Meal at a Time</h1>
//           <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
//             Smart meal planning, AI-picked recipes, and nutrition magic—built just for you.
//           </p>
//           <Link
//             to="/signup"
//             className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-pink-200 animate__animated animate__zoomIn animate__delay-2s"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* Feature Cards */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-12 text-blue-800">✨ What You'll Love</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: 'Smart Meal Planner',
//                 desc: 'Plan your week with AI assistance and get meals tailored to your goals.',
//                 emoji: '📅',
//               },
//               {
//                 title: 'Recipe Vault',
//                 desc: 'Access a delicious library of healthy, quick recipes anytime.',
//                 emoji: '🍲',
//               },
//               {
//                 title: 'Nutrition Tracking',
//                 desc: 'Track your macros, calories, and feel in control of your health.',
//                 emoji: '📊',
//               },
//             ].map(({ title, desc, emoji }, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="text-4xl mb-4">{emoji}</div>
//                 <h3 className="text-xl font-semibold mb-2 text-pink-500">{title}</h3>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-pink-100 via-white to-blue-100">
//         <h2 className="text-4xl font-bold mb-6 text-blue-900">Ready to Transform Your Meal Game?</h2>
//         <p className="text-gray-600 mb-8">Join now and start eating smarter, living better.</p>
//         <Link
//           to="/signup"
//           className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-full text-xl transition-all shadow-lg"
//         >
//           Create Your Account
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
//         &copy; 2025 MealMaster · <Link to="/about" className="text-pink-400">About</Link> · <Link to="/contact" className="text-pink-400">Contact</Link>
//       </footer>
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'animate.css';

// const App = () => {
//   return (
//     <div className="bg-gradient-to-br from-white via-blue-50 to-pink-50 min-h-screen text-gray-800 font-sans overflow-x-hidden">
//       {/* Navbar - Fixed Alignment */}
//       <nav className="backdrop-blur-sm bg-white/70 fixed w-full top-0 z-50 shadow-md border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="text-2xl sm:text-3xl font-extrabold text-pink-500 tracking-tight flex items-center">
//               <span className="mr-2">🍽️</span>MealMaster
//             </div>
//           </div>
//           <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-md font-medium">
//             <Link to="/features" className="text-gray-700 hover:text-pink-500 transition">Features</Link>
//             <Link to="/login" className="bg-pink-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-pink-400 transition text-sm sm:text-md">
//               Log In
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-28 pb-20 text-center relative overflow-hidden">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
//             Take Control of Your Meals
//           </h1>
//           <p className="text-gray-600 text-lg sm:text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s max-w-2xl mx-auto">
//             Create custom meal plans, track nutrition, and manage groceries—all in one place.
//           </p>
//           <div className="animate__animated animate__zoomIn animate__delay-2s">
//             <Link
//               to="/signup"
//               className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-400 hover:to-orange-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
//             >
//               Get Started
//             </Link>
//           </div>
//           <div className="mt-16 relative rounded-2xl overflow-hidden shadow-xl border-8 border-white animate__animated animate__fadeIn animate__delay-3s max-w-3xl mx-auto">
//             <div className="aspect-video bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center">
//               <div className="text-center p-6">
//                 <div className="text-6xl mb-4">📱</div>
//                 <p className="text-gray-600">Your meal planning dashboard</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Features */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Your Meal Planning Toolkit</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Everything you need to organize your meals and nutrition
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {[
//               {
//                 title: 'Custom Meal Plans',
//                 desc: 'Create and organize your weekly meal plans with your own recipes.',
//                 emoji: '📅',
//                 color: 'bg-blue-100 text-blue-600'
//               },
//               {
//                 title: 'Recipe Creator',
//                 desc: 'Build your personal recipe collection with ingredients and instructions.',
//                 emoji: '📝',
//                 color: 'bg-pink-100 text-pink-600'
//               },
//               {
//                 title: 'Nutrition Tracking',
//                 desc: 'Log your meals and track macros and nutrients throughout the day.',
//                 emoji: '📊',
//                 color: 'bg-purple-100 text-purple-600'
//               },
//               {
//                 title: 'Smart Grocery Lists',
//                 desc: 'Automatically generated shopping lists from your meal plans.',
//                 emoji: '🛒',
//                 color: 'bg-green-100 text-green-600'
//               }
//             ].map(({ title, desc, emoji, color }, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-2xl mb-6`}>
//                   {emoji}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{title}</h3>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works - Simplified */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-pink-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Simple Meal Planning</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             {[
//               {
//                 step: '1',
//                 title: 'Create Recipes',
//                 desc: 'Add your favorite recipes with ingredients and nutrition info',
//                 emoji: '📝'
//               },
//               {
//                 step: '2',
//                 title: 'Plan Your Meals',
//                 desc: 'Drag and drop recipes to create your weekly meal plan',
//                 emoji: '🗓️'
//               },
//               {
//                 step: '3',
//                 title: 'Shop & Cook',
//                 desc: 'Generate grocery lists and cook with confidence',
//                 emoji: '🛒'
//               }
//             ].map(({ step, title, desc, emoji }, i) => (
//               <div key={i} className="bg-white p-6 rounded-xl shadow-md">
//                 <div className="text-5xl mb-4">{emoji}</div>
//                 <div className="text-2xl font-bold text-pink-500 mb-2">{step}</div>
//                 <h3 className="text-xl font-bold mb-2">{title}</h3>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-pink-500 text-white">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to organize your meals?</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Start planning, tracking, and shopping smarter today
//           </p>
//           <Link
//             to="/signup"
//             className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Create Your Account
//           </Link>
//         </div>
//       </section>

//       {/* Simple Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="text-2xl font-extrabold text-white mb-4 flex items-center justify-center">
//             <span className="mr-2">🍽️</span>MealMaster
//           </div>
//           <div className="flex justify-center space-x-6 mb-6">
//             <Link to="/about" className="hover:text-white transition">About</Link>
//             <Link to="/contact" className="hover:text-white transition">Contact</Link>
//             <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
//             <Link to="/terms" className="hover:text-white transition">Terms</Link>
//           </div>
//           <p>&copy; {new Date().getFullYear()} MealMaster. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'animate.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   useEffect(() => {
//     // GSAP animations
//     gsap.from(".logo", { 
//       duration: 1.5, 
//       y: -50, 
//       opacity: 0, 
//       ease: "elastic.out(1, 0.5)" 
//     });
    
//     gsap.from(".nav-item", { 
//       duration: 1, 
//       x: 50, 
//       opacity: 0, 
//       stagger: 0.2,
//       delay: 0.5
//     });

//     gsap.utils.toArray(".feature-card").forEach((card, i) => {
//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 80%",
//           toggleActions: "play none none none"
//         },
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         delay: i * 0.1
//       });
//     });

//     gsap.from(".phone-mockup", {
//       scrollTrigger: {
//         trigger: ".phone-mockup",
//         start: "top 80%"
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.2,
//       ease: "back.out(1.7)"
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans overflow-x-hidden">
//       {/* Floating Particles Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-teal-300 to-blue-400 opacity-10"
//             style={{
//               width: `${Math.random() * 10 + 5}px`,
//               height: `${Math.random() * 10 + 5}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Navbar - Premium Design */}
//       <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link to="/" className="logo flex items-center">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-2 shadow-md">
//               MM
//             </div>
//             <span className="text-2xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
//               MealMaster
//             </span>
//           </Link>
//           <div className="flex items-center space-x-8">
//             <Link to="/features" className="nav-item text-gray-700 hover:text-teal-600 transition font-medium text-sm uppercase tracking-wider">
//               Features
//             </Link>
//             <Link to="/login" className="nav-item bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-medium px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg">
//               Log In
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Premium */}
//       <section className="pt-32 pb-24 relative overflow-hidden">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-16 lg:mb-0">
//             <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold mb-6 uppercase tracking-wider shadow-sm">
//               Version 2.0 Released
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
//                 Culinary Intelligence
//               </span><br />
//               <span className="text-gray-800">For Your Kitchen</span>
//             </h1>
//             <p className="text-lg text-gray-600 mb-8 max-w-lg">
//               The most advanced meal planning platform that learns your tastes, adapts to your lifestyle, and transforms how you eat.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/signup"
//                 className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 Start Free Trial
//               </Link>
//               <Link
//                 to="/demo"
//                 className="border-2 border-gray-300 hover:border-teal-400 text-gray-700 hover:text-teal-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
//               >
//                 Watch Demo
//               </Link>
//             </div>
//             <div className="mt-8 flex items-center space-x-4">
//               <div className="flex -space-x-2">
//                 {[...Array(4)].map((_, i) => (
//                   <img 
//                     key={i}
//                     src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`}
//                     alt="User"
//                     className="w-10 h-10 rounded-full border-2 border-white"
//                   />
//                 ))}
//               </div>
//               <div className="text-sm text-gray-500">
//                 <span className="font-medium text-gray-700">5,000+</span> chefs already transforming their kitchens
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/2 relative phone-mockup">
//             {/* 3D Phone Mockup */}
//             <div className="relative mx-auto" style={{ perspective: '2000px' }}>
//               <div className="relative transform-style-preserve-3d transform transition-all duration-1000 hover:rotate-y-15" style={{ transformStyle: 'preserve-3d' }}>
//                 <div className="w-80 h-auto mx-auto">
//                   {/* Phone Frame */}
//                   <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-12 border-gray-900 bg-gray-900">
//                     {/* Screen Content */}
//                     <div className="aspect-[9/19] bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
//                       {/* App Header */}
//                       <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-4 text-center font-bold">
//                         My Meal Plan
//                       </div>
                      
//                       {/* Sample Content */}
//                       <div className="p-4 flex-1">
//                         <div className="mb-4">
//                           <div className="text-xs text-teal-600 font-semibold mb-1">TODAY'S PLAN</div>
//                           <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                             <div className="flex justify-between items-start">
//                               <div>
//                                 <div className="font-bold text-gray-800">Avocado Toast</div>
//                                 <div className="text-xs text-gray-500 mt-1">420 kcal | 12g protein</div>
//                               </div>
//                               <div className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">8:00 AM</div>
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                           <div className="flex justify-between items-center mb-3">
//                             <span className="font-bold text-gray-800">Grocery List</span>
//                             <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">3 items</span>
//                           </div>
//                           <div className="space-y-2">
//                             <div className="flex items-center">
//                               <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3 flex items-center justify-center">
//                                 <div className="w-3 h-3 bg-teal-500 rounded-sm opacity-0 transition-opacity"></div>
//                               </div>
//                               <span className="text-sm">Whole grain bread</span>
//                             </div>
//                             <div className="flex items-center">
//                               <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3 flex items-center justify-center">
//                                 <div className="w-3 h-3 bg-teal-500 rounded-sm opacity-0 transition-opacity"></div>
//                               </div>
//                               <span className="text-sm">Avocado</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Phone Shadow */}
//                   <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-6 bg-gray-400 rounded-full filter blur-xl opacity-20"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Premium */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="absolute -top-1/3 -right-1/4 w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-20 filter blur-3xl"></div>
//         <div className="max-w-7xl mx-auto px-6 relative">
//           <div className="text-center mb-20">
//             <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold mb-4 uppercase tracking-wider shadow-sm">
//               Powerful Features
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               Kitchen Intelligence <br />
//               <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
//                 At Your Fingertips
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Advanced tools designed to make meal planning effortless and enjoyable
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'AI-Powered Planning',
//                 desc: 'Our algorithm learns your preferences to suggest perfect meal combinations',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                   </svg>
//                 ),
//                 color: 'from-teal-400 to-blue-500'
//               },
//               {
//                 title: 'Smart Grocery System',
//                 desc: 'Automatically organizes your shopping list by aisle and store section',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                   </svg>
//                 ),
//                 color: 'from-blue-400 to-indigo-500'
//               },
//               {
//                 title: 'Nutrition Dashboard',
//                 desc: 'Comprehensive tracking of macros, micros, and nutritional balance',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 ),
//                 color: 'from-indigo-400 to-purple-500'
//               },
//               {
//                 title: 'Recipe Intelligence',
//                 desc: 'Smart substitutions and scaling for any number of servings',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                   </svg>
//                 ),
//                 color: 'from-purple-400 to-pink-500'
//               },
//               {
//                 title: 'Meal Prep Mode',
//                 desc: 'Optimized cooking schedules and storage recommendations',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ),
//                 color: 'from-pink-400 to-red-500'
//               },
//               {
//                 title: 'Family Sync',
//                 desc: 'Coordinate multiple dietary needs and preferences in one plan',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 ),
//                 color: 'from-red-400 to-orange-500'
//               }
//             ].map(({ title, desc, icon, color }, i) => (
//               <div
//                 key={i}
//                 className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-500"
//               >
//                 <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-white mb-6 shadow-md`}>
//                   {icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works - Premium */}
//       <section className="py-24 bg-gray-50 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold mb-4 uppercase tracking-wider shadow-sm">
//               Simple Process
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               Transform Your Kitchen <br />
//               <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
//                 In 3 Easy Steps
//               </span>
//             </h2>
//           </div>
//           <div className="relative">
//             {/* Timeline */}
//             <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-teal-300 to-blue-400 -ml-0.5"></div>
            
//             {[
//               {
//                 step: '1',
//                 title: 'Set Your Preferences',
//                 desc: 'Tell us about your dietary needs, cooking skills, and food preferences',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 )
//               },
//               {
//                 step: '2',
//                 title: 'Generate Your Plan',
//                 desc: 'Our system creates a perfect weekly meal plan based on your inputs',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                 ),
//                 direction: 'lg:flex-row-reverse'
//               },
//               {
//                 step: '3',
//                 title: 'Cook With Confidence',
//                 desc: 'Follow guided recipes, track nutrition, and enjoy stress-free meals',
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                 )
//               }
//             ].map(({ step, title, desc, icon, direction }, i) => (
//               <div key={i} className={`flex flex-col lg:flex-row ${direction || ''} items-center mb-24 last:mb-0`}>
//                 <div className="lg:w-1/2 lg:px-10 mb-10 lg:mb-0 relative">
//                   <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative z-10">
//                     <div className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
//                       {step}
//                     </div>
//                     <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-6">{title}</h3>
//                     <p className="text-gray-600 mb-6">{desc}</p>
//                     <div className="text-teal-500">
//                       {icon}
//                     </div>
//                   </div>
//                   <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border-2 border-teal-300"></div>
//                 </div>
//                 <div className="lg:w-1/2 lg:px-10">
//                   <div className="bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
//                     <div className="text-center p-6">
//                       <div className="text-6xl mb-4 text-gray-400">Step {step}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials - Premium */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 rounded-full opacity-30 filter blur-3xl"></div>
//         <div className="max-w-7xl mx-auto px-6 relative">
//           <div className="text-center mb-20">
//             <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold mb-4 uppercase tracking-wider shadow-sm">
//               Loved By Users
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               What Our <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">Community</span> Says
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Join thousands of home chefs who transformed their cooking experience
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "MealMaster completely changed how I approach cooking. I save hours each week and eat healthier than ever before.",
//                 name: "Sarah Johnson",
//                 role: "Busy Mom & Food Blogger",
//                 avatar: "https://randomuser.me/api/portraits/women/43.jpg",
//                 rating: 5
//               },
//               {
//                 quote: "As a fitness coach, I recommend MealMaster to all my clients. The nutrition tracking is incredibly detailed.",
//                 name: "Michael Chen",
//                 role: "Personal Trainer",
//                 avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//                 rating: 5
//               },
//               {
//                 quote: "The recipe suggestions are restaurant-quality but easy enough for a beginner like me. My cooking improved dramatically!",
//                 name: "Priya Patel",
//                 role: "College Student",
//                 avatar: "https://randomuser.me/api/portraits/women/63.jpg",
//                 rating: 4
//               }
//             ].map((testimonial, i) => (
//               <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
//                   <div>
//                     <p className="font-bold text-gray-800">{testimonial.name}</p>
//                     <p className="text-gray-500 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA - Premium */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-95"></div>
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay"></div>
//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//             Ready to Revolutionize <br />
//             Your Kitchen Experience?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Join thousands of home chefs who discovered the joy of stress-free meal planning
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/signup"
//               className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Start Your Free Trial
//             </Link>
//             <Link
//               to="/demo"
//               className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300"
//             >
//               Watch Product Tour
//             </Link>
//           </div>
//           <p className="mt-6 text-sm text-white/80">No credit card required · Cancel anytime</p>
//         </div>
//       </section>

//       {/* Footer - Premium */}
//       <footer className="bg-gray-900 text-gray-300 py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md">
//                   MM
//                 </div>
//                 <span className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
//                   MealMaster
//                 </span>
//               </div>
//               <p className="mb-6">The most advanced meal planning platform for home chefs and health-conscious families.</p>
//               <div className="flex space-x-4">
//                 {['twitter', 'facebook', 'instagram', 'youtube'].map((social, i) => (
//                   <a key={i} href="#" className="text-gray-400 hover:text-white transition">
//                     <span className="sr-only">{social}</span>
//                     <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-teal-500 to-blue-600">
//                       <span className="text-lg">{social === 'twitter' ? '𝕏' : social[0].toUpperCase()}</span>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-lg mb-6">Product</h3>
//               <ul className="space-y-3">
//                 {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((item, i) => (
//                   <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-lg mb-6">Company</h3>
//               <ul className="space-y-3">
//                 {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item, i) => (
//                   <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
//               <ul className="space-y-3">
//                 {['Help Center', 'Community', 'Webinars', 'Cookbook', 'Partners'].map((item, i) => (
//                   <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p>&copy; {new Date().getFullYear()} MealMaster. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="hover:text-white transition">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition">Terms of Service</a>
//               <a href="#" className="hover:text-white transition">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Homepage from '../pages/Homepage';
import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';
import Layout from '../pages/Layout';
import Recipe from '../pages/Recipe';
import MealPlanner from '../pages/Mealplanner';
import NutritionLog from '../pages/Nutritionlog';

const App = () =>{
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipe />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/nutrition-logger" element={<NutritionLog />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
        {/* Other routes */}
      </Routes>
    </Router>
  );
}


export default App
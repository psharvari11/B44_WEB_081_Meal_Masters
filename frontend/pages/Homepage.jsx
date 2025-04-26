import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  useEffect(() => {
    // Simple animations
    gsap.from(".logo", { duration: 1, y: -20, opacity: 0 });
    gsap.from(".nav-item", { duration: 1, x: 20, opacity: 0, stagger: 0.2, delay: 0.5 });
    gsap.utils.toArray(".feature-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans overflow-x-hidden">
      {/* Navbar - Simple and Clean */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="logo flex items-center">
          <span className="mr-2">🍽️</span>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
           MealMaster
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/login" className=" nav-item text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
              Log In
            </Link>
            <Link to="/signup" className="nav-item text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Organize Your Meals
              </span><br />
              <span className="text-gray-800">Without The Stress</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A simple, powerful tool to plan your meals, track nutrition, and manage groceries - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/features"
                className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Simple App Mockup */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-800">
                {/* Screen Content */}
                <div className="aspect-[9/16] bg-gray-50 flex flex-col">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-3 text-center font-bold">
                    My Meal Plan
                  </div>
                  
                  {/* Sample Content */}
                  <div className="p-4 flex-1">
                    <div className="mb-4">
                      <div className="text-xs text-blue-600 font-semibold mb-1">TODAY'S MEALS</div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium text-gray-800">Avocado Toast</div>
                            <div className="text-xs text-gray-500 mt-1">Breakfast • 420 kcal</div>
                          </div>
                          <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">8:00 AM</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">Grocery List</span>
                        <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">3 items</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                          <span>Whole grain bread</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                          <span>Avocado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Phone Shadow */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-6 bg-gray-400 rounded-full filter blur-xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features - Only What You Have */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need for <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Better Meal Planning
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical tools to simplify your kitchen routine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Meal Planner',
                desc: 'Create and organize your weekly meal plans with ease',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                color: 'from-blue-400 to-blue-500'
              },
              {
                title: 'Recipe Manager',
                desc: 'Store and organize all your favorite recipes in one place',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                color: 'from-teal-400 to-teal-500'
              },
              {
                title: 'Nutrition Log',
                desc: 'Track your daily nutrition and macros for each meal',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'from-blue-500 to-indigo-500'
              },
              {
                title: 'Grocery Lists',
                desc: 'Automatically generate shopping lists from your meal plans',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                color: 'from-teal-500 to-green-500'
              }
            ].map(({ title, desc, icon, color }, i) => (
              <div
                key={i}
                className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-white mb-6 shadow-md`}>
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simple Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Simple <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Get started in just a few minutes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Add Your Recipes',
                desc: 'Create your personal recipe collection',
                icon: '📝'
              },
              {
                step: '2',
                title: 'Plan Your Meals',
                desc: 'Drag and drop recipes to your weekly plan',
                icon: '🗓️'
              },
              {
                step: '3',
                title: 'Shop & Cook',
                desc: 'Generate grocery lists and start cooking',
                icon: '🛒'
              }
            ].map(({ step, title, desc, icon }, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{icon}</div>
                <div className="text-2xl font-bold text-blue-500 mb-2">{step}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your meal planning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start organizing your kitchen routine today
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-extrabold text-white mb-4 flex items-center justify-center">
            <span className="mr-2">🍽️</span>MealMaster
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} MealMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage ;
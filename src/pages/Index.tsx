
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TicTacToe from '@/components/TicTacToe';
import ChatBot from '@/components/ChatBot';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Interests from '@/components/Interests';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.background = 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #E5E7EB 100%)';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Background with improved mobile support */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-500 ${darkMode 
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'
        }`}>
          {/* Subtle gradient orbs without animations */}
          <div className={`absolute top-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full blur-3xl opacity-5 ${
            darkMode ? 'bg-gradient-to-r from-gray-600 to-gray-700' : 'bg-gradient-to-r from-gray-300 to-gray-400'
          }`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-24 md:w-48 h-24 md:h-48 rounded-full blur-3xl opacity-5 ${
            darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-400 to-gray-500'
          }`}></div>
        </div>
      </div>

      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content with better mobile alignment */}
      <div className="relative z-10 w-full">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />

        {/* Education Timeline with improved mobile layout */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Education
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className={`border-l-4 ${
                darkMode ? 'border-blue-400' : 'border-gray-700'
              } pl-6 md:pl-8 relative`}>
                <div className={`absolute -left-2 md:-left-3 top-0 w-4 h-4 md:w-6 md:h-6 rounded-full ${
                  darkMode ? 'bg-blue-400' : 'bg-gray-700'
                }`}></div>
                <h3 className={`text-lg md:text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Bachelor of Technology in Computer Science Engineering
                </h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-gray-700'} font-medium text-sm md:text-base`}>
                  SVKM NMIMS Shirpur
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm`}>
                  2022 – 2026 | CGPA: 3.6/4
                </p>
              </div>
              
              <div className={`border-l-4 ${
                darkMode ? 'border-cyan-400' : 'border-gray-600'
              } pl-6 md:pl-8 relative`}>
                <div className={`absolute -left-2 md:-left-3 top-0 w-4 h-4 md:w-6 md:h-6 rounded-full ${
                  darkMode ? 'bg-cyan-400' : 'bg-gray-600'
                }`}></div>
                <h3 className={`text-lg md:text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Class XII - PCM
                </h3>
                <p className={`${darkMode ? 'text-cyan-400' : 'text-gray-600'} font-medium text-sm md:text-base`}>
                  Sanskar Vidya Bhavan, Bharuch
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm`}>
                  2021 – 2022 | Percentage: 91.2%
                </p>
              </div>
              
              <div className={`border-l-4 ${
                darkMode ? 'border-blue-500' : 'border-black'
              } pl-6 md:pl-8 relative`}>
                <div className={`absolute -left-2 md:-left-3 top-0 w-4 h-4 md:w-6 md:h-6 rounded-full ${
                  darkMode ? 'bg-blue-500' : 'bg-black'
                }`}></div>
                <h3 className={`text-lg md:text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Class X - SSC
                </h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-black'} font-medium text-sm md:text-base`}>
                  Sanskar Vidya Bhavan, Bharuch
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm`}>
                  2019 – 2020 | Percentage: 95.6%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section with improved mobile layout */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Experience
            </h2>
            <Card className={`${
              darkMode 
                ? 'bg-gray-900/50 border-gray-700 backdrop-blur-sm' 
                : 'bg-white/70 border-gray-200 backdrop-blur-sm'
            } transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <CardTitle className={`text-lg md:text-xl ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      ML Intern (On-Site)
                    </CardTitle>
                    <CardDescription className={`text-base md:text-lg font-medium ${
                      darkMode ? 'text-blue-400' : 'text-gray-700'
                    }`}>
                      Aivid Techvision
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className={`${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  } text-xs md:text-sm`}>
                    May 2025 – July 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Worked on surveillance and monitoring products using Python and OpenCV</li>
                  <li>• Implemented computer vision algorithms for real-time video analysis and object detection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Interests darkMode={darkMode} />
        <Achievements darkMode={darkMode} />

        {/* Certifications Section with improved mobile layout */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Certifications
            </h2>
            <Card className={`${
              darkMode 
                ? 'bg-gray-900/50 border-gray-700 backdrop-blur-sm' 
                : 'bg-white/70 border-gray-200 backdrop-blur-sm'
            } transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <CardTitle className={`text-lg md:text-xl ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      Tata Group Data Analytics Job Simulation
                    </CardTitle>
                    <CardDescription className={`text-base md:text-lg font-medium ${
                      darkMode ? 'text-blue-400' : 'text-gray-700'
                    }`}>
                      Forage
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className={`${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  } text-xs md:text-sm`}>
                    May 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Conducted EDA using GenAI tools to assess data quality and risk indicators</li>
                  <li>• Designed AI-driven collections strategy with agentic AI and automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Games Section with improved mobile layout */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Fun Zone
            </h2>
            <p className={`text-base md:text-lg mb-6 md:mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Take a break and enjoy a quick game!
            </p>
            <Button
              onClick={() => setShowGame(!showGame)}
              className={`mb-6 md:mb-8 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' 
                  : 'bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900'
              }`}
            >
              {showGame ? 'Hide Game' : 'Play Tic Tac Toe'}
            </Button>
            {showGame && (
              <div className="flex justify-center">
                <TicTacToe darkMode={darkMode} />
              </div>
            )}
          </div>
        </section>

        <Contact darkMode={darkMode} />

        {/* Footer with improved mobile layout */}
        <footer className={`py-6 md:py-8 px-4 sm:px-6 lg:px-8 border-t ${
          darkMode 
            ? 'bg-black/50 border-gray-700' 
            : 'bg-white/50 border-gray-200'
        } backdrop-blur-sm`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Rudra Kabrawala. Built with passion and innovation.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating ChatBot Button with better mobile positioning */}
      <Button
        onClick={() => setShowChatBot(!showChatBot)}
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 ${
          darkMode 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-blue-500/25' 
            : 'bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900 shadow-gray-500/25'
        }`}
      >
        {showChatBot ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
      </Button>

      {/* ChatBot Component */}
      {showChatBot && <ChatBot darkMode={darkMode} />}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        /* Smooth scrolling for all browsers */
        html {
          scroll-behavior: smooth;
        }
        
        /* Ensure proper mobile viewport */
        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;

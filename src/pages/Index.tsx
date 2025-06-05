
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

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.background = 'linear-gradient(135deg, #0F172A 0%, #1B1B1B 50%, #264653 100%)';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = 'linear-gradient(135deg, #F4F4F4 0%, #E9C46A 30%, #2A9D8F 100%)';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Animated Background with Floating Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-500 ${darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50'
        }`}>
          {/* Gradient Orbs */}
          <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-teal-500'
          } animate-pulse`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full blur-3xl opacity-15 ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-blue-500'
          } animate-pulse animation-delay-3000`}></div>
        </div>
      </div>

      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />

        {/* Education Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Education
            </h2>
            <div className="space-y-8">
              <div className={`border-l-4 ${
                darkMode ? 'border-cyan-400' : 'border-blue-500'
              } pl-8 relative`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${
                  darkMode ? 'bg-cyan-400' : 'bg-blue-500'
                }`}></div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Bachelor of Technology in Computer Science Engineering
                </h3>
                <p className={`${darkMode ? 'text-cyan-400' : 'text-blue-600'} font-medium`}>
                  SVKM NMIMS Shirpur
                </p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                  2022 – 2026 | CGPA: 3.6/4
                </p>
              </div>
              
              <div className={`border-l-4 ${
                darkMode ? 'border-purple-400' : 'border-purple-500'
              } pl-8 relative`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${
                  darkMode ? 'bg-purple-400' : 'bg-purple-500'
                }`}></div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Class XII - PCM
                </h3>
                <p className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>
                  Sanskar Vidya Bhavan, Bharuch
                </p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                  2021 – 2022 | Percentage: 91.2%
                </p>
              </div>
              
              <div className={`border-l-4 ${
                darkMode ? 'border-green-400' : 'border-green-500'
              } pl-8 relative`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${
                  darkMode ? 'bg-green-400' : 'bg-green-500'
                }`}></div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Class X - SSC
                </h3>
                <p className={`${darkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                  Sanskar Vidya Bhavan, Bharuch
                </p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                  2019 – 2020 | Percentage: 95.6%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Experience
            </h2>
            <Card className={`${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
                : 'bg-white/70 border-slate-200 backdrop-blur-sm'
            } transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className={`text-xl ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      ML Intern (On-Site)
                    </CardTitle>
                    <CardDescription className={`text-lg font-medium ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      Aivid Techvision
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className={`${
                    darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    May 2025 – July 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li>• Worked on surveillance and monitoring products using Python and OpenCV</li>
                  <li>• Implemented computer vision algorithms for real-time video analysis and object detection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Achievements darkMode={darkMode} />

        {/* Games Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Fun Zone
            </h2>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Take a break and enjoy a quick game!
            </p>
            <Button
              onClick={() => setShowGame(!showGame)}
              className={`mb-8 px-8 py-3 text-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
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

        {/* Footer */}
        <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
          darkMode 
            ? 'bg-slate-900/50 border-slate-700' 
            : 'bg-white/50 border-gray-200'
        } backdrop-blur-sm`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Rudra Kabrawala. Built with passion and innovation.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating ChatBot Button */}
      <Button
        onClick={() => setShowChatBot(!showChatBot)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 ${
          darkMode 
            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-cyan-500/25' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/25'
        }`}
      >
        {showChatBot ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
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
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </div>
  );
};

export default Index;

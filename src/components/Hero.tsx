
import React from 'react';
import { Download, Github, Linkedin, Mail, Music, User, Palette, Code, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative">
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-20 animate-bounce opacity-20">
        <Code className={`h-12 w-12 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
      </div>
      <div className="absolute top-40 right-32 animate-pulse opacity-30 animation-delay-1000">
        <Brain className={`h-8 w-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-bounce opacity-25 animation-delay-2000">
        <Database className={`h-10 w-10 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="relative inline-block group">
              <img
                src="/lovable-uploads/9f8e93ed-7d25-4516-ab95-a861ad8deba7.png"
                alt="Rudra Kabrawala"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className={`absolute -inset-4 rounded-full animate-spin-slow opacity-20 ${
                darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-teal-600'
              }`}></div>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 animate-fade-in ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-cyan-400 via-blue-500 to-purple-400' 
                : 'from-blue-600 via-purple-600 to-teal-600'
            } bg-clip-text text-transparent animate-pulse`}>
              Rudra Kabrawala
            </span>
          </h1>
          
          <p className={`text-2xl md:text-3xl mb-4 animate-fade-in animation-delay-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            ML Engineer & AI Innovator
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-1000 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Building intelligent solutions that bridge the gap between cutting-edge AI and real-world impact
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in animation-delay-1500">
            <Button 
              className={`px-10 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
              }`}
              onClick={() => window.open('https://github.com/rudrakabrawala/rudrakabrawala/raw/main/rudra_kabrawala_cv.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/rudrakabrawala', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400' 
                    : 'border-gray-300 hover:bg-blue-50 hover:border-blue-400'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/rudrakabrawala', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:rudrakabrawala@gmail.com', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400' 
                    : 'border-gray-300 hover:bg-red-50 hover:border-red-400'
                }`}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="flex justify-center gap-8 text-sm animate-fade-in animation-delay-2000">
            <div className={`flex items-center gap-2 transition-all hover:scale-105 ${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
              <Music className="h-4 w-4" />
              <span>Music Lover</span>
            </div>
            <div className={`flex items-center gap-2 transition-all hover:scale-105 ${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
              <User className="h-4 w-4" />
              <span>Football Enthusiast</span>
            </div>
            <div className={`flex items-center gap-2 transition-all hover:scale-105 ${darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
              <Palette className="h-4 w-4" />
              <span>Creative Writer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

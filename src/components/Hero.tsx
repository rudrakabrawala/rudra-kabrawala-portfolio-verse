
import React from 'react';
import { Download, Github, Linkedin, Mail, Code, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle floating elements without heavy animations */}
      <div className="absolute top-20 left-20 opacity-10">
        <Code className={`h-8 w-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      <div className="absolute top-40 right-32 opacity-10">
        <Brain className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-10">
        <Database className={`h-7 w-7 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="relative inline-block group">
              <img
                src="/lovable-uploads/9f8e93ed-7d25-4516-ab95-a861ad8deba7.png"
                alt="Rudra Kabrawala"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-2xl transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white via-gray-200 to-gray-400' 
                : 'from-gray-900 via-gray-700 to-gray-500'
            } bg-clip-text text-transparent`}>
              Rudra Kabrawala
            </span>
          </h1>
          
          <p className={`text-2xl md:text-3xl mb-4 font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Empowering people through data, code, and community.
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Building intelligent solutions that bridge the gap between cutting-edge AI and real-world impact
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              className={`px-10 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg' 
                  : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
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
                onClick={() => window.open('https://www.linkedin.com/in/rudra-kabrawala', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-white' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-900'
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
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-white' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-900'
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
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-white' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-900'
                }`}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Let's Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className={`flex items-center space-x-4 md:space-x-6 p-4 md:p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode ? 'bg-slate-800/70 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
            }`}>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${
                darkMode ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-purple-600'
              }`}>
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <p className={`font-semibold text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Email
                </p>
                <a 
                  href="mailto:rudrakabrawala@gmail.com"
                  className={`text-sm md:text-lg transition-colors break-all ${
                    darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  rudrakabrawala@gmail.com
                </a>
              </div>
            </div>
            
            <div className={`flex items-center space-x-4 md:space-x-6 p-4 md:p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode ? 'bg-slate-800/70 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
            }`}>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${
                darkMode ? 'from-green-400 to-teal-500' : 'from-teal-500 to-green-600'
              }`}>
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <p className={`font-semibold text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Phone
                </p>
                <p className={`text-sm md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  +91 7383667120
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-4 md:pt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://www.linkedin.com/in/rudra-kabrawala', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-xs md:text-sm ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400 hover:text-cyan-400' 
                    : 'border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                <Linkedin className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/rudrakabrawala', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-xs md:text-sm ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400 hover:text-cyan-400' 
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-600'
                }`}
              >
                <Github className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://www.instagram.com/rudra_274?igsh=MWdjeHUxajVwdTFr', '_blank')}
                className={`transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-xs md:text-sm ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-pink-400 hover:text-pink-400' 
                    : 'border-gray-300 hover:bg-pink-50 hover:border-pink-400 hover:text-pink-600'
                }`}
              >
                <Instagram className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                Instagram
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <img
              src="/lovable-uploads/1a93f2fe-4ea3-4f4d-b707-6e08031e577e.png"
              alt="Rudra Kabrawala - Contact"
              className="w-full max-w-xs md:max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

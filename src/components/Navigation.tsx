
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900/95 border-gray-700/50' 
        : 'bg-white/95 border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className={`absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity ${
                darkMode ? 'bg-blue-400' : 'bg-gray-800'
              }`}></div>
              <img 
                src="/lovable-uploads/a6d1bd34-48b9-4c9b-8b61-58d55a07ef35.png" 
                alt="RK Logo"
                className="relative w-10 h-10 transition-all duration-300 transform group-hover:scale-110 rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className={`font-bold text-xl tracking-tight transition-colors ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Rudra Kabrawala
              </h1>
              <p className={`text-xs font-medium transition-colors ${
                darkMode ? 'text-blue-300' : 'text-gray-600'
              }`}>
                Data • Code • Community
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative group ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-blue-400' : 'bg-gray-800'
              }`}></span>
            </a>
            <a href="#projects" className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative group ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Projects
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-blue-400' : 'bg-gray-800'
              }`}></span>
            </a>
            <a href="#skills" className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative group ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Skills
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-blue-400' : 'bg-gray-800'
              }`}></span>
            </a>
            <a href="#interests" className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative group ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Interests
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-blue-400' : 'bg-gray-800'
              }`}></span>
            </a>
            <a href="#contact" className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative group ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-blue-400' : 'bg-gray-800'
              }`}></span>
            </a>
          </div>

          {/* Enhanced Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 relative group ${
              darkMode 
                ? 'hover:bg-gray-700 text-yellow-400 hover:text-yellow-300' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-yellow-600'
            }`}
          >
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity ${
              darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}></div>
            {darkMode ? <Sun className="h-5 w-5 relative z-10" /> : <Moon className="h-5 w-5 relative z-10" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


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
          {/* New RK Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src="/lovable-uploads/a6d1bd34-48b9-4c9b-8b61-58d55a07ef35.png" 
                alt="RK Logo"
                className="w-12 h-12 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
            <div>
              <h1 className={`font-bold text-lg transition-colors ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Rudra Kabrawala
              </h1>
              <p className={`text-xs transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Data • Code • Community
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium transition-all hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>About</a>
            <a href="#projects" className={`text-sm font-medium transition-all hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Projects</a>
            <a href="#skills" className={`text-sm font-medium transition-all hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Skills</a>
            <a href="#interests" className={`text-sm font-medium transition-all hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Interests</a>
            <a href="#contact" className={`text-sm font-medium transition-all hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Contact</a>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'hover:bg-gray-700 text-yellow-400 hover:text-yellow-300' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-yellow-600'
            }`}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

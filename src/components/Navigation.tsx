
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
          {/* Creative Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white transition-all duration-300 transform group-hover:scale-110 ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 shadow-lg shadow-blue-500/25' 
                  : 'bg-gradient-to-br from-gray-800 via-gray-700 to-black shadow-lg shadow-gray-500/25'
              }`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  <path d="M19 15L19.5 17L21 17.5L19.5 18L19 20L18.5 18L17 17.5L18.5 17L19 15Z" fill="currentColor"/>
                  <path d="M5 8L5.5 9.5L7 10L5.5 10.5L5 12L4.5 10.5L3 10L4.5 9.5L5 8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={`absolute -inset-1 rounded-xl animate-pulse opacity-50 ${
                darkMode ? 'bg-gradient-to-r from-blue-400/30 to-cyan-400/30' : 'bg-gradient-to-r from-gray-600/30 to-black/30'
              }`}></div>
            </div>
            <div>
              <h1 className={`font-bold text-lg transition-colors ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Rudra Kabrawala
              </h1>
              <p className={`text-xs transition-colors ${darkMode ? 'text-blue-300' : 'text-gray-600'}`}>
                ML Engineer & AI Innovator
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-gray-800'
            }`}>About</a>
            <a href="#projects" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-gray-800'
            }`}>Projects</a>
            <a href="#skills" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-gray-800'
            }`}>Skills</a>
            <a href="#contact" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-gray-800'
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

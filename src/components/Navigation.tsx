
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
        ? 'bg-slate-900/90 border-slate-700/50' 
        : 'bg-white/90 border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white transition-all duration-300 transform group-hover:scale-110 ${
                darkMode 
                  ? 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/25' 
                  : 'bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 shadow-lg shadow-blue-500/25'
              }`}>
                <span className="text-xl">R</span>
              </div>
              <div className={`absolute -inset-1 rounded-xl animate-pulse opacity-75 ${
                darkMode ? 'bg-gradient-to-r from-cyan-400/30 to-purple-600/30' : 'bg-gradient-to-r from-blue-400/30 to-teal-600/30'
              }`}></div>
            </div>
            <div>
              <h1 className={`font-bold text-lg transition-colors ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Rudra Kabrawala
              </h1>
              <p className={`text-xs transition-colors ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>
                ML Engineer & AI Innovator
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
            }`}>About</a>
            <a href="#projects" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
            }`}>Projects</a>
            <a href="#skills" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
            }`}>Skills</a>
            <a href="#contact" className={`text-sm font-medium transition-colors hover:scale-105 ${
              darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
            }`}>Contact</a>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'hover:bg-slate-700 text-yellow-400 hover:text-yellow-300' 
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

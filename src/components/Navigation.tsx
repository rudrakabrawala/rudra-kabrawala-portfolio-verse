
import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'interests', label: 'Interests' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
      darkMode 
        ? 'bg-black/90 border-gray-800/50 shadow-md shadow-blue-900/20' 
        : 'bg-white/95 border-gray-200/50 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative group">
              <div className={`absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity ${
                darkMode ? 'bg-blue-500' : 'bg-gray-800'
              }`}></div>
              <img 
                src="/lovable-uploads/a6d1bd34-48b9-4c9b-8b61-58d55a07ef35.png" 
                alt="RK Logo"
                className="relative w-10 h-10 transition-all duration-300 transform group-hover:scale-110 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400"
              />
            </div>
            <div>
              <h1 className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105",
                        darkMode 
                          ? "bg-gray-900 hover:bg-gray-800 text-gray-100 hover:text-white border border-gray-800 hover:border-blue-800 hover:shadow-md hover:shadow-blue-900/10"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-800 hover:text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                      )}
                    >
                      {item.label}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Enhanced Theme Toggle Button with improved visibility */}
            <Button
              variant="outline"
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-3 p-2 rounded-full transition-all duration-300 hover:scale-110 relative group ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 border-yellow-700/50 hover:text-yellow-200 hover:bg-gray-700 hover:border-yellow-600/50 hover:shadow-lg hover:shadow-yellow-900/20' 
                  : 'bg-gray-100 text-amber-600 border-amber-300/50 hover:text-amber-500 hover:bg-gray-200 hover:border-amber-400/50 hover:shadow-md hover:shadow-amber-200/30'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className={`absolute inset-0 rounded-full opacity-30 group-hover:opacity-40 transition-opacity ${
                darkMode ? 'bg-yellow-500/20' : 'bg-amber-400/20'
              }`}></div>
              {darkMode ? 
                <Sun className="h-5 w-5 relative z-10" /> : 
                <Moon className="h-5 w-5 relative z-10" />
              }
              <span className={`absolute -right-16 px-2 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
                darkMode 
                ? 'bg-gray-700 text-yellow-300' 
                : 'bg-gray-200 text-amber-700'
              }`}>
                {darkMode ? 'Light mode' : 'Dark mode'}
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 border-yellow-700/50 hover:bg-gray-700' 
                  : 'bg-gray-100 text-amber-600 border-amber-300/50 hover:bg-gray-200'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant={darkMode ? "outline" : "outline"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-300 border-gray-700 hover:bg-gray-800' 
                  : 'text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            darkMode ? 'border-gray-800 bg-black/95' : 'border-gray-200 bg-white/95'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={darkMode ? "outline" : "outline"}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full justify-start text-left px-3 py-2 text-base font-medium transition-all duration-200 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white border-gray-800 hover:border-gray-700 bg-transparent hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-gray-900 border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-100/70'
                  } mb-1`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

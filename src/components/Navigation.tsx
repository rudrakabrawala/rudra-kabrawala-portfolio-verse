
import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

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
        ? 'bg-black/95 border-gray-800/50 shadow-md shadow-blue-900/10' 
        : 'bg-white/95 border-gray-200/50 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
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
                      variant={darkMode ? "ghost" : "ghost"}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        darkMode 
                          ? 'text-gray-200 hover:text-white hover:bg-gray-800/70' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/70'
                      }`}
                    >
                      {item.label}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-2 p-2 rounded-full transition-all duration-300 hover:scale-110 relative group ${
                darkMode 
                  ? 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800/70' 
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-gray-100/70'
              }`}
            >
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity ${
                darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
              }`}></div>
              {darkMode ? <Sun className="h-5 w-5 relative z-10" /> : <Moon className="h-5 w-5 relative z-10" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'text-yellow-400' 
                  : 'text-gray-600'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-300' 
                  : 'text-gray-600'
              }`}
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
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full justify-start text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
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

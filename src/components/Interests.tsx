
import React from 'react';
import { Users, PenTool, ChefHat, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InterestsProps {
  darkMode: boolean;
}

const Interests: React.FC<InterestsProps> = ({ darkMode }) => {
  const interests = [
    {
      title: "Teaching & Mentoring",
      description: "Passionate about sharing knowledge and helping others grow in their tech journey.",
      icon: Users,
      color: darkMode ? "from-white to-gray-300" : "from-gray-900 to-gray-700"
    },
    {
      title: "Writing",
      description: "Enjoy writing about technology, data science, and personal growth to inspire others.",
      icon: PenTool,
      color: darkMode ? "from-gray-200 to-gray-400" : "from-gray-800 to-gray-600"
    },
    {
      title: "Cooking",
      description: "Love experimenting with new recipes and flavors—just like I do with code!",
      icon: ChefHat,
      color: darkMode ? "from-gray-300 to-gray-500" : "from-gray-700 to-gray-500"
    },
    {
      title: "Community Building",
      description: "Dedicated to creating inclusive spaces for learning and collaboration.",
      icon: Heart,
      color: darkMode ? "from-gray-400 to-gray-600" : "from-gray-600 to-gray-400"
    }
  ];

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Beyond Code
        </h2>
        <p className={`text-xl text-center mb-16 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          What drives me outside of technology
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <Card key={index} className={`${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70' 
                : 'bg-white/80 border-gray-200/50 backdrop-blur-sm hover:bg-white/90'
            } transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${interest.color} group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(interest.icon, {
                    className: `h-8 w-8 ${darkMode ? 'text-gray-900' : 'text-white'}`
                  })}
                </div>
                <CardTitle className={`text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {interest.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className={`text-sm text-center ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

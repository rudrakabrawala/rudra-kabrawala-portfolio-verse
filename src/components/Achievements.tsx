
import React, { useState } from 'react';
import { Award, Code, Users, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  const achievements = [
    {
      title: "NMMUN Shirpur (2023-24, 2024-25)",
      description: "1st Prize in Model UN debate for two consecutive years",
      icon: Award,
      year: "2023-2025"
    },
    {
      title: "CodeKraken Hackathon 2024",
      description: "2nd Prize at NMIMS Shirpur for developing scalable solution",
      icon: Code,
      year: "2024"
    },
    {
      title: "Event Management Lead - GDSC",
      description: "Led technical events fostering community engagement at NMIMS Shirpur",
      icon: Users,
      year: "2023-2024"
    },
    {
      title: "Community Founder - STU Reach",
      description: "Founded student-centric community for academic support",
      icon: Brain,
      year: "2023-2024"
    }
  ];

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${
          darkMode ? 'text-white' : 'text-slate-800'
        }`}>
          Achievements & Leadership
        </h2>
        <div className="relative">
          <Card className={`${
            darkMode 
              ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
              : 'bg-white/70 border-slate-200 backdrop-blur-sm'
          } transition-all duration-300`}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="ghost"
                  onClick={prevAchievement}
                  className={`${
                    darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600'
                  }`}>
                    {React.createElement(achievements[currentAchievement].icon, {
                      className: "h-8 w-8 text-white"
                    })}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {achievements[currentAchievement].title}
                  </h3>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-2`}>
                    {achievements[currentAchievement].description}
                  </p>
                  <Badge variant="outline" className={`${
                    darkMode 
                      ? 'border-slate-600 text-slate-400' 
                      : 'border-slate-300 text-slate-600'
                  }`}>
                    {achievements[currentAchievement].year}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  onClick={nextAchievement}
                  className={`${
                    darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-center space-x-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAchievement(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentAchievement
                        ? (darkMode ? 'bg-cyan-400' : 'bg-blue-500')
                        : (darkMode ? 'bg-slate-600' : 'bg-slate-300')
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

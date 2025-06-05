
import React from 'react';
import { Code, Cpu, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills = {
    "Programming Languages": {
      skills: ["C++", "Python", "HTML", "CSS", "JavaScript"],
      icon: Code,
      color: darkMode ? "from-cyan-400 to-blue-500" : "from-blue-600 to-purple-600"
    },
    "Technologies & Frameworks": {
      skills: ["MySQL", "PL/SQL", "OpenCV", "Machine Learning", "Excel", "Web-Scraping"],
      icon: Cpu,
      color: darkMode ? "from-green-400 to-teal-500" : "from-teal-500 to-green-600"
    },
    "Core Subjects": {
      skills: ["Data Structures", "Operating Systems", "DBMS", "OOP", "Cybersecurity"],
      icon: Database,
      color: darkMode ? "from-purple-400 to-pink-500" : "from-purple-500 to-pink-600"
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 animate-fade-in ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data], index) => (
            <Card key={index} className={`${
              darkMode 
                ? 'bg-slate-800/70 border-slate-700/50 backdrop-blur-sm' 
                : 'bg-white/80 border-gray-200/50 backdrop-blur-sm'
            } transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${data.color} group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(data.icon, {
                    className: "h-8 w-8 text-white"
                  })}
                </div>
                <CardTitle className={`text-lg ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className={`transition-all duration-300 hover:scale-105 bg-gradient-to-r ${data.color} text-white border-0 shadow-lg`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

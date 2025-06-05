
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "People Counting Bot",
      description: "Developed real-time people counting for video surveillance using OpenCV, OpenVINO, and YOLOv6. Designed robust tracking and event logic for boundary crossings.",
      tech: ["Python", "OpenCV", "OpenVINO", "YOLOv6", "MQTT", "Elasticsearch", "Flask API"],
      date: "April 2025",
      github: "https://github.com/rudrakabrawala"
    },
    {
      title: "Hand Gesture Recognition",
      description: "Built real-time hand gesture recognition for human-computer interaction. Implemented CV algorithms for accurate gesture detection and classification.",
      tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
      date: "March 2025",
      github: "https://github.com/rudrakabrawala"
    },
    {
      title: "EmployedIN",
      description: "Created web app to connect daily wage workers with job opportunities. Designed intuitive UI for accessibility and better user experience.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      date: "November 2024",
      github: "https://github.com/rudrakabrawala"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 animate-fade-in ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`${
              darkMode 
                ? 'bg-slate-800/70 border-slate-700/50 backdrop-blur-sm' 
                : 'bg-white/80 border-gray-200/50 backdrop-blur-sm'
            } transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className={`text-lg group-hover:text-xl transition-all ${
                    darkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-800 group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className={`opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                      darkMode ? 'hover:bg-slate-700 hover:text-cyan-400' : 'hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className={`text-xs transition-all hover:scale-105 ${
                      darkMode 
                        ? 'border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-400' 
                        : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                    }`}>
                      {tech}
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

export default Projects;

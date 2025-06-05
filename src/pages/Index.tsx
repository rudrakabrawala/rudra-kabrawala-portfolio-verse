
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Mail, Instagram, Music, Football, Code, Brain, Users, Award, MapPin, Phone, Calendar, ExternalLink, ChevronLeft, ChevronRight, MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TicTacToe from '@/components/TicTacToe';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.background = 'linear-gradient(135deg, #0c0c1f 0%, #1a1a2e 50%, #16213e 100%)';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)';
    }
  }, [darkMode]);

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

  const skills = {
    "Programming Languages": ["C++", "Python", "HTML", "CSS", "JavaScript"],
    "Technologies & Frameworks": ["MySQL", "PL/SQL", "OpenCV", "Machine Learning", "Excel", "Web-Scraping"],
    "Core Subjects": ["Data Structures", "Operating Systems", "DBMS", "OOP", "Cybersecurity"]
  };

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 ${darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900/80 border-slate-700' 
          : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Creative Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/25' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                }`}>
                  R
                </div>
                <div className={`absolute -inset-1 rounded-full animate-pulse ${
                  darkMode ? 'bg-gradient-to-r from-cyan-400/20 to-purple-600/20' : 'bg-gradient-to-r from-blue-400/20 to-purple-600/20'
                }`}></div>
              </div>
              <div>
                <h1 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  Rudra Kabrawala
                </h1>
                <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  ML Engineer
                </p>
              </div>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'hover:bg-slate-700 text-yellow-400' 
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <img
                  src="/lovable-uploads/7b21d476-58a4-439e-8b45-e74cdf31a842.png"
                  alt="Rudra Kabrawala"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
                />
              </div>
              
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
                darkMode 
                  ? 'text-white' 
                  : 'text-slate-800'
              }`}>
                <span className={`bg-gradient-to-r ${
                  darkMode 
                    ? 'from-cyan-400 to-purple-400' 
                    : 'from-blue-600 to-purple-600'
                } bg-clip-text text-transparent animate-pulse`}>
                  Rudra Kabrawala
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Innovative, Community-Focused ML Engineer & Tech Enthusiast
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  className={`px-8 py-3 text-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }`}
                  onClick={() => window.open('https://github.com/rudrakabrawala/rudrakabrawala/raw/main/rudra_kabrawala_cv.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://linkedin.com/in/rudrakabrawala', '_blank')}
                    className={`transition-all duration-300 ${
                      darkMode 
                        ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                        : 'border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://github.com/rudrakabrawala', '_blank')}
                    className={`transition-all duration-300 ${
                      darkMode 
                        ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                        : 'border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('mailto:rudrakabrawala@gmail.com', '_blank')}
                    className={`transition-all duration-300 ${
                      darkMode 
                        ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                        : 'border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Personal Interests */}
              <div className="flex justify-center gap-6 text-sm">
                <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Music className="h-4 w-4" />
                  <span>Music Lover</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Football className="h-4 w-4" />
                  <span>Football Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              About Me
            </h2>
            <div className={`text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <p className="mb-6">
                I'm a passionate Machine Learning Engineer and Business Analyst pursuing my B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur. With a strong foundation in computer vision, AI-based systems, and community leadership, I strive to create innovative solutions that make a positive impact.
              </p>
              <p className="mb-6">
                My journey in technology began with a curiosity about how machines can understand and interact with the world around us. This led me to specialize in computer vision and machine learning, where I've worked on projects ranging from hand gesture recognition to real-time people counting systems.
              </p>
              <p>
                Beyond technical skills, I'm deeply committed to community building and knowledge sharing. As a founder of STU Reach and leader in various student organizations, I believe in the power of collaboration and mentorship to drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Education
            </h2>
            <div className="space-y-8">
              <div className={`border-l-4 ${
                darkMode ? 'border-cyan-400' : 'border-blue-500'
              } pl-8 relative`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${
                  darkMode ? 'bg-cyan-400' : 'bg-blue-500'
                }`}></div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Bachelor of Technology in Computer Science Engineering
                </h3>
                <p className={`${darkMode ? 'text-cyan-400' : 'text-blue-600'} font-medium`}>
                  SVKM NMIMS Shirpur
                </p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                  2022 – 2026 | CGPA: 3.6/4
                </p>
              </div>
              
              <div className={`border-l-4 ${
                darkMode ? 'border-purple-400' : 'border-purple-500'
              } pl-8 relative`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${
                  darkMode ? 'bg-purple-400' : 'bg-purple-500'
                }`}></div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Class XII - PCM
                </h3>
                <p className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>
                  Sanskar Vidya Bhavan, Bharuch
                </p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                  2021 – 2022 | Percentage: 91.2%
                </p>
              </div>
              
              <div className={`border-l-4 ${
                darkMode ? 'border-green-400' : 'border-green-500'
              } pl-8 relative`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full ${
                  darkMode ? 'bg-green-400' : 'bg-green-500'
                }`}></div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Class X - SSC
                </h3>
                <p className={`${darkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                  Sanskar Vidya Bhavan, Bharuch
                </p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                  2019 – 2020 | Percentage: 95.6%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Experience
            </h2>
            <Card className={`${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
                : 'bg-white/70 border-slate-200 backdrop-blur-sm'
            } transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className={`text-xl ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      ML Intern (On-Site)
                    </CardTitle>
                    <CardDescription className={`text-lg font-medium ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      Aivid Techvision
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className={`${
                    darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    May 2025 – July 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li>• Worked on surveillance and monitoring products using Python and OpenCV</li>
                  <li>• Implemented computer vision algorithms for real-time video analysis and object detection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className={`${
                  darkMode 
                    ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
                    : 'bg-white/70 border-slate-200 backdrop-blur-sm'
                } transition-all duration-300 hover:scale-105 group`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className={`text-lg ${
                        darkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {project.title}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                          darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                        }`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription className={`text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {project.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm mb-4 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className={`text-xs ${
                          darkMode 
                            ? 'border-slate-600 text-slate-400' 
                            : 'border-slate-300 text-slate-600'
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

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className={`${
                  darkMode 
                    ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
                    : 'bg-white/70 border-slate-200 backdrop-blur-sm'
                } transition-all duration-300 hover:scale-105`}>
                  <CardHeader>
                    <CardTitle className={`text-lg ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className={`${
                          darkMode 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-slate-300' 
                            : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-700'
                        }`}>
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

        {/* Achievements Carousel */}
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

        {/* Games Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Fun Zone
            </h2>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Take a break and enjoy a quick game!
            </p>
            <Button
              onClick={() => setShowGame(!showGame)}
              className={`mb-8 px-8 py-3 text-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {showGame ? 'Hide Game' : 'Play Tic Tac Toe'}
            </Button>
            {showGame && (
              <div className="flex justify-center">
                <TicTacToe darkMode={darkMode} />
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-12 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Let's Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`flex items-center justify-center space-x-4 p-6 rounded-lg ${
                darkMode ? 'bg-slate-800/50' : 'bg-white/70'
              } backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                <Mail className={`h-6 w-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Email
                  </p>
                  <a 
                    href="mailto:rudrakabrawala@gmail.com"
                    className={`${darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'} transition-colors`}
                  >
                    rudrakabrawala@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={`flex items-center justify-center space-x-4 p-6 rounded-lg ${
                darkMode ? 'bg-slate-800/50' : 'bg-white/70'
              } backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                <Phone className={`h-6 w-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Phone
                  </p>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    +91 7383667120
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/rudrakabrawala', '_blank')}
                className={`transition-all duration-300 ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                    : 'border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://www.instagram.com/rudra_274?igsh=MWdjeHUxajVwdTFr', '_blank')}
                className={`transition-all duration-300 ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                    : 'border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://www.instagram.com/rudra_274?igsh=MWdjeHUxajVwdTFr', '_blank')}
                className={`transition-all duration-300 ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                    : 'border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Music className="mr-2 h-5 w-5" />
                Spotify
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
          darkMode 
            ? 'bg-slate-900/50 border-slate-700' 
            : 'bg-white/50 border-slate-200'
        } backdrop-blur-sm`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              © 2024 Rudra Kabrawala. Built with passion and innovation.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating ChatBot Button */}
      <Button
        onClick={() => setShowChatBot(!showChatBot)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-cyan-500/25' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        }`}
      >
        {showChatBot ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* ChatBot Component */}
      {showChatBot && <ChatBot darkMode={darkMode} />}
    </div>
  );
};

export default Index;

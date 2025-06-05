
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 animate-fade-in ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          About Me
        </h2>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className={`lg:col-span-2 text-lg leading-relaxed space-y-6 animate-fade-in ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p>
              I'm a passionate <strong className={darkMode ? 'text-cyan-400' : 'text-blue-600'}>Machine Learning Engineer and Business Analyst</strong>, deeply rooted in Computer Vision and AI innovation. Currently pursuing my education at SVKM NMIMS Shirpur, I thrive at the intersection of technology and real-world impact, building solutions that make algorithms work for people.
            </p>
            <p>
              <strong className={darkMode ? 'text-blue-400' : 'text-purple-600'}>Community is at my core:</strong> I love teaching, mentoring, and empowering others through open-source projects and student initiatives. My journey isn't just about code—it's about sharing knowledge, sparking curiosity, and helping others grow.
            </p>
            <p>
              Beyond tech, I'm an avid writer and a self-taught chef, always exploring new ideas in the kitchen and on the page. Whether it's explaining complex concepts, crafting a compelling blog, or perfecting a new recipe, I believe creativity and intelligence shine through every pursuit.
            </p>
            <p className={`font-semibold ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>
              Let's connect, collaborate, and create something meaningful together!
            </p>
          </div>
          <div className="relative animate-fade-in animation-delay-500 flex justify-center">
            <div className="relative group">
              <img
                src="/lovable-uploads/c7f464df-4bfe-4235-b143-253a7e1e38e6.png"
                alt="Rudra Kabrawala - About"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105 border-4 border-white"
              />
              <div className={`absolute -inset-2 rounded-2xl opacity-30 blur-lg ${
                darkMode ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 'bg-gradient-to-r from-blue-500 to-teal-600'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

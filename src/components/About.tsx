
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          About Me
        </h2>
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className={`text-lg leading-relaxed space-y-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p>
              I'm a passionate <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Machine Learning Engineer and Business Analyst</strong>, deeply rooted in Computer Vision and AI innovation. Currently pursuing my education at SVKM NMIMS Shirpur, I thrive at the intersection of technology and real-world impact, building solutions that make algorithms work for people.
            </p>
            <p>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Community is at my core:</strong> I love teaching, mentoring, and empowering others through open-source projects and student initiatives. My journey isn't just about code—it's about sharing knowledge, sparking curiosity, and helping others grow.
            </p>
            <p>
              Beyond tech, I'm an avid writer and a self-taught chef, always exploring new ideas in the kitchen and on the page. Whether it's explaining complex concepts, crafting a compelling blog, or perfecting a new recipe, I believe creativity and intelligence shine through every pursuit.
            </p>
            <p className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's connect, collaborate, and create something meaningful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

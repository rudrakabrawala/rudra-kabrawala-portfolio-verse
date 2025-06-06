
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          About Me
        </h2>
        <div className="grid lg:grid-cols-1 gap-8 md:gap-12 items-center">
          <div className={`text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p>
              I'm a <strong className={darkMode ? 'text-white' : 'text-gray-900'}>driven technology enthusiast</strong> with a passion for solving complex problems and building impactful solutions. My background spans machine learning, business analysis, and computer vision, and I thrive on applying these skills to real-world challenges. Currently pursuing my education, I actively contribute to innovative projects, open-source initiatives, and community-driven programs.
            </p>
            <p>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Community is at my core:</strong> I love teaching, mentoring, and empowering others through open-source projects and student initiatives. My journey isn't just about code—it's about sharing knowledge, sparking curiosity, and helping others grow.
            </p>
            <p>
              Beyond tech, I'm an avid writer and a self-taught chef, always exploring new ideas in the kitchen and on the page. Whether it's explaining complex concepts, crafting a compelling blog, or perfecting a new recipe, I believe creativity and intelligence shine through every pursuit.
            </p>
            <p className={`font-semibold text-lg md:text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's connect, collaborate, and create something meaningful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

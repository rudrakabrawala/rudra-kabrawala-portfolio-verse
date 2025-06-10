
import personalFaq from '../data/personal-faq.json';

export class PersonalFaqHandler {
  private getDirectAnswers(): Record<string, string> {
    return {
      // Skills and expertise
      'skills': "Rudra is skilled in Python, C++, JavaScript, OpenCV, Machine Learning, MySQL, PL/SQL, Web-Scraping, and Excel. He specializes in computer vision and AI-based systems.",
      'technologies': "Rudra works with Python, C++, JavaScript, OpenCV, Machine Learning, MySQL, PL/SQL, Web-Scraping, and Excel. He specializes in computer vision and AI-based systems.",
      'expertise': "Rudra specializes in computer vision, machine learning, and AI-based systems. He's experienced in Python development, web scraping, and database management.",
      
      // Location and background
      'location': "Rudra is from Bharuch, Gujarat, India. He's currently studying at SVKM NMIMS in Shirpur, Maharashtra.",
      'from': "Rudra is from Bharuch, Gujarat, India. He's currently studying at SVKM NMIMS in Shirpur, Maharashtra.",
      'live': "Rudra is from Bharuch, Gujarat, India. He's currently studying at SVKM NMIMS in Shirpur, Maharashtra.",
      
      // Education
      'education': "Rudra is pursuing B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur with a CGPA of 3.6/4. He completed Class XII with 91.2% and Class X with 95.6% at Sanskar Vidya Bhavan, Bharuch.",
      'college': "Rudra is pursuing B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur with a CGPA of 3.6/4.",
      'study': "Rudra is pursuing B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur with a CGPA of 3.6/4.",
      
      // Projects
      'projects': "Rudra has worked on several projects including: Hand Gesture Recognition using Python, OpenCV, MediaPipe, and TensorFlow; People Counting Bot for video surveillance using OpenCV and YOLOv6; and EmployedIN web app to connect daily wage workers with job opportunities.",
      
      // Hobbies and interests
      'hobbies': "Rudra enjoys writing, cooking, exploring new technologies, mentoring students, and football - both watching and playing!",
      'interests': "Rudra enjoys writing, cooking, exploring new technologies, mentoring students, and football - both watching and playing!",
      'football': "Rudra is passionate about football - he both watches and plays the sport!",
      
      // Contact
      'contact': "You can reach Rudra at rudrakabrawala@gmail.com or connect on LinkedIn at linkedin.com/in/rudrakabrawala.",
      'email': "Rudra's email is rudrakabrawala@gmail.com",
      
      // Experience
      'experience': "Rudra interned as an ML Engineer at Aivid Techvision, working on surveillance products using Python and OpenCV for real-time video analysis.",
      'internship': "Rudra interned as an ML Engineer at Aivid Techvision, working on surveillance products using Python and OpenCV for real-time video analysis.",
      
      // Achievements
      'achievements': "Rudra won 1st Prize in NMMUN debate for two consecutive years and 2nd Prize in CodeKraken Hackathon 2024. He's also a community leader and founder!",
      'awards': "Rudra won 1st Prize in NMMUN debate for two consecutive years and 2nd Prize in CodeKraken Hackathon 2024.",
      
      // Leadership
      'leadership': "Rudra is passionate about community building! He was Event Management Lead at GDSC, Planning Head at Coding Club, and founded STU Reach for student support.",
      'community': "Rudra is passionate about community building! He was Event Management Lead at GDSC, Planning Head at Coding Club, and founded STU Reach for student support."
    };
  }
  
  findAnswer(userMessage: string): string | null {
    const lowerMsg = userMessage.toLowerCase();
    const directAnswers = this.getDirectAnswers();
    
    // Check for direct keyword matches
    for (const [keyword, answer] of Object.entries(directAnswers)) {
      if (lowerMsg.includes(keyword)) {
        return answer;
      }
    }
    
    // Enhanced keyword combinations
    if ((lowerMsg.includes('who') || lowerMsg.includes('tell me about')) && 
        (lowerMsg.includes('rudra') || lowerMsg.includes('you'))) {
      return "I'm Rudra's AI assistant! Rudra Kabrawala is a B.Tech Computer Science student at SVKM NMIMS Shirpur, passionate about AI, machine learning, and community building. He specializes in computer vision and has worked on projects like Hand Gesture Recognition and People Counting systems.";
    }
    
    if (lowerMsg.includes('resume') || lowerMsg.includes('cv')) {
      return "You can download Rudra's resume directly from the website using the 'Download Resume' button in the hero section!";
    }
    
    // Greeting responses
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)/i.test(lowerMsg.trim())) {
      return "Hello! I'm here to help you learn more about Rudra Kabrawala. What would you like to know about his skills, projects, or experience?";
    }
    
    // Try fuzzy matching with FAQ data
    for (const faq of personalFaq) {
      if (faq.question && this.fuzzyMatch(lowerMsg, faq.question.toLowerCase())) {
        return faq.answer;
      }
    }
    
    return null;
  }
  
  private fuzzyMatch(userMessage: string, faqQuestion: string): boolean {
    const userWords = userMessage.split(/\s+/).filter(word => word.length > 2);
    const faqWords = faqQuestion.split(/\s+/).filter(word => word.length > 2);
    
    let matchCount = 0;
    for (const userWord of userWords) {
      if (faqWords.some(faqWord => faqWord.includes(userWord) || userWord.includes(faqWord))) {
        matchCount++;
      }
    }
    
    return matchCount >= Math.min(2, userWords.length);
  }
}


import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';
import personalFaq from '../data/personal-faq.json';

interface ChatBotProps {
  darkMode: boolean;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC<ChatBotProps> = ({ darkMode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Rudra's AI assistant. Ask me anything about his skills, projects, experience, or background!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sampleQuestions] = useState([
    "What are Rudra's skills?",
    "Tell me about Rudra's projects",
    "Where does Rudra live?",
    "Who is the PM of India?"
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Significantly improved function to find answers from personal FAQ dataset
  function findPersonalAnswer(userMessage: string) {
    const lowerMsg = userMessage.toLowerCase();
    
    // Direct answers for common questions to ensure accuracy
    
    // Skills specific questions - fixed accurate response
    if (lowerMsg.includes("skill") || lowerMsg.includes("good at") || lowerMsg.includes("knows") || lowerMsg.includes("expertise")) {
      return "Rudra is skilled in Python, C++, JavaScript, OpenCV, Machine Learning, MySQL, PL/SQL, Web-Scraping, and Excel. He specializes in computer vision and AI-based systems.";
    }
    
    // Location specific questions
    if (lowerMsg.includes("where") && 
        (lowerMsg.includes("live") || lowerMsg.includes("stay") || lowerMsg.includes("from") || lowerMsg.includes("location") || lowerMsg.includes("he live"))) {
      return "Rudra is from Bharuch, Gujarat, India. He's currently studying at SVKM NMIMS in Shirpur, Maharashtra.";
    }
    
    // Hobbies specific questions - added football
    if (lowerMsg.includes("hobby") || lowerMsg.includes("hobbies") || lowerMsg.includes("free time") || lowerMsg.includes("interest")) {
      return "Rudra enjoys writing, cooking, exploring new technologies, mentoring students, and football - both watching and playing!";
    }

    // Education specific questions
    if (lowerMsg.includes("education") || lowerMsg.includes("study") || lowerMsg.includes("school") || lowerMsg.includes("college")) {
      return "Rudra is pursuing B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur with a CGPA of 3.6/4. He completed Class XII with 91.2% and Class X with 95.6% at Sanskar Vidya Bhavan, Bharuch.";
    }

    // Projects specific questions
    if (lowerMsg.includes("project")) {
      return "Rudra has worked on several projects including: Hand Gesture Recognition using Python, OpenCV, MediaPipe, and TensorFlow; People Counting Bot for video surveillance using OpenCV and YOLOv6; and EmployedIN web app to connect daily wage workers with job opportunities.";
    }

    // Try exact question matching from FAQ
    for (const faq of personalFaq) {
      if (faq.question && lowerMsg.includes(faq.question.toLowerCase())) {
        return faq.answer;
      }
    }
    
    // If no exact match, try keyword matching
    const keywords = lowerMsg.split(/\s+/);
    const matches = personalFaq.filter(faq => {
      if (!faq.question) return false;
      const questionLower = faq.question.toLowerCase();
      // Check if at least 2 significant keywords match
      return keywords.filter(word => 
        word.length > 3 && questionLower.includes(word)
      ).length >= 2;
    });
    
    if (matches.length > 0) {
      // Return the best match (can be improved with more sophisticated scoring)
      return matches[0].answer;
    }
    
    return null;
  }

  const getBotResponse = async (userMessage: string): Promise<string> => {
    console.log("Processing user query:", userMessage);
    
    // List of offensive or sensitive keywords/phrases
    const offensiveKeywords = [
      'offensive', 'hate', 'stupid', 'idiot', 'dumb', 'kill', 'suicide', 
      'racist', 'sex', 'sexual', 'porn', 'drugs', 'violence', 'terrorist', 
      'bomb', 'attack', 'kill yourself', 'fuck', 'shit', 'bitch', 'asshole', 
      'dick', 'pussy', 'nigger', 'faggot', 'cunt', 'slut', 'whore'
    ];

    const lowerMessage = userMessage.toLowerCase();

    // Check if message contains offensive keywords
    if (offensiveKeywords.some(keyword => lowerMessage.includes(keyword))) {
      const politeResponses = [
        "I am here to help and provide respectful and positive interactions. Let's keep the conversation friendly and constructive.",
        "Please keep the conversation respectful. I am here to assist with relevant questions and provide helpful information.",
        "I encourage positive and respectful communication. Let's focus on helpful topics!"
      ];
      return politeResponses[Math.floor(Math.random() * politeResponses.length)];
    }

    // Try to answer from personal dataset first
    const personal = findPersonalAnswer(userMessage);
    if (personal) {
      console.log("Found answer in personal dataset:", personal);
      return personal;
    }

    // If no personal answer found, process common questions
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('good at')) {
      return "Rudra is skilled in Python, C++, JavaScript, OpenCV, Machine Learning, MySQL, PL/SQL, Web-Scraping, and Excel. He specializes in computer vision and AI-based systems.";
    }
    if (lowerMessage.includes('project')) {
      return "Rudra has worked on exciting projects like People Counting Bot with YOLOv6, Hand Gesture Recognition with TensorFlow, and EmployedIN web app. Check out his GitHub for more details!";
    }
    if (lowerMessage.includes('hobby') || lowerMessage.includes('hobbies') || lowerMessage.includes('interests') || lowerMessage.includes('football')) {
      return "Rudra enjoys writing, cooking, exploring new technologies, mentoring students, and football - both watching and playing!";
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('internship')) {
      return "Rudra interned as an ML Engineer at Aivid Techvision, working on surveillance products using Python and OpenCV for real-time video analysis.";
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college')) {
      return "Rudra is pursuing B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur with a CGPA of 3.6/4. He excelled in his previous studies with 91.2% in Class XII and 95.6% in Class X.";
    }
    if (lowerMessage.includes('achievement') || lowerMessage.includes('award') || lowerMessage.includes('prize')) {
      return "Rudra won 1st Prize in NMMUN debate for two consecutive years and 2nd Prize in CodeKraken Hackathon 2024. He's also a community leader and founder!";
    }
    if (lowerMessage.includes('leadership') || lowerMessage.includes('community')) {
      return "Rudra is passionate about community building! He was Event Management Lead at GDSC, Planning Head at Coding Club, and founded STU Reach for student support.";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can reach Rudra at rudrakabrawala@gmail.com or connect on LinkedIn at linkedin.com/in/rudrakabrawala.";
    }
    if (lowerMessage.includes('live') || lowerMessage.includes('from') || lowerMessage.includes('location')) {
      return "Rudra is from Bharuch, Gujarat, India. He's currently studying at SVKM NMIMS in Shirpur, Maharashtra.";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn more about Rudra Kabrawala. What would you like to know about his skills, projects, or experience?";
    }
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return "You can download Rudra's resume directly from the website using the 'Download Resume' button in the hero section!";
    }

    // For general or unrelated questions, use Hugging Face API via backend
    try {
      console.log("Calling Hugging Face API with prompt:", userMessage);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      const response = await fetch('/api/huggingface', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      console.log("API response status:", response.status);
      
      if (!response.ok) {
        console.error("Hugging Face API Error:", response.status, response.statusText);
        const errorText = await response.text();
        console.error("Error details:", errorText);
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log("Hugging Face API response:", data);
      
      if (data.reply && data.reply.trim() && data.reply.length > 5) {
        return data.reply;
      } else {
        console.log("Invalid reply from API:", data.reply);
        return "I can help you with questions about Rudra's skills, projects, experience, and background. What would you like to know?";
      }
    } catch (err: any) {
      console.error("Error calling Hugging Face API:", err);
      
      if (err.name === 'AbortError') {
        return "The request timed out. Please try asking a simpler question.";
      }
      
      return "I'm here to help you learn about Rudra Kabrawala! You can ask me about his skills, projects, experience, education, achievements, or any other aspect of his background.";
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const botText = await getBotResponse(inputMessage);
      const botResponse: Message = {
        id: messages.length + 2,
        text: botText,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error("Error getting bot response:", error);
      toast.error("Sorry, I had trouble processing your question.");
      setMessages(prev => [...prev, {
        id: messages.length + 2,
        text: "Sorry, I had trouble processing your question. Please try again.",
        isBot: true,
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSampleQuestion = (question: string) => {
    setInputMessage(question);
    // Automatically send the question after a slight delay for better UX
    setTimeout(() => {
      sendMessage();
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Card className={`fixed bottom-20 right-6 md:w-96 w-[calc(100%-3rem)] max-w-md h-[550px] z-40 ${
      darkMode 
        ? 'bg-gray-900/95 border-blue-900/30 backdrop-blur-lg shadow-lg shadow-blue-900/20' 
        : 'bg-white/95 border-slate-200 backdrop-blur-lg shadow-xl'
    } rounded-xl overflow-hidden`}>
      <CardHeader className={`pb-3 ${darkMode ? 'bg-gray-800/80' : 'bg-slate-50'} border-b ${
        darkMode ? 'border-gray-700' : 'border-slate-200'
      }`}>
        <CardTitle className={`text-lg flex items-center gap-2 ${
          darkMode ? 'text-white' : 'text-slate-800'
        }`}>
          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'
          }`}>
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span>Rudra's AI Assistant</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-[calc(100%-4.5rem)] p-0">
        <div className="flex-1 overflow-y-auto space-y-3 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.isBot ? 'justify-start' : 'justify-end'
              } ${message.isBot ? 'pr-12' : 'pl-12'} animate-fade-in`}
            >
              {message.isBot && (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}
              <div
                className={`p-3 rounded-lg text-sm ${
                  message.isBot
                    ? darkMode
                      ? 'bg-gray-800 border border-gray-700 text-gray-100'
                      : 'bg-slate-100 text-slate-800'
                    : darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-gray-700' : 'bg-slate-400'
                }`}>
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-2 animate-fade-in">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
              }`}>
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-slate-100'
              }`}>
                <div className="flex space-x-1">
                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-500'
                  }`} style={{ animationDelay: '0ms' }}></div>
                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-500'
                  }`} style={{ animationDelay: '150ms' }}></div>
                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-500'
                  }`} style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Sample questions - improved styling */}
        <div className={`px-4 py-3 overflow-x-auto ${darkMode ? 'bg-gray-800/80 border-t border-gray-700' : 'bg-slate-50/80 border-t border-slate-200'} flex gap-2 items-center`}>
          <HelpCircle className={`h-4 w-4 shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
          <div className="flex gap-2 whitespace-nowrap pb-1">
            {sampleQuestions.map((question) => (
              <Button 
                key={question} 
                variant="outline" 
                size="sm" 
                onClick={() => handleSampleQuestion(question)}
                className={`text-xs ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-blue-300 hover:text-blue-200' 
                    : 'bg-slate-200 hover:bg-slate-300 border-slate-300 text-blue-600'
                } transition-all hover:scale-105`}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
        
        <div className={`flex gap-2 p-4 border-t ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white border-gray-200'}`}>
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className={`text-sm ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-slate-300'
            }`}
          />
          <Button
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            size="icon"
            className={`${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
            } transition-all hover:scale-105`}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;

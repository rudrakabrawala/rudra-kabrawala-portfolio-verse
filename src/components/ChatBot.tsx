
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology')) {
      return "Rudra is skilled in Python, C++, JavaScript, OpenCV, Machine Learning, MySQL, and more. He specializes in computer vision and AI-based systems!";
    }
    
    if (message.includes('project')) {
      return "Rudra has worked on exciting projects like People Counting Bot with YOLOv6, Hand Gesture Recognition with TensorFlow, and EmployedIN web app. Check out his GitHub for more details!";
    }
    
    if (message.includes('experience') || message.includes('internship')) {
      return "Rudra interned as an ML Engineer at Aivid Techvision, working on surveillance products using Python and OpenCV for real-time video analysis.";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('college')) {
      return "Rudra is pursuing B.Tech in Computer Science Engineering at SVKM NMIMS Shirpur with a CGPA of 3.6/4. He excelled in his previous studies with 91.2% in Class XII and 95.6% in Class X.";
    }
    
    if (message.includes('achievement') || message.includes('award') || message.includes('prize')) {
      return "Rudra won 1st Prize in NMMUN debate for two consecutive years and 2nd Prize in CodeKraken Hackathon 2024. He's also a community leader and founder!";
    }
    
    if (message.includes('leadership') || message.includes('community')) {
      return "Rudra is passionate about community building! He was Event Management Lead at GDSC, Planning Head at Coding Club, and founded STU Reach for student support.";
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return "You can reach Rudra at rudrakabrawala@gmail.com or connect on LinkedIn at linkedin.com/in/rudrakabrawala. He's also on Instagram and Spotify!";
    }
    
    if (message.includes('music') || message.includes('football') || message.includes('hobby')) {
      return "Rudra loves music and is a football enthusiast! These interests keep him balanced alongside his tech pursuits.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Rudra Kabrawala. What would you like to know about his skills, projects, or experience?";
    }
    
    if (message.includes('resume') || message.includes('cv')) {
      return "You can download Rudra's resume directly from the website using the 'Download Resume' button in the hero section!";
    }
    
    return "That's an interesting question! Feel free to ask me about Rudra's skills, projects, education, experience, achievements, or how to contact him.";
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

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Card className={`fixed bottom-20 right-6 w-80 h-96 z-40 ${
      darkMode 
        ? 'bg-slate-800/95 border-slate-700 backdrop-blur-md' 
        : 'bg-white/95 border-slate-200 backdrop-blur-md'
    } shadow-2xl`}>
      <CardHeader className="pb-3">
        <CardTitle className={`text-lg flex items-center gap-2 ${
          darkMode ? 'text-white' : 'text-slate-800'
        }`}>
          <Bot className="h-5 w-5" />
          Ask about Rudra
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto space-y-3 mb-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.isBot ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.isBot && (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-cyan-500' : 'bg-blue-500'
                }`}>
                  <Bot className="h-3 w-3 text-white" />
                </div>
              )}
              <div
                className={`max-w-[200px] p-2 rounded-lg text-sm ${
                  message.isBot
                    ? darkMode
                      ? 'bg-slate-700 text-slate-200'
                      : 'bg-slate-100 text-slate-800'
                    : darkMode
                      ? 'bg-cyan-600 text-white'
                      : 'bg-blue-600 text-white'
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-slate-600' : 'bg-slate-400'
                }`}>
                  <User className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                darkMode ? 'bg-cyan-500' : 'bg-blue-500'
              }`}>
                <Bot className="h-3 w-3 text-white" />
              </div>
              <div className={`p-2 rounded-lg ${
                darkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
                <div className="flex space-x-1">
                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                    darkMode ? 'bg-slate-400' : 'bg-slate-500'
                  }`} style={{ animationDelay: '0ms' }}></div>
                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                    darkMode ? 'bg-slate-400' : 'bg-slate-500'
                  }`} style={{ animationDelay: '150ms' }}></div>
                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                    darkMode ? 'bg-slate-400' : 'bg-slate-500'
                  }`} style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className={`text-sm ${
              darkMode 
                ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                : 'bg-white border-slate-300'
            }`}
          />
          <Button
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            size="sm"
            className={`${
              darkMode 
                ? 'bg-cyan-600 hover:bg-cyan-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;

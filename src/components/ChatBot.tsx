import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';
import { classifyQuestion, isOffensiveContent } from '../utils/questionClassifier';
import { GitHubRepoAnalyzer } from '../utils/githubApi';
import { PersonalFaqHandler } from '../utils/personalFaqHandler';

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
      text: "Hi! I'm Rudra's AI assistant. Ask me anything about his skills, projects, experience, background, or even general knowledge questions!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sampleQuestions] = useState([
    "What are Rudra's skills?",
    "Tell me about his projects",
    "Show me his code repositories",
    "Who is the president of India?"
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize handlers
  const githubAnalyzer = new GitHubRepoAnalyzer();
  const personalFaqHandler = new PersonalFaqHandler();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = async (userMessage: string): Promise<string> => {
    console.log("Processing user query:", userMessage);
    
    // Check for offensive content
    if (isOffensiveContent(userMessage)) {
      const politeResponses = [
        "I am here to help and provide respectful and positive interactions. Let's keep the conversation friendly and constructive.",
        "Please keep the conversation respectful. I am here to assist with relevant questions and provide helpful information.",
        "I encourage positive and respectful communication. Let's focus on helpful topics!"
      ];
      return politeResponses[Math.floor(Math.random() * politeResponses.length)];
    }

    // Classify the question
    const classification = classifyQuestion(userMessage);
    console.log("Question classification:", classification);

    // Route based on classification
    switch (classification.type) {
      case 'personal':
        return await handlePersonalQuestion(userMessage);
      
      case 'repo':
        return await handleRepoQuestion(userMessage);
      
      case 'general':
        return await handleGeneralQuestion(userMessage);
      
      default:
        return "I'm here to help you learn about Rudra Kabrawala! You can ask me about his skills, projects, experience, education, achievements, or any other aspect of his background.";
    }
  };

  const handlePersonalQuestion = async (userMessage: string): Promise<string> => {
    console.log("Handling personal question:", userMessage);
    
    // Try to get answer from personal FAQ handler
    const personalAnswer = personalFaqHandler.findAnswer(userMessage);
    if (personalAnswer) {
      console.log("Found answer in personal FAQ:", personalAnswer);
      return personalAnswer;
    }
    
    // Fallback response for personal questions
    return "I can help you with questions about Rudra's skills, projects, experience, education, achievements, and background. What specific aspect would you like to know more about?";
  };

  const handleRepoQuestion = async (userMessage: string): Promise<string> => {
    console.log("Handling repository question:", userMessage);
    
    try {
      // Extract potential repository name or search term
      const searchTerm = userMessage.toLowerCase()
        .replace(/show me|tell me about|what is|how does|repository|repo|code|project/gi, '')
        .trim();
      
      if (searchTerm.length > 2) {
        return await githubAnalyzer.searchUserRepos(searchTerm);
      } else {
        return "I can help you explore Rudra's code repositories and projects. Try asking about specific technologies like 'Python projects', 'machine learning', or 'web development' to find relevant repositories.";
      }
    } catch (error) {
      console.error("Error handling repo question:", error);
      return "I can help you learn about Rudra's coding projects and repositories. You can also check out his GitHub profile directly for all his projects.";
    }
  };

  const handleGeneralQuestion = async (userMessage: string): Promise<string> => {
    console.log("Handling general knowledge question:", userMessage);
    
    try {
      console.log("Calling Hugging Face API with prompt:", userMessage);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
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
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Hugging Face API response:", data);
      
      if (data.reply && data.reply.trim() && data.reply.length > 5) {
        return data.reply;
      } else {
        console.log("Invalid reply from API:", data.reply);
        return "I can help with general knowledge questions, but I might need a moment to process them properly. In the meantime, feel free to ask me about Rudra's background!";
      }
    } catch (err: any) {
      console.error("Error calling Hugging Face API:", err);
      
      if (err.name === 'AbortError') {
        return "The request timed out. Please try asking a simpler question or ask me about Rudra's background.";
      }
      
      return "I can help with general knowledge questions, though I might have better answers about Rudra's background, skills, and projects!";
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

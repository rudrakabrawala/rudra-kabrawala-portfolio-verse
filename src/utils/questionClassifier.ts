
interface QuestionCategory {
  type: 'personal' | 'repo' | 'general';
  confidence: number;
}

export const classifyQuestion = (message: string): QuestionCategory => {
  const lowerMsg = message.toLowerCase();
  
  // Personal/portfolio keywords with high confidence
  const personalKeywords = [
    'rudra', 'skills', 'projects', 'experience', 'education', 'achievements',
    'internship', 'hobby', 'hobbies', 'contact', 'email', 'resume', 'cv',
    'background', 'qualification', 'college', 'university', 'work', 'job',
    'live', 'from', 'location', 'bharuch', 'gujarat', 'nmims', 'leadership',
    'community', 'award', 'prize', 'cgpa', 'grade', 'football', 'cooking',
    'writing', 'mentoring', 'about you', 'tell me about', 'who are you'
  ];
  
  // Repository/code keywords
  const repoKeywords = [
    'code', 'repository', 'repo', 'github', 'project code', 'implementation',
    'source code', 'programming', 'development', 'codebase', 'files',
    'functions', 'classes', 'methods', 'algorithm', 'data structure',
    'architecture', 'design pattern', 'api', 'database', 'framework'
  ];
  
  // Calculate keyword matches
  const personalMatches = personalKeywords.filter(keyword => lowerMsg.includes(keyword)).length;
  const repoMatches = repoKeywords.filter(keyword => lowerMsg.includes(keyword)).length;
  
  // High confidence personal questions
  if (personalMatches >= 2 || personalKeywords.some(keyword => lowerMsg.includes(keyword) && keyword.length > 5)) {
    return { type: 'personal', confidence: 0.9 };
  }
  
  // Single personal keyword with medium confidence
  if (personalMatches >= 1) {
    return { type: 'personal', confidence: 0.7 };
  }
  
  // Repository questions
  if (repoMatches >= 1) {
    return { type: 'repo', confidence: 0.8 };
  }
  
  // Check for greeting patterns
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)/i.test(lowerMsg.trim())) {
    return { type: 'personal', confidence: 0.6 };
  }
  
  // Default to general knowledge for everything else
  return { type: 'general', confidence: 0.5 };
};

export const isOffensiveContent = (message: string): boolean => {
  const offensiveKeywords = [
    'offensive', 'hate', 'stupid', 'idiot', 'dumb', 'kill', 'suicide', 
    'racist', 'sex', 'sexual', 'porn', 'drugs', 'violence', 'terrorist', 
    'bomb', 'attack', 'kill yourself', 'fuck', 'shit', 'bitch', 'asshole', 
    'dick', 'pussy', 'nigger', 'faggot', 'cunt', 'slut', 'whore'
  ];
  
  const lowerMessage = message.toLowerCase();
  return offensiveKeywords.some(keyword => lowerMessage.includes(keyword));
};

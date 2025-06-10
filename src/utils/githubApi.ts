
interface GitHubRepoData {
  description: string;
  topics: string[];
  languages: Record<string, number>;
  readme: string;
}

export class GitHubRepoAnalyzer {
  private owner = 'rudrakabrawala'; // Assuming this is Rudra's GitHub username
  private baseUrl = 'https://api.github.com';
  
  async getRepoData(repoName: string): Promise<GitHubRepoData | null> {
    try {
      console.log(`Fetching GitHub data for ${this.owner}/${repoName}`);
      
      // Get basic repo info
      const repoResponse = await fetch(`${this.baseUrl}/repos/${this.owner}/${repoName}`);
      if (!repoResponse.ok) return null;
      
      const repoData = await repoResponse.json();
      
      // Get languages
      const languagesResponse = await fetch(`${this.baseUrl}/repos/${this.owner}/${repoName}/languages`);
      const languages = languagesResponse.ok ? await languagesResponse.json() : {};
      
      // Get README
      let readme = '';
      try {
        const readmeResponse = await fetch(`${this.baseUrl}/repos/${this.owner}/${repoName}/readme`);
        if (readmeResponse.ok) {
          const readmeData = await readmeResponse.json();
          readme = atob(readmeData.content);
        }
      } catch (error) {
        console.log('No README found or error fetching README');
      }
      
      return {
        description: repoData.description || '',
        topics: repoData.topics || [],
        languages,
        readme
      };
    } catch (error) {
      console.error('Error fetching GitHub repo data:', error);
      return null;
    }
  }
  
  async searchUserRepos(query: string): Promise<string> {
    try {
      console.log(`Searching repos for: ${query}`);
      
      const searchResponse = await fetch(
        `${this.baseUrl}/search/repositories?q=user:${this.owner} ${encodeURIComponent(query)}&sort=updated`
      );
      
      if (!searchResponse.ok) {
        throw new Error('GitHub search failed');
      }
      
      const searchData = await searchResponse.json();
      
      if (searchData.items && searchData.items.length > 0) {
        const repo = searchData.items[0];
        const repoData = await this.getRepoData(repo.name);
        
        let response = `I found information about ${repo.name}: ${repo.description || 'No description available.'}`;
        
        if (repoData) {
          if (repoData.topics.length > 0) {
            response += ` Topics: ${repoData.topics.join(', ')}.`;
          }
          
          const topLanguages = Object.keys(repoData.languages).slice(0, 3);
          if (topLanguages.length > 0) {
            response += ` Main technologies: ${topLanguages.join(', ')}.`;
          }
          
          if (repoData.readme && repoData.readme.length > 100) {
            const readmePreview = repoData.readme.substring(0, 300) + '...';
            response += ` ${readmePreview}`;
          }
        }
        
        response += ` You can check it out at: https://github.com/${this.owner}/${repo.name}`;
        return response;
      } else {
        return `I couldn't find any specific repositories matching "${query}" in Rudra's GitHub profile. You can explore all his projects at https://github.com/${this.owner}`;
      }
    } catch (error) {
      console.error('Error searching GitHub repos:', error);
      return 'I had trouble accessing the GitHub repository information right now. You can check out Rudra\'s projects directly at his GitHub profile.';
    }
  }
}

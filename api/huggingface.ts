
// /api/huggingface.ts
// Hugging Face API route for general questions not covered by personal FAQ
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  try {
    const apiKey = process.env.HUGGINGFACE_API_KEY || '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';
    
    console.log("Using Hugging Face API key:", apiKey ? "Key present" : "Key missing");

    // Using Hugging Face Inference API with a more reliable model
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_length: 150,
          temperature: 0.7,
          do_sample: true,
          pad_token_id: 50256
        },
        options: {
          wait_for_model: true,
          use_cache: false
        }
      }),
    });

    console.log("Hugging Face API request:", { prompt, status: response.status });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Hugging Face API Error:", response.status, response.statusText, errorText);
      
      // Handle specific error cases
      if (response.status === 503) {
        return res.status(200).json({ 
          reply: "I'm processing your question. The AI model is loading, please try again in a moment." 
        });
      }
      
      throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log("Hugging Face API response:", data);
    
    // Handle different response formats from Hugging Face
    let reply = '';
    if (Array.isArray(data) && data.length > 0) {
      if (data[0].generated_text) {
        // Clean up the response by removing the input prompt
        reply = data[0].generated_text.replace(prompt, '').trim();
        
        // Remove any incomplete sentences at the end
        const sentences = reply.split(/[.!?]+/);
        if (sentences.length > 1 && sentences[sentences.length - 1].trim().length < 10) {
          sentences.pop();
          reply = sentences.join('.') + '.';
        }
      } else if (data[0].text) {
        reply = data[0].text;
      }
    } else if (data.generated_text) {
      reply = data.generated_text.replace(prompt, '').trim();
    }

    // Clean up and validate the reply
    reply = reply.trim();
    if (!reply || reply.length < 5) {
      reply = "I can help you with questions about Rudra's background, skills, projects, and experience. What would you like to know?";
    }

    // Ensure the reply is not too long
    if (reply.length > 300) {
      reply = reply.substring(0, 297) + '...';
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Error fetching from Hugging Face API:", err);
    res.status(200).json({ 
      reply: "I'm here to help you learn about Rudra Kabrawala! You can ask me about his skills, projects, experience, education, achievements, or any other aspect of his background." 
    });
  }
}

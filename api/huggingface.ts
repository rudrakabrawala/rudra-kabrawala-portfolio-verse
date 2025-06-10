
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
    const apiKey = process.env.HUGGINGFACE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'HUGGINGFACE_API_KEY not set in environment variables' });
    }

    // Using Hugging Face Inference API
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_length: 100,
          temperature: 0.7,
          do_sample: true,
        }
      }),
    });

    console.log("Hugging Face API request:", { prompt });
    
    if (!response.ok) {
      console.error("Hugging Face API Error:", response.status, response.statusText);
      throw new Error(`Hugging Face API error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Hugging Face API response:", data);
    
    // Handle different response formats from Hugging Face
    let reply = '';
    if (Array.isArray(data) && data.length > 0) {
      if (data[0].generated_text) {
        reply = data[0].generated_text.replace(prompt, '').trim();
      } else if (data[0].text) {
        reply = data[0].text;
      }
    } else if (data.generated_text) {
      reply = data.generated_text.replace(prompt, '').trim();
    }

    // Fallback if no proper response
    if (!reply) {
      reply = "I can help you with questions about Rudra's background, skills, projects, and experience. What would you like to know?";
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Error fetching from Hugging Face API:", err);
    res.status(500).json({ error: 'Failed to fetch from Hugging Face API' });
  }
}

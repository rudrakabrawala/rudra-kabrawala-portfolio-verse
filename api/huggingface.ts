
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
    console.log("Processing prompt:", prompt);

    // Using a more reliable text generation model
    const response = await fetch('https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `<s>[INST] ${prompt} [/INST]`,
        parameters: {
          max_new_tokens: 100,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true,
          return_full_text: false
        },
        options: {
          wait_for_model: true,
          use_cache: false
        }
      }),
    });

    console.log("Hugging Face API response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Hugging Face API Error:", response.status, response.statusText, errorText);
      
      // Handle specific error cases
      if (response.status === 503) {
        return res.status(200).json({ 
          reply: "The AI model is currently loading. Please try again in a moment." 
        });
      }
      
      if (response.status === 429) {
        return res.status(200).json({ 
          reply: "I'm currently experiencing high demand. Please try again shortly." 
        });
      }

      // For 404 or other errors, try a fallback approach
      console.log("Trying fallback model...");
      const fallbackResponse = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-base', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 100,
            temperature: 0.7
          },
          options: {
            wait_for_model: true
          }
        }),
      });

      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        console.log("Fallback API response:", fallbackData);
        
        let reply = '';
        if (Array.isArray(fallbackData) && fallbackData.length > 0) {
          reply = fallbackData[0].generated_text || fallbackData[0].text || '';
        } else if (fallbackData.generated_text) {
          reply = fallbackData.generated_text;
        }

        reply = reply.trim();
        if (!reply || reply.length < 3) {
          reply = "I can help you with questions about Rudra's background, skills, projects, and experience. What would you like to know?";
        }

        return res.status(200).json({ reply });
      }
      
      throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log("Hugging Face API response data:", data);
    
    // Handle different response formats from Hugging Face
    let reply = '';
    if (Array.isArray(data) && data.length > 0) {
      if (data[0].generated_text) {
        reply = data[0].generated_text.trim();
      } else if (data[0].text) {
        reply = data[0].text.trim();
      }
    } else if (data.generated_text) {
      reply = data.generated_text.trim();
    }

    // Clean up and validate the reply
    if (!reply || reply.length < 5) {
      reply = "I can help you with questions about Rudra's background, skills, projects, and experience. What would you like to know?";
    }

    // Ensure the reply is not too long
    if (reply.length > 300) {
      reply = reply.substring(0, 297) + '...';
    }

    console.log("Final reply:", reply);
    res.status(200).json({ reply });
  } catch (err) {
    console.error("Error fetching from Hugging Face API:", err);
    res.status(200).json({ 
      reply: "I'm here to help you learn about Rudra Kabrawala! You can ask me about his skills, projects, experience, education, achievements, or any other aspect of his background." 
    });
  }
}


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
    
    console.log("Processing prompt:", prompt);

    // Try multiple models in order of preference
    const models = [
      'microsoft/DialoGPT-medium',
      'google/flan-t5-large',
      'google/flan-t5-base'
    ];

    for (const model of models) {
      try {
        console.log(`Trying model: ${model}`);
        
        const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
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
              return_full_text: false
            },
            options: {
              wait_for_model: true,
              use_cache: false
            }
          }),
        });

        console.log(`${model} response status:`, response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log(`${model} response data:`, data);
          
          let reply = '';
          if (Array.isArray(data) && data.length > 0) {
            reply = data[0].generated_text || data[0].text || '';
          } else if (data.generated_text) {
            reply = data.generated_text;
          } else if (typeof data === 'string') {
            reply = data;
          }

          // Clean up the reply
          reply = reply.trim();
          if (reply && reply.length > 5) {
            // Remove input prompt if it's repeated in output
            if (reply.toLowerCase().includes(prompt.toLowerCase())) {
              reply = reply.replace(new RegExp(prompt, 'gi'), '').trim();
            }
            
            // Ensure reasonable length
            if (reply.length > 300) {
              reply = reply.substring(0, 297) + '...';
            }

            console.log("Final reply:", reply);
            return res.status(200).json({ reply });
          }
        } else {
          console.log(`${model} failed with status:`, response.status);
          continue;
        }
      } catch (modelError) {
        console.log(`Error with model ${model}:`, modelError);
        continue;
      }
    }
    
    // If all models fail, provide a helpful fallback
    console.log("All models failed, using fallback");
    return res.status(200).json({ 
      reply: "I can help you with questions about Rudra's background, skills, projects, and experience. For general knowledge questions, I might need a moment to process them properly." 
    });
    
  } catch (err) {
    console.error("Error in Hugging Face API:", err);
    res.status(200).json({ 
      reply: "I'm here to help you learn about Rudra Kabrawala! You can ask me about his skills, projects, experience, education, achievements, or any other aspect of his background." 
    });
  }
}

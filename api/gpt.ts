// /api/gpt.ts
// This is a simple Next.js API route example. If you use Vite or another framework, adapt accordingly.
// You must set GITHUB_API_KEY and AI_API_BASE_URL in your environment variables.

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
    const apiKey = process.env.GITHUB_API_KEY;
    const apiBaseUrl = process.env.AI_API_BASE_URL;
    if (!apiKey || !apiBaseUrl) {
      return res.status(500).json({ error: 'GITHUB_API_KEY or AI_API_BASE_URL not set in environment variables' });
    }
    const url = `${apiBaseUrl}/v1/chat/completions`;
    const body = {
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 256
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });
    console.log("AI API request body:", JSON.stringify(body));
    const data = await response.json();
    console.log("AI API response data:", JSON.stringify(data));
    const reply = data.choices && data.choices.length > 0 ? data.choices[0].message.content : '';
    res.status(200).json({ reply });
  } catch (err) {
    console.error("Error fetching from AI API:", err);
    res.status(500).json({ error: 'Failed to fetch from AI API' });
  }
}

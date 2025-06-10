// /api/gpt.ts
// This is a simple Next.js API route example. If you use Vite or another framework, adapt accordingly.
// You must set GEMINI_API_KEY in your environment variables.

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'No prompt provided' });
  }
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not set in environment variables' });
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };
    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await geminiRes.json();
    const reply = data.candidates && data.candidates.length > 0 ? data.candidates[0].content : '';
    res.status(200).json({ reply });
  } catch (err) {
    console.error("Error fetching from Gemini API:", err);
    res.status(500).json({ error: 'Failed to fetch from Gemini API' });
  }
}

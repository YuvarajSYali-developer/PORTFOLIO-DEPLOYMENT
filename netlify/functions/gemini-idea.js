exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { prompt } = JSON.parse(event.body || '{}');
    if (!prompt || typeof prompt !== 'string') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt' }) };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured: missing GEMINI_API_KEY' }) };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const userInstruction = `Generate a creative and modern project idea based on the following topic: "${prompt}". Provide a project title, a short description (2-3 sentences), and a suggested tech stack (3-5 technologies). Format the output as a JSON object with the keys: "title", "description", and "tech_stack" (as an array of strings).`;

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: userInstruction }]
        }
      ]
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: 'Upstream error' }) };
    }

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Strip code fences if present and parse JSON
    const clean = text.replace(/```json/g, '').replace(/```/g, '').trim();

    let idea;
    try {
      idea = JSON.parse(clean);
    } catch (e) {
      // Fallback: return raw text
      idea = { title: 'Idea', description: clean || 'No content', tech_stack: [] };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(idea)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
};



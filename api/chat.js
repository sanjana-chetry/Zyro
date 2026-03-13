// Vercel Serverless Function for /api/chat

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(500).json({
            error: 'Server configuration error: GROQ_API_KEY is not set.'
        });
    }

    const { messages, model, temperature, max_tokens, top_p } = req.body;

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({
            error: 'Invalid request: messages array is required.'
        });
    }

    try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model || 'llama-3.3-70b-versatile',
                messages,
                temperature: temperature ?? 0.7,
                max_tokens: max_tokens ?? 1024,
                top_p: top_p ?? 1,
                stream: false
            })
        });

        if (!groqResponse.ok) {
            const errorData = await groqResponse.text();
            return res.status(groqResponse.status).json({
                error: `Groq API error: ${groqResponse.status}`,
                details: errorData
            });
        }

        const data = await groqResponse.json();
        res.json(data);
    } catch (err) {
        console.error('Error calling Groq API:', err.message);
        res.status(500).json({
            error: 'Failed to connect to AI service.'
        });
    }
}

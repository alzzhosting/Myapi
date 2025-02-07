import fetch from 'node-fetch';

const OPENAI_API_KEY = 'sk';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { q } = req.query;
    if (!q) {
        return res.status(400).json({
          error: 'query wajib diisi',
          creator: "Kenz Market",
          status: "400"
        });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'luminai',
                q,
                max_tokens: 100
            })
        });

        const data = await response.json();
        res.status(200).json({ response: data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Error generating response' });
    }
}
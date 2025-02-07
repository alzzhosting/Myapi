import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { q } = req.query;
    if (!q) {
        return res.status(400).json({
          error: 'query diperlukan',
          creator: "Kenz Market"
        });
    }

    try {
        const response = await fetch('https://api.deepseek.com/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_DEEPSEEK_API_KEY`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                q,
                max_tokens: 100
            })
        });

        const data = await response.json();
        res.status(200).json({ response: data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
    }
}
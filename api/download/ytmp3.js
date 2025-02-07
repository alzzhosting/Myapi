import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { url } = req.query;
    if (!url) {
        return res.status(400).json({
          error: 'URL YouTube diperlukan',
          creator: "Kenz Market",
          status: "400"
        });
    }

    try {
        const apiUrl = `https://www.y2mate.com/mates/en68/analyze/ajax`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ url })
        });

        const data = await response.json();
        if (!data || !data.links || !data.links.mp3) {
            return res.status(500).json({ error: 'Gagal mengambil audio dari YouTube' });
        }

        const audioData = Object.values(data.links.mp3)[0]; // Ambil kualitas audio terbaik

        res.status(200).json({
            status: 'success',
            title: data.title,
            thumbnail: data.thumbnail,
            audio: audioData.url
        });
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
    }
}
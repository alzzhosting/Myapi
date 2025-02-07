import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { url } = req.query;
    if (!url) {
        return res.status(400).json({
          error: 'URL Snack Video diperlukan',
          creator: "Kenz Market"
        });
    }

    try {
        const apiUrl = `https://api.itsrose.site/snack?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 'success') {
            return res.status(500).json({ error: 'Gagal mengambil video' });
        }

        res.status(200).json({
            status: 'success',
            video_url: data.result.video_url,
            thumbnail: data.result.thumbnail,
            title: data.result.title
        });
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat fetch data' });
    }
}
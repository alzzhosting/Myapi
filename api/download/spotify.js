import fetch from 'node-fetch';

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
        const apiUrl = `https://api.spotifydown.com/info?url=https://open.spotify.com/track/${q}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data || data.status !== 'success') {
            return res.status(500).json({ error: 'Failed to fetch song info' });
        }

        res.status(200).json({
            title: data.title,
            artist: data.artists.join(', '),
            album: data.album_name,
            cover: data.cover_url,
            audio: data.audio_url
        });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
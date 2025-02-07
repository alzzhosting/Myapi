import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { url } = req.query;
    if (!url) {
        return res.status(400).json({
          error: 'URL IG diperlukan',
          creator: "Kenz Market",
          status: "400"
        });
    }

    try {
        const apiUrl = `https://snapinsta.io/api/ajaxSearch`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ url })
        });

        const data = await response.json();
        if (!data || !data.medias) {
            return res.status(500).json({ error: 'Gagal mengambil media dari Instagram' });
        }

        res.status(200).json({
            status: 'success',
            data: data.medias
        });
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
    }
}
import ytdl from "ytdl-core";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
          error: "Method not allowed",
          creator: "Kenz Market"
        });
    }

    const { url, type } = req.query;
    if (!url) {
        return res.status(400).json({
          error: "URL is required",
          creator: "Kenz Market",
          status: "400"
        });
    }

    try {
        const info = await ytdl.getInfo(url);
        const format = type === "mp3" ? "audioonly" : "videoandaudio";

        res.status(200).json({
            title: info.videoDetails.title,
            download: ytdl.chooseFormat(info.formats, { quality: format }).url
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch video" });
    }
}
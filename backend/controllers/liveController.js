const fetch = require("node-fetch");

// TikTok
exports.checkTiktokLive = async (req, res) => {
    try {
        const url = "https://www.tiktok.com/@soy_wady_rd";

        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const html = await response.text();

        // Detección REAL de live
        const isLive = html.includes('"isLive":true');

        res.json({ live: isLive });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error verificando TikTok" });
    }
};

// Kick
exports.checkKickLive = async (req, res) => {
    try {
        const url = "https://kick.com/soy_wady_rd";

        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        const html = await response.text();

        // Kick es más preciso: usa "live_stream" solo cuando estás en vivo
        const isLive = html.includes("live_stream");

        res.json({ live: isLive });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error verificando Kick" });
    }
};








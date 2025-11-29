const fetch = require("node-fetch");

exports.obtenerStatus = async (req, res) => {
    try {
        // Construir la URL base automáticamente
        const serverURL = `${req.protocol}://${req.get("host")}`;

        const tiktok = await fetch(`${serverURL}/live/tiktok`).then(r => r.json());
        const kick   = await fetch(`${serverURL}/live/kick`).then(r => r.json());

        res.json({
            tiktokLive: tiktok.live,
            kickLive: kick.live
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error obteniendo estado" });
    }
};

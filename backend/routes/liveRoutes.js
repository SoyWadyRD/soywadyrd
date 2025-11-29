const express = require('express');
const router = express.Router();
const { checkTiktokLive, checkKickLive } = require('../controllers/liveController');

router.get('/tiktok', checkTiktokLive);
router.get('/kick', checkKickLive);

module.exports = router;

const express = require('express');
const router = express.Router();
const { obtenerStatus } = require('../controllers/statusController');

router.get('/live', obtenerStatus);

module.exports = router;

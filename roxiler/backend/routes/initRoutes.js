const express = require('express');
const { initializeDatabase } = require('../controllers/initController');
const router = express.Router();

router.post('/', initializeDatabase);

module.exports = router;

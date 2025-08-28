const express = require('express');
const router = express.Router();
const { getRoles } = require('../../controllers/adminControllers');

router.get('/roles', getRoles);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getRoles, getDesignations } = require('../../controllers/adminControllers');

router.get('/roles', getRoles);
router.get('/designations',getDesignations);

module.exports = router;

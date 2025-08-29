const express = require('express');
const router = express.Router();
const { 
    getRoles,
    getDesignations,
    addUpdateClient,
    getClients
} = require('../../controllers/adminControllers');

router.get('/roles', getRoles);
router.get('/designations',getDesignations);
router.get('/clients', getClients);
router.post('/client', addUpdateClient);

module.exports = router;

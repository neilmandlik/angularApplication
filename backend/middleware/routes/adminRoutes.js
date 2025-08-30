const express = require('express');
const router = express.Router();
const { 
    getRoles,
    getDesignations,
    addUpdateClient,
    getClients,
    deleteClient,
    getAllEmployees,
    getAllClientProjects
} = require('../../controllers/adminControllers');

router.get('/roles', getRoles);
router.get('/designations',getDesignations);
router.get('/clients', getClients);
router.post('/addclient', addUpdateClient);
router.delete('/deleteclient/:id',deleteClient)
router.get('/employees',getAllEmployees)
router.get('/clientProjects',getAllClientProjects)

module.exports = router;

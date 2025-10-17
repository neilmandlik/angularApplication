const express = require('express');
const router = express.Router();
const { 
    getRoles,
    getDesignations,
    addUpdateClient,
    getClients,
    deleteClient,
    getAllEmployees,
    getAllClientProjects,
    addClientProject
} = require('../../controllers/adminControllers');
const { authControllers } = require('../../controllers/authControllers');
const { getTodos } = require('../../controllers/todoControllers');

router.get('/roles', getRoles);
router.get('/designations',getDesignations);
router.get('/clients', getClients);
router.post('/clients', addUpdateClient);
router.delete('/clients/:id',deleteClient)
router.get('/employees',getAllEmployees)
router.get('/clientProjects',getAllClientProjects)
router.post('/clientProjects',addClientProject)
router.post('/login',authControllers)
router.get('/todos',getTodos)

module.exports = router;

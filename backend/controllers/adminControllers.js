const roles = require('../models/roles.json'); // Adjust path relative to controllers folder
const desgn = require('../models/designations.json');
const clients = require('../models/clients.json');

const getRoles = (req, res) => {
  res.json(roles);
};

const getDesignations = (req, res) => {
  res.json(desgn)
};

const getClients = (req, res) => {
  // Implementation for getting clients
  res.json(clients);
}

const addUpdateClient = (req, res) => {
  // Implementation for adding or updating a client
  res.send('Client added/updated');
};
module.exports = { 
  getRoles, 
  getDesignations, 
  addUpdateClient,
  getClients};

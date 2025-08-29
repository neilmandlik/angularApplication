const roles = require('../models/roles.json'); // Adjust path relative to controllers folder
const desgn = require('../models/designations.json');
const clients = require('../models/clients.json');

const fs = require('fs');
const path = require('path');

// Path to clients.json (absolute path so fs can write)
const clientsFilePath = path.join(__dirname, '../models/clients.json');

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
  console.log('Add/Update Client called');
  const newClient =req.body
  try{
    const fileData = fs.readFileSync(clientsFilePath);
    const clients = JSON.parse(fileData);

    // Ensure data is an array
    if (!Array.isArray(clients.data)) {
      clients.data = [];
    }

    if(newClient.clientId===0){

      const maxId = clients.data.reduce((max, client) => Math.max(max, client.clientId), 0);
      newClient.clientId = maxId + 1;    

      // Push new client
      clients.data.push(newClient);

      // Write back to file (pretty printed with 2 spaces)
      fs.writeFileSync(clientsFilePath, JSON.stringify(clients, null, 2));

      res.json(clients);
    }else{
      clients.data = clients.data.map((c)=>c.id===newClient.clientId?newClient:c)
    }

  }catch(err){
    console.error('Error updating clients.json:', err);
    res.status(500).json({ error: 'Failed to update clients.json' });
  }
};
module.exports = { 
  getRoles, 
  getDesignations, 
  addUpdateClient,
  getClients
};

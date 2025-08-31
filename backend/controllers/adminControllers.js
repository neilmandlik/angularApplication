const roles = require('../models/roles.json'); // Adjust path relative to controllers folder
const desgn = require('../models/designations.json');
const clients = require('../models/clients.json');
const employees = require('../models/employees.json')
const clientProject = require('../models/client-project.json')

const fs = require('fs');
const path = require('path');

// Path to clients.json (absolute path so fs can write)
const clientsFilePath = path.join(__dirname, '../models/clients.json');
const clientProjectsFilePath = path.join(__dirname,'../models/client-project.json')

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

const getAllEmployees = (req,res) => {
  res.json(employees)
}

const getAllClientProjects = (req,res) =>{
  res.json(clientProject.data)
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

      // Write back to file (pretty printed with 2 spaces
      fs.writeFileSync(clientsFilePath, JSON.stringify(clients, null, 2));
    }else{
      console.log(newClient.clientId===clients.data.find(c=>c.state==="Texas").clientId)

      clients.data = clients.data.map((c)=>c.clientId===newClient.clientId?newClient:c)

      fs.writeFileSync(clientsFilePath, JSON.stringify(clients, null, 2));
    }

    
    res.json(clients);

  }catch(err){
    console.error('Error updating clients.json:', err);
    res.status(500).json({ error: 'Failed to update clients.json' });
  }
};

const deleteClient = (req, res) => {
  // Implementation for deleting a client

  const fileData = fs.readFileSync(clientsFilePath);
  const clients = JSON.parse(fileData);

  clients.data=clients.data.filter(c=>c.clientId!==parseInt(req.params.id))

  fs.writeFileSync(clientsFilePath, JSON.stringify(clients, null, 2));

  res.json(clients);
}

const addClientProject = (req,res) =>{
  const fileData = fs.readFileSync(clientProjectsFilePath)
  const clientProjects = JSON.parse(fileData)
  const newEle = req.body

  if(newEle.clientProjectId===0){
    newEle.clientProjectId = clientProjects.data.reduce((max,ele)=>max = max<ele.clientProjectId?ele.clientProjectId:max,0)+1
    clientProjects.data.push(newEle)
  }
  else{
    clientProjects.data = clientProjects.data(ele=>ele.clientProjectId===newEle.clientProjectId?newEle:ele)
  }

  fs.writeFileSync(clientProjectsFilePath,JSON.stringify(clientProjects,null,2))
  res.json(clientProjects.data)
}

module.exports = { 
  getRoles, 
  getDesignations, 
  addUpdateClient,
  getClients,
  deleteClient,
  getAllEmployees,
  getAllClientProjects,
  addClientProject
};

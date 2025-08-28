const roles = require('../models/roles.json'); // Adjust path relative to controllers folder
const desgn = require('../models/designations.json');

const getRoles = (req, res) => {
  res.json(roles);
};

const getDesignations = (req, res) => {
  res.json(desgn)
};
module.exports = { getRoles, getDesignations };

const roles = require('../models/roles.json'); // Adjust path relative to controllers folder

const getRoles = (req, res) => {
  res.json(roles);
};

module.exports = { getRoles };

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:4201', // Allow requests from Angular app
  credentials: true                // If you need to send cookies/auth
};

module.exports = cors(corsOptions);
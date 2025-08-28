const express = require('express');
const corsMiddleware = require('./middleware/corsAuth/corsOpt');
const app = express();
const rolesRoute = require('./middleware/routes/adminRoutes');
const port = 4202;

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
    }
);

app.use('/api', rolesRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

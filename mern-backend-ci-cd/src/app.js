const express = require('express');
const app = express();
app.use(express.json());

// Minimal health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sample root route
app.get('/', (req, res) => {
  res.send('Hello from MERN backend CI/CD demo!');
});

module.exports = app;

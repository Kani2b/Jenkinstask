const express = require('express');
const app = express();
const PORT = 3001;

// Define a route that returns a 404 status
app.get('/', (req, res) => {
  res.status(404).send('Not Found');
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server;


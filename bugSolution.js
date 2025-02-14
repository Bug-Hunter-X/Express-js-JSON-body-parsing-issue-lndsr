const express = require('express');
const app = express();
app.use(express.json({limit: '50mb'})); // Added limit to handle larger requests
app.post('/user', (req, res) => {
  try {
    console.log(req.body);
    if (!req.body || Object.keys(req.body).length === 0) { 
      return res.status(400).send('Request body is missing or empty.');
    }
    // Process req.body
    res.send('User registered');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON request body');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
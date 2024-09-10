const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Home route for the root path "/"
app.get('/', (req, res) => {
  res.send('Welcome to the OAuth App!');
});

// Callback route for OAuth
app.get('/callback', (req, res) => {
  res.send('OAuth callback received!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
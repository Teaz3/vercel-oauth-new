const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/callback', (req, res) => {
  res.send('OAuth callback received!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
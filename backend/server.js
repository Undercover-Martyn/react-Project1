const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for your React app
app.use(cors());

// Serve the JSON file at one endpoint
app.get('/api/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'movies.json'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

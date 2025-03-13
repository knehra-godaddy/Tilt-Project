const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const {helloWorld} = require('poynt');

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: helloWorld()});
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
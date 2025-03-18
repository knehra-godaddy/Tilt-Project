const express = require('express');
const cors = require('cors');
const {helloWorld} = require('poynt/index');

const app = express();
const port = 3000;

app.use(cors());

app.get('/ping', (req, res) => {
  res.send({ message: helloWorld()});
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
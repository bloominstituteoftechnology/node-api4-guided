const express = require('express');
const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
  res.json('hello, there');
});

server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});

server.listen(9000, () => {
  console.log("\n*** Server Running on http://localhost:9000 ***\n");
});

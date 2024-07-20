
const express = require('express');
const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
  res.json('hello, there');
});

server.get('/goodbye', (req, res) => {
  res.json('Have a good day');
});

server.get('/where', (req, res) => {
  res.json('I am at the store.');
});

server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});


const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

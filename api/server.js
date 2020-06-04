const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.get('/', function (req, res) {
    res.status(200).json({ environment: process.env.NODE_ENV, port: process.env.PORT })
})

server.use('/api', apiRouter);

module.exports = server;

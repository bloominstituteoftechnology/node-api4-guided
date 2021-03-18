const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

server.get('/motd', (req, res) => {
    const motd = process.env.MOTD || "Hello World!";
    res.status(200).json({ motd = motd });
})

module.exports = server;

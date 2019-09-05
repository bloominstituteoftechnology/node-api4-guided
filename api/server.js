const express = require("express");
const helmet = require("helmet");

console.log("environment", process.env.NODE_ENV);

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

server.use("/api", apiRouter);

module.exports = server;

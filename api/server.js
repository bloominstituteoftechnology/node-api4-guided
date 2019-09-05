const express = require("express");
const helmet = require("helmet");

const secrets = require("../config/secrets.js");

console.log("environment", secrets.environment);

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

server.use("/api", apiRouter);

module.exports = server;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const games = require("../games/gamesModel.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

module.exports = server;

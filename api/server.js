const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const db = require("../database/dbConfig");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/games", async (req, res) => {
  try {
    const games = await db("games");
    res.status(200).json({ games: games, message: "YAY" });
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post("/games", async (req, res) => {
  const game = req.body;
  try {
    if (game && game.title && game.genre) {
      newGame = await db("games").insert(game);
      res.status(201).json({ newGame });
    } else {
      res.status(422).json({ message: "missing some things" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = server;

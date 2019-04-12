const db = require("../database/dbConfig.js");

module.exports = {
  insert,
  getAll
};

async function insert(game) {
  const [id] = await db("games").insert(game);

  return db("hobbits")
    .where({ id })
    .first();
}

function getAll() {
  return db("games");
}

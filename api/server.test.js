const request = require("supertest");
const server = require("./server.js");
const db = require("../database/dbConfig.js");

describe("server.js", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

  describe("***** POST *****", () => {
    it("respond with 201 CREATED", async () => {
      const res = await request(server)
        .post("/games")
        .send({ title: "game", genre: "game", releaseDate: 2000 });

      expect(res.status).toBe(201);
    });

    it("Respond with 422 UNPROCESSABLE ENTITY", async () => {
      const res = await request(server)
        .post("/games")
        .send({ title: "game", releaseDate: 2000 });

      expect(res.status).toBe(422);
    });

    it("Respond with 500", async () => {
      const res = await request(server)
        .post("/games")
        .send({ title: "game", releaseDate: 2000 });

      const res2 = await request(server)
        .post("/games")
        .send({ title: "game", genre: "game", releaseDate: 2000 });

      expect(res2.status).toBe(500);
    });
  });
  describe("***** GET *****", () => {
    it("Respond with 200 OK", async () => {
      const res = await request(server).get("/games");

      expect(res.status).toBe(200);
    });

    it("Respond with 404 OK", async () => {
      const res = await request(server).get("/games");

      expect(res.status).toBe(404);
    });

    it("Respond with 500 OK", async () => {
      const res = await request(server).get("/games");

      expect(res.status).toBe(500);
    });
  });
});

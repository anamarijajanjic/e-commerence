import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app.js";
import User from "../models/User";

const api = supertest(app);

test("Ne možemo spremiti novog korisnika ako ne pošaljemo sve potrebne podatke", async () => {
  const newUser = new User({
    username: null, //npr nema usernamea
    email: "ajanjic@pmfst.hr",
    password: "tajna",
  });
  await api.post("/api/authentication/register").send(newUser).expect(500); //ako se korisnik nije uspješno spremio, vraća status 500
});

afterAll(() => {
  mongoose.connection.close();
});

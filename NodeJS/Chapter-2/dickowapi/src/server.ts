import express from "express";

import { createPassword } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Hello world" });
});

app.post("/password/create", createPassword);

app.listen(3333, () => console.log("server is running!"));

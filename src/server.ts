import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Vrrooooom! 🚙💨");
});

app.listen(port, (err?: Error) => {
  if (err) {
    return console.error("Yiikes something exploded:", err);
  }

  console.log(`Server ready on http://localhost:${port} 🤟`);
});

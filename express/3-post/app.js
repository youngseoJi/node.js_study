import express from "express";

const app = express();
// json형식으로 사용하기 위해
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send("Created");
});

app.listen(8080);

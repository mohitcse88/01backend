const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Jai Shri Ram");
});

app.get("/author", (req, res) => {
  res.status(200).json({
    name: "Mohit Kumar",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

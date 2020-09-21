const express = require("express");
require("./db/mongoose");
const path = require("path");
const app = express();
const bodyPaser = require("body-parser");
const cors = require("cors");
var todoRouter = require("./db/router");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyPaser.json());
app.use(express.json());
app.use(todoRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

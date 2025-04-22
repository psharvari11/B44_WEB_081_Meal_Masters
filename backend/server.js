const connect = require("./config/db.js");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome");
});

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to server", err);
    process.exit(1);
  });

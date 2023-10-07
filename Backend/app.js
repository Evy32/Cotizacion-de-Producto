const express = require("express");
const app = express();
const client = require("./config.js");
const cors = require("cors");
const port = 3005

app.use(cors());

app.get("/", (req, res) => {
    client.query("SELECT * FROM product", (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });

client.connect();

app.listen(port, ()=>{console.log("Listening on http://localhost:" + port)})
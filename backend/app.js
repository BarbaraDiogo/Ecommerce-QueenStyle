const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//Db connection
const conn = require("./db/conn");

conn();

app.listen(3333, () => {
    console.log("Server started on port 3333");
  });
  app.get("/", (req, res) => {
    res.send("Servidor rodando!");
  });

  
const Router = require("./routes/router")
app.use(Router);
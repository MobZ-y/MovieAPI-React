const express = require("express");
// const connectDB = require("./config/db");
// const dotenv = require("dotenv").config();
const port = 4000;
const app = express();

// connexion a la DB
// connectDB();
//middleware qui permet de  traiter les données de "Request"
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require("./routes/post.routes"));
//lancer le server
app.listen(port, () => console.log("le serveur a démarré au port: " + port));

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
//app.use(bodyParser.json());
app.use(express.json()); //Used to parse JSON bodies

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shaunbus application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

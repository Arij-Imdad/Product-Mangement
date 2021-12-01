const express = require("express");
const app = express();
var cors = require("cors");

// const db = require("./../models");

const bodyParser = require("body-parser");

//import routes from routers folder

const allRouters = require("./routers");

app.use(bodyParser.json());
app.use(cors());

app.use(allRouters);

app.listen(8000, () => console.log("Listening to the port 8000..."));

// use this only when rumming the project first time to create table in tha DB
// db.sequelize.sync().then((res) => {
//   app.listen(8000, () => console.log("Listening to the port 8000..."));
// });

const express = require("express");
const users = require("./userRoutes")


const app = express();

app.use("/users", users);

module.exports = app;
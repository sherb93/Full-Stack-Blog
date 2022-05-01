const express = require("express");
const api = require("./api");
const homePage = require("./homeRoutes")

const app = express();

app.use("/", homePage);
app.use("/api", api);

module.exports = app;
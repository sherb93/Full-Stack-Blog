const express = require("express");
const sequelize = require("./config/connection");
const { create } = require("express-handlebars");
const routes = require("./controllers");


const app = express();
const hbs = create({});
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, (err) => {
        !err ? console.log(`App running at http://localhost:${PORT}`) : console.log(err);
    })
});
const express = require("express");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, (err) => {
        !err ? console.log(`App running at http://localhost:${PORT}`) : console.log(err);
    })
});
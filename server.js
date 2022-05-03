const express = require("express");
const sequelize = require("./config/connection");
const { create } = require("express-handlebars");
const routes = require("./controllers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const hbs = create({});
const PORT = process.env.PORT || 3001;

// Required options for exp-session. Copy and paste for now.
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 86400000,
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, (err) => {
        !err ? console.log(`App running at http://localhost:${PORT}`) : console.log(err);
    })
});
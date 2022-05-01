const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userSeeds = require("./userData.json");
const postSeeds = require("./postData.json");
const commentSeeds = require("./commentData.json");

const injectData = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeeds);

    // for (const post in postData) {
    //     await Post.create({
    //         ...post,
    //         user_id: users[Math.floor(Math.random() * users.length)].id
    //     });
    // };

    process.exit(0);
}

injectData();
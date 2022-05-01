const sequelize = require("../config/connection"); // Connect mysql login
const { User, Post, Comment } = require("../models");

const userSeeds = require("./userData.json");
const postSeeds = require("./postData.json");
const commentSeeds = require("./commentData.json");

const injectData = async () => {
    await sequelize.sync({ force: true }); // Delete/create tables every time seeds is run

    const users = await User.bulkCreate(userSeeds);

    const posts = []; // Creating posts individually, so we need an array to push them into so the id's can be referenced by the comments

    for (const post of postSeeds) {
        const newPost = await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id
        })

        posts.push(newPost.dataValues); // Adding dataValues to the arr
    };

    for (const comment of commentSeeds) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            post_id: posts[Math.floor(Math.random() * posts.length)].id
        })
    };

    process.exit(0);
}

injectData();
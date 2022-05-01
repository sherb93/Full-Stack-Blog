const router = require("express").Router();
const path = require("path");
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.findAll();
        const serializedPosts = allPosts.map(post => post.get({ plain: true }));

        res.render("home", { serializedPosts });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
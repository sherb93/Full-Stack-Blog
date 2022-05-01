const router = require("express").Router();
const path = require("path");
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
    const posts = await Post.findAll({ include: Comment });

    res.status(200).json(posts);
});


module.exports = router;
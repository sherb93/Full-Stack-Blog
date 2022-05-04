const router = require("express").Router();
const path = require("path");
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"]
                },
                {
                    model: Comment,
                    attributes: ["comment_body"]
                },
            ],
        });

        const serializedPosts = allPosts.map(post => post.get({ plain: true }));

        console.log(serializedPosts); 

        // res.json(serializedPosts);

        res.render("home", {
            serializedPosts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    !req.session.loggedIn
        ? res.render("login")
        : res.redirect("/");
});


module.exports = router;
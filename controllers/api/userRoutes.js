const router = require("express").Router();
const { User } = require("../../models");

router.post("/new-user", async (req, res) => {
    try{
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        })

        req.session.save(() => {
            req.session.loggedIn = true;
        });

        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    };
});



module.exports = router;
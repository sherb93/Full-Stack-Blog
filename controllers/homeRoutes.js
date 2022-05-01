const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.send("This route works");
});


module.exports = router;
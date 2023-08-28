const router = require("express").Router()

router.use("/story", require("./routes/story.routes"))
router.use("/user", require("./routes/user.routes"))

module.exports = router
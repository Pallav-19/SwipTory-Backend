const router = require("express").Router()
const addBookmark = require("../controllers/user/addBookmark")
const getBookmarks = require("../controllers/user/getBookmarks")

router.patch("/addBookmark", addBookmark)
router.get("/getBookmarks", getBookmarks)

module.exports = router
const router = require("express").Router()
const addBookmark = require("../controllers/user/addBookmark")
const getBookmarks = require("../controllers/user/getBookmarks")
const fetchMyStories = require("../controllers/user/fetchMyStories")
const tokenValidator = require("../middlewares/tokenValidator")
router.patch("/addBookmark", tokenValidator, addBookmark)
router.get("/getBookmarks", tokenValidator, getBookmarks)
router.get("/getMyStories", tokenValidator, fetchMyStories)
module.exports = router
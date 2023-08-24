const createStory = require("../controllers/story/createStory")
const fetchStories = require("../controllers/story/fetchStories")
const reactStory = require("../controllers/story/reactStory")
const updateStory = require("../controllers/story/updateStory")
const tokenValidator = require("../middlewares/tokenValidator")

const router = require("express").Router()
router.post("/createStory", tokenValidator, createStory)
router.get("/fetchStories", fetchStories)
router.patch("/react", tokenValidator, reactStory)
router.put("/updateStory", tokenValidator, updateStory)

module.exports = router
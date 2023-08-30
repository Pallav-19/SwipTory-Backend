const Story = require("../../models/stories")

const fetchMyStories = async (req, res) => {
    try {
        const stories = await Story.find({ createdBy: req.user.userId }).populate([{ path: "createdBy", select: "username" }])
        const total = await Story.countDocuments({ createdBy: req.user.userId })
        return res.json({ stories, total, message: "Stories Fetched!" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}

module.exports = fetchMyStories
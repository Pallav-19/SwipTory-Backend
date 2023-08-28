const Story = require("../../models/Story")

const fetchMyStories = async (req, res) => {
    try {
        const stories = await Story.find({ createdBy: req.user.userId }).populate([{ path: "createdBy", select: "username" }])
        return res.json({ stories, total: stories?.length, message: "Stories Fetched!" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}

module.exports = fetchMyStories
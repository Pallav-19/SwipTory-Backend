const Story = require("../../models/Story")

const fetchStories = async (req, res) => {
    try {
        const search = req.query.category ? { category: req.query.category } : {}
        const stories = await Story.find(search).populate([{ path: "createdBy", select: "username" }])
        return res.json({ stories, total: stories?.length, message: "Stories Fetched!" })

    } catch (error) {
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}

module.exports = fetchStories
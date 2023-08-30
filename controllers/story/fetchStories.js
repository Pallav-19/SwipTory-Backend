const Story = require("../../models/stories")

const fetchStories = async (req, res) => {
    try {
        const search = (!req.query.category || req.query.category === "ALL") ? {} : { category: req.query.category }
       
        const total = await Story.countDocuments(search)
        const stories = await Story.find(search).populate([{ path: "createdBy", select: "username" }])
        return res.json({ stories, total, message: "Stories Fetched!" })

    } catch (error) {
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}

module.exports = fetchStories
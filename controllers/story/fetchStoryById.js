const Story = require("../../models/stories")

const fetchStoryById = async (req, res) => {
    try {
        const id = req.params.id;

        const story = await Story.findById(id).populate([{ path: "createdBy", select: "username" }])
        return res.json({ story, message: "Story Fetched!" })

    } catch (error) {
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}

module.exports = fetchStoryById
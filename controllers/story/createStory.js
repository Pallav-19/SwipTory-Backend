const Story = require("../../models/Story")

const createStory = async (req, res) => {

    try {
        if (req.body.stories < 3) return res.status(204).json({ message: "Minimum 3 Stories are required!" })
        stories = (req.body.stories.map(s => ({ ...s, createdBy: req.user.userId })))
        const newStory = await Story.insertMany(stories)
        res.json({ message: "Story created successfully!", result: newStory })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal error occured" })
    }

}
module.exports = createStory
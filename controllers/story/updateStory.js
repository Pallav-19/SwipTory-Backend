const Story = require("../../models/Story")

const updateStory = async (req, res) => {
    try {
        const { heading, description, category, image } = req.body
        const id = req.query.id
        if (!heading || !description || !category || !image) {
            return res.status(204).json({ message: "Contents missing!" })
        }
        const updatedStory = await Story.findByIdAndUpdate(id, { heading: heading, description: description, image: image, category: category }, { new: true })
        res.status(200).json({ message: "Updated Successfully!", story: updatedStory })
    } catch (error) {

    }
}

module.exports = updateStory
const Story = require("../../models/stories");

const createStory = async (req, res) => {
    console.log(req.body);
    try {
        if (req.body.stories.length < 3) {
            return res.status(400).json({ message: "Minimum 3 Stories are required!" });
        }
        const stories = req.body.stories.map((s) => ({ ...s, createdBy: req.user.userId }));
        const newStories = await Story.insertMany(stories);
        const populatedStories = await Story.find({ _id: { $in: newStories.map((story) => story._id) } })
            .populate({ path: "createdBy", select: "username" })
            .exec();

        res.json({ message: "Stories created successfully!", result: populatedStories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal error occurred" });
    }
};

module.exports = createStory;

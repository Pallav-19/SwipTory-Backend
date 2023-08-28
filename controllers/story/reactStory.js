const Story = require("../../models/stories")
const User = require("../../models/user")

const reactStory = async (req, res) => {

    try {
        const id = req.query.id
        let query, query2;
        const likedPosts = await User.findById(req.user.userId).select("likedPosts -_id")
        const isLiked = likedPosts?.likedPosts?.includes(id)
        if (!isLiked) {
            query = { $push: { likedBy: req.user.userId }, $inc: { likes: 1 } }
            query2 = { $push: { likedPosts: id } }
        } else {
            query = { $pull: { likedBy: req.user.userId }, $inc: { likes: -1 } }
            query2 = { $pull: { likedPosts: id } }
        }
        await Story.findByIdAndUpdate(id, query).then(async (result) => {
            await User.findByIdAndUpdate(req.user.userId, query2)
            res.status(200).json({ message: isLiked ? "Disliked Post" : "Liked Post" })

        }).catch(err => res.json({ message: "An error occured!" }))
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal error occured!" })
    }
}
module.exports = reactStory
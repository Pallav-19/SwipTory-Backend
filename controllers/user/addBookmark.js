const User = require("../../models/user")

const addBookmark = async (req, res) => {

    try {
        const id = req.query.id
        if (!id) return res.status(204).json({ message: "No Content!" })
        const foundUser = await User.findById(req.user.userId)
        const query = (foundUser.bookmarks.includes(id)) ? { $pull: { bookmarks: id } } : { $push: { bookmarks: id } }
        const update = await User.findByIdAndUpdate(req.user.userId, query, { new: true }).select("bookmarks likedPosts username _id")
        res.status(200).json({
            message: foundUser.bookmarks.includes(id) ? "Bookmark Removed" : "Bookmark Added", added: !foundUser.bookmarks.includes(id), update
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}
module.exports = addBookmark
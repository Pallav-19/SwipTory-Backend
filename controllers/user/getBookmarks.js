const User = require("../../models/user")

const getBookmarks = async (req, res) => {
    try {
        const bookmarks = await User.findById(req.user.userId).select("bookmarks -_id").populate('bookmarks')
        res.status(200).json({ message: "Bookmarks Fetched!", bookmarks: bookmarks.bookmarks, total: bookmarks?.bookmarks?.length })
    } catch (error) {
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}
module.exports = getBookmarks
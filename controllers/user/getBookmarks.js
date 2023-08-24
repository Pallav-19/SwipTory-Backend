const User = require("../../models/user")

const getBookmarks = async (req, res) => {
    try {
        const bookmarks = await User.findById(req.user.userId).select("bookmarks -_id").populate('bookmarks')
        res.status(200).json({ message: "Bookamrks Fetched!", bookmarks: bookmarks.bookmarks })
    } catch (error) {
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}
module.exports = getBookmarks
const User = require("../../models/user")

const addBookmark = async (req, res) => {

    try {
        const id = req.query.id
        if (!id) return res.status(204).json({ message: "No Content!" })
        await User.findByIdAndUpdate(req.user.userId, { $push: { bookmarks: id } })
        res.status(200).json({ message: "Bookamrk Added!" })
    } catch (error) {
        res.status(500).json({ message: "Internal Error Occured!" })
    }
}
module.exports = addBookmark
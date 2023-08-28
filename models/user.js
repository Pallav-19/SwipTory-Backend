const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, "Username is required!"], unique: [true, "Username exists!"], trim: true },
    password: { type: String, required: [true, "Password is required!"], },
    bookmarks: { type: [mongoose.Types.ObjectId], ref: 'Story' },
    likedPosts: { type: [mongoose.Types.ObjectId], ref: 'Story' },
    deletedAt: { type: Date, default: null },
    refreshToken: { type: String }

}, { timestamps: true })
const User = mongoose.model('User', userSchema)
module.exports = User 
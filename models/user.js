const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, },
    bookmarks: { type: [mongoose.Types.ObjectId], ref: 'Story' },
    likedPosts: { type: [mongoose.Types.ObjectId], ref: 'Story' }
}, { timestamps: true })
const User = mongoose.model('User', userSchema)
module.exports = User
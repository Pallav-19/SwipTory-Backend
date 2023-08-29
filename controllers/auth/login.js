const User = require("../../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
require("dotenv").config()

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).select('username _id password bookmarks likedPosts')

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign({ userId: user._id, username }, process.env.ACCESS_SECRET, { expiresIn: "10s" });
        const refreshToken = jwt.sign({ userId: user._id, username }, process.env.REFRESH_SECRET, { expiresIn: '1d' });

        try {
            await User.findByIdAndUpdate(user._id, { refreshToken });
            res.cookie('jwt', refreshToken, { secure: true, httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None' });
            return res.status(200).json({ message: 'Login successful', token, user: { _id: user._id, username, bookmarks: user.bookmarks, likedPosts: user.likedPosts } });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error!" });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Error!" });
    }
}

module.exports = login;

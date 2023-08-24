const User = require("../../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
require("dotenv").config()
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).select('username _id password')

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        bcrypt.compare(password, user?.password, (err, matched) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            if (!matched) {
                return res.status(401).json({ message: 'Incorrect password' });
            }
            const token = jwt.sign({ userId: user._id, username }, process.env.ACCESS_SECRET, { expiresIn: "1d" })
            return res.status(200).json({ message: 'Login successful', token });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Error!" })
    }

}

module.exports = login
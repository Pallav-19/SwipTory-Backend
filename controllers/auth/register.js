const User = require("../../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {

    try {

        const { username, password } = req.body
        if (!username || !password) res.status(204).json({ message: "Error" })
        const foundUser = await User.findOne({ username })
        if (foundUser) return res.json({ message: "Username Exists!" })
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return res.json({ "message": saltError })
            } else {
                bcrypt.hash(password, salt, async function (hashError, hash) {
                    if (hashError) {
                        return res.json({ message: hashError })
                    } else {

                        const newUser = await User.create({ username, password: hash })
                        const token = jwt.sign({ userId: newUser._id, username: newUser.username }, process.env.ACCESS_SECRET, { expiresIn: '1d' })
                        return res.status(201).json({ message: "Registered Successfully!", token })

                    }
                })
            }
        })

    } catch (error) {
        console.log(error)

        res.status(400).json({ "message": error?.message })
    }
}
module.exports = register
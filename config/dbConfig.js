require("dotenv").config()

const mongoose = require('mongoose')
const connectDB = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URI).then(x => resolve("Connected to atlas")).catch(err => console.log(err))

    })
}
module.exports = connectDB
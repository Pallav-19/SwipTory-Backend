const mongoose = require('mongoose')
const connectDB = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb+srv://pallav:njokWK5sqaMAyBKB@cluster0.fr9ili9.mongodb.net/swiptory?retryWrites=true&w=majority").then(x => resolve("Connected to atlas")).catch(err => console.log(err))

    })
}
module.exports = connectDB
require('dotenv').config()

const express = require('express')
const connectDB = require('./config/dbConfig')
const app = express()

const cors = require('cors')
const corsOptions = require('./config/corsOptions')
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))




const port = process.env.PORT || 6000


app.listen(port, (err) => {
    if (err) return console.log(err);
    connectDB().then(x => console.log(x)).catch(err => console.error(err))
})
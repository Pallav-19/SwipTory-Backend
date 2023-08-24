require('dotenv').config()

const express = require('express')
const connectDB = require('./config/dbConfig')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const authRoutes = require("./routes/auth.routes")
const indexRoutes = require("./index")
const port = process.env.PORT || 8000

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use("/auth", authRoutes)
app.use("/api", indexRoutes)


app.listen(port, (err) => {
    if (err) return console.log(err);
    connectDB().then(x => console.log(x)).catch(err => console.error(err))
})
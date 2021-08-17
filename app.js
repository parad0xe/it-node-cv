// noinspection JSCheckFunctionSignatures
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")

const router = require('./router.js')

const app = express()

mongoose.connect(process.env.MONGO_DSN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database successfully connected")
}).catch(() => {
    console.error("Database connexion failed")
})

app.use(cors())
app.use(express.json())

router.load(app)

module.exports = app

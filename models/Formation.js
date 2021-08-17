const mongoose = require("mongoose")

const schema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("formations", schema)

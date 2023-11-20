const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    author: {
        type: String,
        default: ''
    },
    notes: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('User' , schema)
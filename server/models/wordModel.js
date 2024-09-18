const mongoose = require('mongoose')
const { ObjectId } = require("mongodb");

const wordSchema = new mongoose.Schema(
    {
       
        word: {
            type: String,
            required: true,
        },
        artikel: {
            type: String,                     
        },
        plural: {
            type: String,
        },
        turkish: {
            type: String,
            required: true,
        },
        specialPhrase: {
            type: String,
        },
        photolink: {
            type: String,
        },
        processTime: {type: Date}

    }
)


const worterbuch = mongoose.model('worterbuches', wordSchema);

module.exports = worterbuch;
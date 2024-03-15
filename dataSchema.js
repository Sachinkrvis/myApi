const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    }

})
module.exports = mongoose.model("CompassSurfer", DataSchema)
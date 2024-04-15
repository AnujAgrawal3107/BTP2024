const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNumbers: [{
        type: String,
        required: true,
    }],
    sportsFields: [{
        type: String,
        required: true,
    }],
    dealStatus: {
        type: String,
        enum: ['done', 'pending'],
        required: true,
    }
});

module.exports = mongoose.model("College", collegeSchema);

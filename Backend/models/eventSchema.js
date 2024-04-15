const mongoose = require("mongoose");

const coordinatorSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    }
});

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    coordinator: {
        type: coordinatorSchema,
        required: true,
    }
});

module.exports = mongoose.model("Event", eventSchema);

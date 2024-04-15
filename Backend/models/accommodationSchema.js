const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
    bh1VacantRooms: {
        type: Number,
        required: true,
    },
    bh2VacantRooms: {
        type: Number,
        required: true,
    },
    bh3VacantRooms: {
        type: Number,
        required: true,
    },
    ghVacantRooms: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Accommodation", accommodationSchema);

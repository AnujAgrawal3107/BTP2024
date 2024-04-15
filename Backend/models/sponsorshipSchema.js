const mongoose = require("mongoose");

const sponsorshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactDetails: {
        type: String,
        required: true,
    },
    lastContactedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    remarks: {
        type: String,
        required: true,
    },
    dealStatus: {
        type: String,
        enum: ['done', 'pending'],
        required: true,
    }
});

module.exports = mongoose.model("Sponsorship", sponsorshipSchema);

const mongoose = require("mongoose");

const logisticSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    services: [{
        type: String,
        enum: ['lighting', 'production', 'baricading', 'bouncer', 'decoration', 'tenting'],
        required: true,
    }],
    dealStatus: {
        type: String,
        enum: ['done', 'pending'],
        required: true,
    }

});

module.exports = mongoose.model("Logistic", logisticSchema);

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
   
    accountType: {
        type: String,
        enum: ["FestHead", "Coremember", "PRHead","SponsorshipHead","LogisticHead","AccomodationHead","EventHead"],
        required: true,
    },
    token: {
        type: String,
    }
    
});

module.exports = mongoose.model("user", userSchema)
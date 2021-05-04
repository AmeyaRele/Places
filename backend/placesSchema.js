const mongoose = require("mongoose");
const placesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    photo: {
        type: String,
    },
    timetoVisit: {
        type: String,
    },
});

module.exports = Places = mongoose.model("places", placesSchema);

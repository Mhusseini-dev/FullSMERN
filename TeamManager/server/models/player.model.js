const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, "Name must be at least 2 characters"]
    },
    preferredPosition: {
        type: String,
        default: "n/a"
    }
})

module.exports = mongoose.model("Player", PlayerSchema);

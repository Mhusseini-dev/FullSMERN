const mongoose = require('mongoose');
const CountrySchema = new mongoose.Schema({
    name: { type: String },
    required: [true, "country name is required"],
    minlength: [3, "book name must be at least 3  characters"],


}, { timestamps: true });
module.exports.Country = mongoose.model('Country', CountrySchema);


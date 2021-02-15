const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Author must have a name"],
        minlength: [3, "Name must be at least 3  characters"],
        maxlength: [50, "Name must be less than 50 characters"]
    }

}, { timestamps: true });
module.exports.Book = mongoose.model('Book', BookSchema);


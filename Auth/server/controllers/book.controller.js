const { Book } = require("../models/book.model");

module.exports.findAllBooks = (request, response) => {
    Book.find()
        .then(allBooks => response.json({Book: allBooks}))
        .catch(err => response.json({ message: "error msg", error: err}))
};

module.exports.findOneBook = (request, response) => {
    Book.find({_id: request.params.id})
        .then(oneBook => response.json({ Book: oneBook}))
        .catch(err => response.json({ message: "error msg", error: err}));
};

module.exports.createBook = (request, response) => {
    const { name } = request.body;
    Book.create({
        name,
    })
        .then(book => response.json(book))
        .catch(err => response.status(400).json(err))
};

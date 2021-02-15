const UserController = require("../controllers/book.controller");

module.exports = (app) =>{
    app.get("/api/book", UserController.findAllBooks);
    app.post("/api/books", UserController.createBook);
    app.get("/api/book/:id", UserController.findOneBook);
}

const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get("/api/players", PlayerController.findAll);
    app.post("/api/players/new", PlayerController.create);
    app.delete("/api/players/delete/:id", PlayerController.delete);
}

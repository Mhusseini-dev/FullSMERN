const Player = require("../models/player.model");

module.exports.findAll = (_req, res) => {
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    let {name, preferredPosition} = req.body;
    preferredPosition === "" && (preferredPosition = undefined);
    Player.create({name: name, preferredPosition: preferredPosition})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) => {
    const {id} = req.params;
    Player.findByIdAndDelete(id)
        .then(() => res.json({success: true}))
        .catch(err => res.json({error: err}));
}

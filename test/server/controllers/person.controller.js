const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: " hey there!"
    })
}
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(people => response.json(people))
        .catch(err => response.json(err))
}
module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}


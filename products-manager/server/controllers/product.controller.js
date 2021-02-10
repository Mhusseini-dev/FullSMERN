const { Product } = require('../models/product.model');
module.exports.all = (request, response) => {
    Product.find({})
    .then(allproduct => response.json(allproduct))
    .catch(err => response.json({message: "oh oh ", error:err}));
}
module.exports.createProduct = (request, response) => {
    const { title,price,description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

const ProductModel = require('../models/product');

exports.createProduct = (req, res, next) => {
    const product = new ProductModel({
        ...req.body
    });

    product.save()
        .then(product => res.status(201).json({ product }))
        .catch(error => res.status(400).json({ error }));
    
    console.log('CreateProduct : ' + res.statusCode);
};

exports.getAllProducts = (req, res, next) => {

    ProductModel.find()
        .then(products => res.status(200).json({products: products}))
        .catch(error => res.status(400).json({ error }));

    console.log('getAllProducts ' + res.statusCode);
};

exports.getOneProductById = (req, res, next) => {
    ProductModel.findOne({ _id: req.params.id })
        .then(product => res.status(200).json({product: product}))
        .catch(error => res.status(404).json({ error }));

    console.log('getOneProductById ' + res.statusCode);
};

exports.addOnProduct = (req, res, next) => {
    ProductModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Modified!'}))
        .catch(error => res.status(400).json({ error }));

    console.log('addOnProduct ' + res.statusCode);
};

exports.removeOneProductById = (req, res, next) => {
    ProductModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Deleted!'}))
        .catch(error => res.status(400).json({ error }));   
        
    console.log('removeOneProductById ' + res.statusCode); 
};
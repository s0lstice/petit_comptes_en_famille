const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes definitions
const productsRoutes = require('./routes/product');

// App definitions
const app = express();
app.use(morgan('combined'));

// Security configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// BdD configurtion and connection
mongoose.connect('mongodb://127.0.0.1/nodejstest',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));




app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(' ####### BEGIN ######## ');   
    console.log('URL : ' + req.originalUrl);   
    console.log(req.body);          
    next();
  });

app.use('/api/products', productsRoutes);

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});

module.exports = app;
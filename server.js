const express = require('express');
//const mongose = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB 
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true,useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));



app.listen(3001);
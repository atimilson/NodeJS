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

// primeira rota
app.get('/',(req,res) => {
   Product.create({
      titulo : 'React Native', 
      descricao : 'Aplicativos em react',
      url : 'https://github.com/atimilson?tab=repositories',
   });

   res.send('ola planeta');
})

app.listen(3001);
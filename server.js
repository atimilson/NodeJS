const express = require('express');
const mongose = require('mongodb').MongoClient;

// Iniciando o App
const app = express();

// Iniciando o DB 
mongose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true });

// primeira rota
app.get('/',(req,res) => {
   res.send('ola planeta');
})

app.listen(3001);
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// neste momento ja se tem um servidor, porem ele está mudo, não ouve 
// nenhum endereço.
const server = express();

mongoose.connect('mongodb+srv://tindev:AgCTDTp3VoDySgGP@cluster0-lpzif.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser:true
});

server.use(express.json());
// serve para quando queremos colocar algum tipo de configuração 
// que está em outro arquivo.
server.use(routes);
//serve para ouvir uma porta no servidor por assim dizer
server.listen(3333);

//M - Model , V - View , C - Controller


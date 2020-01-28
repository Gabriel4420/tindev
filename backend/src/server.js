const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// neste momento ja se tem um servidor, porem ele está mudo, não ouve 
// nenhum endereço.
const server = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-lpzif.mongodb.net/test?retryWrites=true&w=majority')

server.use(express.json());
// serve para quando queremos colocar algum tipo de configuração 
// que está em outro arquivo.
server.use(routes);
//serve para ouvir uma porta no servidor por assim dizer
server.listen(3333);
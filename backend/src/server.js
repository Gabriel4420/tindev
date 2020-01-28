const express = require('express');
const routes = require('./routes');

// neste momento ja se tem um servidor, porem ele está mudo, não ouve 
// nenhum endereço.
const server = express();
// serve para quando queremos colocar algum tipo de configuração 
// que está em outro arquivo.
server.use(routes);
//serve para ouvir uma porta no servidor por assim dizer
server.listen(3333);
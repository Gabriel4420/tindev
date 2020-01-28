const express = require('express');
// neste momento ja se tem um servidor, porem ele está mudo, não ouve 
// nenhum endereço.
const server = express();
//operações de request e response 
server.get('/',(req,res) => {
    var name = req.query.name;

    res.json({message:`Hello ${name}`});
});


//serve para ouvir uma porta no servidor por assim dizer
server.listen(3333);
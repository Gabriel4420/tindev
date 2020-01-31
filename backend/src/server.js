const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// neste momento ja se tem um servidor, porem ele está mudo, não ouve 
// nenhum endereço.
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers  ={};

io.on('connection', socket => {
    // console.log('conectou',socket.id);
    // connectedUsers[ID_USUARIO] = socket.id;
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});
//metodo para conectar ao banco de dados 
mongoose.connect('mongodb+srv://tindev:AgCTDTp3VoDySgGP@cluster0-lpzif.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser:true
});

app.use((req,res,next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

//os recursos abaixo listados são midwares
app.use(cors());
app.use(express.json());
// serve para quando queremos colocar algum tipo de configuração 
// que está em outro arquivo.
app.use(routes);
//serve para ouvir uma porta no servidor por assim dizer
server.listen(3333);

//M - Model , V - View , C - Controller

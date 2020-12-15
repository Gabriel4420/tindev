//importando o axios 
const axios = require('axios');
//importando o model de devs
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
           $and : [
               { _id: { $ne: user}},
               { _id: { $nin: loggedDev.likes}},
               { _id: { $nin: loggedDev.deslikes}},
           ],
        });

        return res.json(users);
    },

    async store(req,res){
        //obtendo o atributo username do metodo post da requisição.
        const { username } =  req.body;

        // constante que verifica se o usuario ja existe
        const userExists = await Dev.findOne({user:username});

        // Não deixa criar novamente, usuarios que ja existem
        if (userExists) {
            return res.json(userExists);
        }

        // captando a url de retorno
        const response = await axios.get(`https://api.github.com/users/${ username }`);

        /* usando destructering para captação de atributos da url e 
        envio ao response.data */
        const { name, bio, avatar_url:avatar} = response.data;
        
        //cadastrando usuario apartir do username 
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar,
        });

        return res.json(dev);
    }
};
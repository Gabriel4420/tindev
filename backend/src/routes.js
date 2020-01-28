const express = require('express');

const routes = express.Router();


//operações de request e response 
routes.get('/',(req,res) => {
    var name = req.query.name;

    res.json({message:`Hello ${name}`});
});

//operações de cadastro

routes.post('/devs', (req,res) => {
    return res.json(req.body);
});

module.exports = routes;
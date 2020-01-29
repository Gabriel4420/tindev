const express = require('express');
const devController = require('./controllers/DevController');
const likeController = require('./controllers/LikeController');
const deslikeController = require('./controllers/disLikeController');
const routes = express.Router();



//operações de request e response 
/* routes.get('/',(req,res) => {
    var name = req.query.name;

    res.json({message:`Hello ${name}`});
}); */

//operações de cadastro sem controller

/* routes.post('/devs', (req,res) => {
    return res.json(req.body);
}); */
routes.get('/devs',devController.index);
//operações de cadastro com controller
routes.post('/devs',devController.store);
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/deslikes', deslikeController.store);
module.exports = routes;
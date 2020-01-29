const axios = require('axios');
module.exports = {
    async store(req,res){
        console.log(req.body.username);

        const { username } =  req.body;
        return res.json({ok:true});
    }
};
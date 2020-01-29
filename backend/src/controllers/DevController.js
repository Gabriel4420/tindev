const axios = require('axios');
module.exports = {
    async store(req,res){
        
        const { username } =  req.body;
        
        const response = axios.get(`https://api.github.com/users/${ username }`);
        return res.json({ok:true});
    }
};
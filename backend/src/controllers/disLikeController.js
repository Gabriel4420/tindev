const Dev = require('../models/Dev');
module.exports = {
    async store(req,res){
        // console.log(req.params.devId);
        // console.log(req.headers.user);
        
        // id de quem recebeu o like
        const { devId } = req.params;

        //id de quem esta dando like --usuario logado
        const { user } = req.headers;

        /* guardam a instancia do banco de dados dos usuarios
        dando acesso a todas as informações dos usuarios que 
        participam dessa interação de likes. */
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // verifica se o targetDev não existe
        if(!targetDev)
            return res.status(400).json({error:'Dev not exists'});

        
        /* Salvando o like do usuario logado, usando a forma que o mongo utiliza para salvar
        no DB */
        loggedDev.deslikes.push(targetDev._id);
        // metodo que salva o like do usuario logado, no banco de dados
        await loggedDev.save();
        // HTTP Codes - start with 400 , usuario informou algo errado, bad request
        return res.json(loggedDev);
    }
};
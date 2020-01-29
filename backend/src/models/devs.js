// maneira mais facil de importar dependencias 

const { Schema, model } = require('mongoose');

const Devschema = new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    bio:String,
    avatar:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

module.exports = model('dev',Devschema);

//createdAt, updateAt
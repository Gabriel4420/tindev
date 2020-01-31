// maneira mais facil de importar dependencias 

const { Schema, model } = require('mongoose');

const Devschema = new Schema({
    name:{
        type:String
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
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'Dev'
    }],
    deslikes:[{
        type:Schema.Types.ObjectId,
        ref:'Dev'
    }]
},{
    timestamps:true
});

module.exports = model('Dev', Devschema);

//createdAt, updateAt
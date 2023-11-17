//Esqueleto da tela do login do usuario
const mongoose = require("mongoose")

const {Schema} = mongoose

const {registerSchema} = require("./Register")

const loginSchema = new Schema({
    nome_usuario:{
        type: String,
        require: true,
    },
    senha:{
        type: String,
        require: true,
    },
},
{timestamps: true}
);

const login = mongoose.model("Login", loginSchema);

module.exports = login;

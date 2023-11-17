//Esqueleto da tela de Cadastro do usuário
const mongoose = require('mongoose');

const { Schema } = mongoose;

const registerSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    genero:{
        type: String
    },
    telefone:{
        type: String,
        require: true,
    },
    endereco_email:{
        type: String,
        require: true,
    },
    cpf:{
        type: String,
        require: false,
    },
    cnpj:{
        type: String,
        require: false,
    },
    endereco_entrega:{
        type: String,
        require: true,
    },
    nome_usuario:{
        type: String,
        require: true,
    },
    senha:{
        type: String,
        require: true,
    },
    confirmacao_senha:{
        type: String,
        require: true,
    },
},
{timestamps:true}, //Salva a data de cração do registro ou de atualização
);

const Register = mongoose.model("Register", registerSchema);

module.exports = {
    Register,
    registerSchema,
};
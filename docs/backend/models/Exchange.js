//Esqueleto da tela de troca de roupa
const mongoose = require('mongoose');

const { Schema } = mongoose;

const exchangeSchema = new Schema({
    email:{ 
        type: String,
        require: true,
    },
    descripion:{ 
        type: String,
        require: true,
    },
    time_use:{ 
        type: Number,
        require: true,},
    period:{
        type: String,
        require: true,
    },
    fabric_type:{
        type: String,
        require: true,
    },
    exchange:{
        type: String,
        require: true,
    },
    photo:{
        type: String,
        require: true,
    },
});

const Exchange = mongoose.model("Exchange", exchangeSchema);

module.exports = {
    Exchange,
    exchangeSchema,
};
//Configuração do banco de dados da aplicação
const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://ayslans75:PYdOvzLNqcvWwEJL@cluster0.z0zbwru.mongodb.net/?retryWrites=true&w=majority");
        console.log("database connected");
    } catch (err) {
        console.log(`error connecting to database: ${err}`);
    }
}
module.exports = main;

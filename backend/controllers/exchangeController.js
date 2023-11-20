const {Exchange: exchangeModel} = require("../models/Exchange");

const exchangeController = {

    create: async(req, res) =>{
        try {
            const exchangeClothing = new exchangeModel(req.body)
            
            //Salva a instância no banco de dados
            const response = await exchangeClothing.save();
            
            // Envia uma resposta de sucesso
            res.status(201).json({ response, msg: "Successfully forwarded data" });
            console.log("Successfully forwarded data");
        } catch (error) {
            // Envia uma resposta de erro
            res.status(500).json({ error: error.message });
            console.log("Error", error.message);
        }
    }

};

module.exports = exchangeController;
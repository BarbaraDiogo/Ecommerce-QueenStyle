const {Register: RegisterModel} = require("../models/Register");

const registerController = {
    
    create: async(req, res) => {
        try {
            const registerUser = new RegisterModel(req.body)
            if(!registerUser.cnpj && !registerUser.cpf){
                throw new Error("Pfvr insira ou cnpj ou cpf")
            }else{
                const response = await registerUser.save();
                res.status(201).json({response, msg:"User register successfully"});
            }
            //inserindo o objeto no banco de dados
        } catch (error) {
            console.log(error)
        }       
    },
    getID:async (req, res) => {
        try {
            const id = req.params.id;
            
            // Verifique se o ID é válido antes de consultar o banco de dados
            if (id == null) {
                return res.status(400).json({ error: 'ID inválido' });
            }

            const register = await RegisterModel.findById(id);

            if (!register) {
                return res.status(404).json({ error: 'Registro não encontrado' });
            }

            res.json(register);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }

    }
};

module.exports = registerController;
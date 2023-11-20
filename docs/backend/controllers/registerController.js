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

    },
    login: async (req, res) => {
        try {
          const { nome_usuario, senha } = req.body;
    
          // Verifique se o usuário existe na base de dados
          const user = await RegisterModel.findOne({ nome_usuario });
    
          if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
          }
    
          // Verifique se a senha está correta
          if (user.senha !== senha) {
            return res.status(401).json({ error: 'Senha incorreta' });
          }
    
          // Se o usuário existe e a senha está correta, você pode gerar um token de autenticação
          // ou qualquer lógica adicional de controle de acesso.
          // Por exemplo, você pode usar JWT (JSON Web Token) para gerar um token.
    
          // Exemplo com JWT:
          // const token = jwt.sign({ userId: user._id }, 'seuSegredo');
          
          // Agora, você pode enviar o token ou redirecionar para a página principal, etc.
          res.json({ message: 'Login bem-sucedido', user });
    
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Erro interno do servidor' });
        }
      },
};

module.exports = registerController;
// //controllers/loginController.js


// const Register = require('../models/Register');
// const mongoose = require("mongoose");
// const login = require('../models/login');
// const {Login: loginModel} = require('../models/login');

// const loginController = {
//     login: async (req, res) => {
//         try{
//             const{username, password} = req.body;
            

//             console.log(username);
//             console.log(password);

//             //Verifique se o usuário existe na base de dados
//             const user = await Register.findOne({username});

//             if(!user) {
//                 return res.status(401).jason({error:'Usuário não encontrado'});
//             }

//             //Verifique se a senha está correta
//             if(user.password !== password){
//                 return res.status(401).jason({erro:'Senha inválida'});
//             }
//             res.jason({Message:'Login bem sucedido', user});

//         } catch (error) {
//             console.log(error);
//             res.status(500).jason({erro:'Senha inválida'});
//         }
//     }
// }

// module.exports = loginController;

// controllers/loginController.js


const Register = require('../models/Register');


const loginController = {
  login: async (req, res) => {
    try {
      const { nome_usuario, senha } = req.body;

      // Verifique se o usuário existe na base de dados
      const user = await Register.findOne({ nome_usuario });

      if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado' });
      }

      // Verifique se a senha está correta
      if (user.password !== password) {
        return res.status(401).json({ error: 'Senha inválida' });
      }

      res.json({ Message: 'Login bem-sucedido', user });

    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  }
};

module.exports = loginController;
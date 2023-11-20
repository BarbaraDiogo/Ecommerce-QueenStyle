const express = require("express");

const registerController = require("../controllers/registerController");
const exchangeController= require("../controllers/exchangeController");
const router = express.Router();

//tela de cadastro
router.post("/register", registerController.create);

//tela de verificar o cadastro
router.get("/register/:id", registerController.getID);

//tela de login
router.post("/login", registerController.login);

//tela de troca de roupa
router.post("/exchange", exchangeController.create);

module.exports = router;
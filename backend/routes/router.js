const express = require("express");

const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const router = express.Router();

//tela de cadastro
router.post("/register", registerController.create);

//tela de verificar o cadastro
router.get("/register/:id", registerController.getID);

//tela de login
router.post("/login", loginController.login);

module.exports = router;
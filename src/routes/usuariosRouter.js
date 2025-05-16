const express = require('express');
const router = express.router;
const UsuarioController = require('../controllers/usuarioController');

router.post('/', UsuarioController.cadastrarUsuario);

module.exports = router;
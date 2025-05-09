const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

/**
 * Rota para listar os produtos
 */
router.get('/', produtoController.listar);

/**
 * Rota para retornar um produto por id
 */
router.get('/:id', produtoController.buscarPorId)

/**
 * Rota para cadastrar um novo produto
 */
router.post('/', produtoController.criar);

/**
 * Rota para atualizar um produto
 */
router.put('/:id', produtoController.atualizar);

/**
 * Rota para deletar um produto
 */
router.delete('/:id', produtoController.deletar);

module.exports = router;

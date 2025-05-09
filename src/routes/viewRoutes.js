const express = require('express');
const router  = express.Router();
const Produto = require('../models/produto');

router.get('/', async (req,res)=>{
    try{
        const produtos = await Produto.find()
        res.render('index',{produtos})
    } catch (erro) {
        res.status(500).send("Erro ao carregar produtos")
    }
})

router.get('/novoProduto', (req, res) => {
    res.render('formularioProduto'); // nome do arquivo EJS, Pug ou outro que exibe o formulário
});


module.exports = router;
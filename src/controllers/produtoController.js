const Produto = require('../models/produto')

//GET /produtos
exports.listar = async (req,res) =>{
    const produtos = await Produto.find();
    res.json(produtos);
};

//GET /produtos/:id
exports.buscarPorId = async (req,res) =>{
    const produto = await Produto.findById(req.params.id)
    if(!produto) return res.status(404).send('Produto não encontrado')
    res.json(produto);
};

//POST /produto
exports.criar = async (req,res) =>{
    const {nome, preco, imagem} = req.body;
    const novo = await Produto.create({nome, preco, imagem});
    res.status(201).json(novo);
}

//PUT /produto/:id
exports.atualizar = async (req,res) =>{
    const produto = await Produto.findById(req.params.id)
    if(!produto) return res.status(404).send("Produto não encontrado")

    /*const {nome, preco} = req.body;
    produto.nome = nome
    produto.preco = preco
    produto.save()*/

    await produto.updateOne(req.body)
    res.json(produto)
}

//DELETE /produtos/:id
exports.deletar = async (req,res) =>{
    const produto = await Produto.findById(req.params.id)
    if(!produto) return res.status(404).send("Produto não encontrado")
    
    await produto.deleteOne();
    res.sendStatus(204);
}
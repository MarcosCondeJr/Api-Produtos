const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  imagem: { type: String} 
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;
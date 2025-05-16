const Usuario = require('../models/usuarios');

exports.cadastrarUsuario = async (req, res) => {
    const { login, senha } = req.body;

    if (!login || !senha ) return res.status(404).send({error: "Login e senha são obrigatórios."});

    try {
        const novoUsuario = new Usuario({login, senha});
        await novoUsuario.save();

        res.status(201).send({message: "Usuário cadastrado com sucesso."});
    } catch (err) {
        console.error(err.message)
        res.status(500).json({error: "Erro ao cadastrar usuário."})
    }
};
const Usuario = require('../models/usuarios');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    const { login, senha} = req.body;

    if (!login || !senha ) return res.status(404).send({error: "Login e senha são obrigatórios."});
    
    try {
        const usuario = await Usuario.find({login, senha});

        if (!usuario) return res.status(401).json({error:"Credenciais inválidas!"});

        const token = jwt.sign({id: usuario.id, login: usuario.login}, process.env.SECRET, {
            expiresIn: "1h",
        });

        res.json({token})
    } catch (err) {
        console.error(err.message)
        res.status(500).json({error: "Erro ao gerar o token do usuário"})
    }
}
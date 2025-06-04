const express = require('express')
const conectarDB = require('./config/database')
const rotasProduto = require('./routes/produtosRouter')
const rotasView = require('./routes/viewRoutes')
const rotasUsuario = require('./routes/usuariosRouter')
const rotasAuth = require('./routes/authRouter')
const autenticarToken = require('./middleware/auth');
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth',rotasAuth)
app.use('/usuario',rotasUsuario)
app.use('/produtos', autenticarToken, rotasProduto)
app.use('/', rotasView)

app.set('view engine','ejs')

conectarDB();

app.listen(port,()=>{ 
    console.log(`Servidor rodando em http://127.0.0.1:${port}`)
});

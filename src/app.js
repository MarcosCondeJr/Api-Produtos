const express = require('express')
const conectarDB = require('./config/database')
const rotasProduto = require('./routes/produtosRouter')
const rotasView = require('./routes/viewRoutes')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/produtos',rotasProduto)
app.use('/', rotasView)

app.set('view engine','ejs')

conectarDB();

app.listen(port,()=>{ 
    console.log(`Servidor rodando em http://127.0.0.1:${port}`)
});

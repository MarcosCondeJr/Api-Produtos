const mongoose = require('mongoose');

const conectarDB = async () => {
    try  {
        await mongoose.connect("mongodb+srv://marcoscjunior:179026@cluster0.hssk9ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('MongoDb conectado');
    } catch (err) {
        console.log('Erro ao se comuinicar com o banco de dados', err);
    }
};

module.exports = conectarDB;
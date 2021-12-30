//Arquivo responsavel por subir o sistema 

//Express Framework responsavel por fornecer a base do servidor
const express = require('express')

//Importando o arquivo router, por padrão, já é selecionado o index.js, em que as configurações dos metodos estão armazenadas.
const routes = require('./routes')

//Express sendo estacionado na constante app
const app = express()
//utilizando a porta 3000
const port = 3000

//Constante routes com as configurações dos metodos recebendo como parametro o app com express.
routes(app)

//App ouvindo na porta 3000 e enviando uma mensagem de que o servidor está on
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app
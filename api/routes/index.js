
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoutes')
const turmas = require('./turmaRoutes')
const niveis = require('./nivelRouter')

//separando a variável app do index principal da aplicação para em seguida, ser exportada.
module.exports = app =>{
    //Recebendo o bodyParser para transformar os arquivos recebidos em Json
    //recebendo o Router de rotas específicas com seus respectivos metódos.
    app.use(
    bodyParser.json(), 
    bodyParser.urlencoded({extended: false}),
    pessoas,
    turmas,
    niveis)
}
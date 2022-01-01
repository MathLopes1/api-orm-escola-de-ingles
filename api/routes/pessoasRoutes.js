const {Router} = require('express')
//Importando o arquivo pessoa controller com o metodo que irá executar ações no banco de dados
const PessoaController = require('../controllers/PessoaController')

const router = Router()

//Fazendo uma requisição get trazendo os conteudos armazenados no banco de dados, através do metodo pega todas as pessoas
router.get('/pessoas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
//Requisição para pehar uma pessoa através do metodo pegar uma pessoa
.get('/pessoas/:id', PessoaController.pegarUmaPessoa)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegarMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegarMatriculasPorTurma)
//Requisição para criar uma nova pessoa
.post('/pessoas', PessoaController.criarPessoa)
//Requisição para atualizar uma pessoa por id
.put('/pessoas/:id', PessoaController.atualizarPessoa)
//Requisição para deletar pessoa por id
.delete('/pessoas/:id', PessoaController.apagarPessoa)
//Requisição para pegar uma matricula
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
//Requisição para criar uma matrícula
.post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
//Requisição para Atualizar uma matricula
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
//Requisição para apagar uma matricula
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)
//Restaurando Pessoas que foram ocultadas 
.post('/pessoas/:id/restaurar', PessoaController.restauraPessoa)




module.exports = router
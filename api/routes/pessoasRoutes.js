const {Router} = require('express')
//Importando o arquivo pessoa controller com o metodo que irá executar ações no banco de dados
const PessoaController = require('../controllers/PessoaController')

const router = Router()

//Fazendo uma requisição get trazendo os conteudos armazenados no banco de dados, através do metodo pega todas as pessoas
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
//Requisição para pehar uma pessoa através do metodo pegar uma pessoa
router.get('/pessoas/:id', PessoaController.pegarUmaPessoa)
//Requisição para criar uma nova pessoa
router.post('/pessoas', PessoaController.criarPessoa)
//Requisição para atualizar uma pessoa por id
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
//Requisição para deletar pessoa por id
router.delete('/pessoas/:id', PessoaController.apagarPessoa)


module.exports = router
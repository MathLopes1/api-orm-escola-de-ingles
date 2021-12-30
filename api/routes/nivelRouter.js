//routes/niveisRoute.js

const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
 .get('/niveis', NivelController.pegarTodosOsNiveis)
 .get('/niveis/:id', NivelController.pegarUmNivel)
 .post('/niveis', NivelController.criarNivel)
 .put('/niveis/:id', NivelController.atualizarNivel)
 .delete('/niveis/:id', NivelController.apagarNivel)
module.exports = router
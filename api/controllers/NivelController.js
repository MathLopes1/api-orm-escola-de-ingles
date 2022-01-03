//Importando nosso modelo do banco de dados
const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('niveis')

class NivelController {
    static async pegarTodosOsNiveis(req, res){
        try{
            const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
            return res.status(200).json(todosOsNiveis)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegarUmNivel(req, res){
        const IdNivel = req.params.id
        try {
            const umNivel = await database.niveis.findOne({where: {id: Number(IdNivel)} })
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarNivel(req, res){
        const novoNivel = req.body
        try {
            const novoNivelCriado = await database.niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizarNivel(req, res){
        const IdNivel = req.params.id
        const novasInfos = req.body
        try {
            await database.niveis.update(novasInfos, {where: {id: Number (IdNivel)}})
            const nivelAtualizado = await database.niveis.findOne({where: {id: Number(IdNivel)} })
            return res.status(200).json(nivelAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagarNivel(req, res){
        const IdNivel = req.params.id
        try {
            await database.niveis.destroy({where: {id: Number(IdNivel)}})
            return res.status(200).json({mensagem: `O nivel com id ${IdNivel} foi apagado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)    
        }
    }
}

module.exports = NivelController
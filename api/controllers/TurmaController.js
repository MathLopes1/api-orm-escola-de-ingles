//Importando nosso modelo do banco de dados
const { Op } = require('sequelize')
const database = require('../models')

class TurmaController {
    static async pegaTodasAsTurmas(req, res){
        const { data_inicial, data_final} = req.query
        const where = {}
        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ?  where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null
        try{
            const todasAsTurmas = await database.Turmas.findAll({where})
            return res.status(200).json(todasAsTurmas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegarUmaTurma(req, res){
        const IdTurma = req.params.id
        try {
            const umaTurma = await database.Turmas.findOne({where: {id: Number(IdTurma)} })
            return res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarTurma(req, res){
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizarTurma(req, res){
        const idTurma = req.params.id
        const novasInfos = req.body
        try {
            await database.Turmas.update(novasInfos, {where: {id: Number (idTurma)}})
            const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(idTurma)} })
            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagarTurma(req, res){
        const idTurma = req.params.id
        try {
            await database.Turmas.destroy({where: {id: Number(idTurma)}})
            return res.status(200).json({mensagem: `Turma com id ${idTurma} foi apagada com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)    
        }
    }
}

module.exports = TurmaController
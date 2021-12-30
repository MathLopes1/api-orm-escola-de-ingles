//Exportando nosso modelo pessoas do banco de dados
const database = require('../models')

//Classe de controlador para a table pessoas dentro do banco de dados
class PessoaController {
    //Metodo estático para pegar todas as informações do modelo de tabela pessoas e enviar para o nosso GET
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    //Metodo estático para pegar apenas uma pessoa por id
    static async pegarUmaPessoa(req, res){
        const IdPessoa = req.params.id
        try {
            const umaPessoa = await database.pessoas.findOne({where: {id: Number(IdPessoa)} })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo estático para criar uma Pessoa no banco de dados
    static async criarPessoa(req, res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo para atualizar uma pessoa por id no banco de dados
    static async atualizarPessoa(req, res){
        const idPessoa = req.params.id
        const novasInfos = req.body
        try {
            await database.pessoas.update(novasInfos, {where: {id: Number (idPessoa)}})
            const pessoaAtualizada = await database.pessoas.findOne({where: {id: Number(idPessoa)} })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo para apagar pessoa por id
    static async apagarPessoa(req, res){
        const idPessoa = req.params.id
        try {
            await database.pessoas.destroy({where: {id: Number(idPessoa)}})
            return res.status(200).json({mensagem: `Pessoa com id ${idPessoa} foi apagada com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)    
        }
    }
}

module.exports = PessoaController
//Exportando nosso modelo pessoas do banco de dados
const database = require('../models')

//Classe de controlador para a table pessoas dentro do banco de dados
class PessoaController {
    //Metodo estático para pegar todas as informações da tabela pessoas com escopo "todos"
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.pessoas.scope('todos').findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Pegando pessoas ativas
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await database.pessoas.findAll()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo estático para pegar apenas uma pessoa por id
    static async pegarUmaPessoa(req, res) {
        const IdPessoa = req.params.id
        try {
            const umaPessoa = await database.pessoas.findOne({ where: { id: Number(IdPessoa) } })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo estático para criar uma Pessoa no banco de dados
    static async criarPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo para atualizar uma pessoa por id no banco de dados
    static async atualizarPessoa(req, res) {
        const idPessoa = req.params.id
        const novasInfos = req.body
        try {
            await database.pessoas.update(novasInfos, { where: { id: Number(idPessoa) } })
            const pessoaAtualizada = await database.pessoas.findOne({ where: { id: Number(idPessoa) } })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Metodo para apagar pessoa por id
    static async apagarPessoa(req, res) {
        const idPessoa = req.params.id
        try {
            await database.pessoas.destroy({ where: { id: Number(idPessoa) } })
            return res.status(200).json({ mensagem: `Pessoa com id ${idPessoa} foi apagada com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // rota pessoas/:estudanteId/matricula/:matriculaId - pegando uma matricula por id matricula e id estudante
    static async pegarUmaMatricula(req, res) {
        //Guardando os dois parametros do end point nas constantes
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId), //id referencia ao campo na tabela de matriculas
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Restaurando pessoas ocultadas através do paranoid
    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            await database.pessoas.restore(
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Criando uma nova matricula - Rota: pessoas/:estudanteId/matricula
    static async criarMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Atualizando uma matricula
    static async atualizarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                },
            })
            const matriculaAtualizada = await database.pessoas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json({ mensagem: `Matricula com id  ${matriculaId} foi apagada com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const pessoa = await database.pessoas.findOne({ where: { id: Number(estudanteId) } })
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController
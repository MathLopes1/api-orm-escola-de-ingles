//Modelo de tabela Pessoas.
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {

    static associate(models) {
      pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      })
      pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: {status: 'confirmado'},
        as: 'aulasMatriculadas'
      })

    }
  };
  pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length < 3) throw new Error('o campo deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválidos'
        }
      }
    },
    role: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'pessoas',
      paranoid: true,
      //Escopo padrão para pegar informações de pessoas específicas
      defaultScope: {
        where: { ativo: true }
      },
      //Escopos definidos
      scopes: {
        todos: { where: {} },
      }
    }
  )
  return pessoas;
};
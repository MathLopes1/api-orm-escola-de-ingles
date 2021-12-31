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
        foreignKey: 'estudante_id'
      })

    }
  };
  pessoas.init({
    nome: DataTypes.STRING,
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
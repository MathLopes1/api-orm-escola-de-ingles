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
    email: DataTypes.STRING,
    role: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'pessoas',
      paranoid: true,
      defaultScope: {
        where: { ativo: true }
      }
    }
  )
  return pessoas;
};
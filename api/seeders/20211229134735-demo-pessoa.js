'use strict';

//Uma Seed, ou seja, um arquvido semente para enviar os arquivos para a nossa tabela de destino, ou seja, internamente está ocorrendo um insert into.
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Cintra',
        ativo: true,
        email: 'marcos@marcos.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Felipe Cardoso',
        ativo: true,
        email: 'felipe@felipe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sandra Gomes',
        ativo: false,
        email: 'sandra@sandra.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Paula Morais',
        ativo: true,
        email: 'paula@paula.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sergio Lopes',
        ativo: true,
        email: 'sergio@sergio.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('niveis', 'deletedAt',{
          allowNull: true,
          type: Sequelize.DATE
      });
    },
    down: async (queryInterface) => {
      await queryInterface.removeColumn('niveis', 'deletedAt');
    }
  };
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return await queryInterface.createTable('Historicos', {

      id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      colaboradorId: {

        type: Sequelize.INTEGER,
          allowNull: false,
          references: {

            model: 'Colaboradores',
            key: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
      },
      cargos: {

        type: Sequelize.STRING,
      },
      dataInicio: {

        type: Sequelize.DATE,
        allowNull: false
      },
      dataFim: {

        type: Sequelize.DATE
      },
      createdAt: {

        type: Sequelize.DATE
      },
      updatedAt: {

        type: Sequelize.DATE
      },
      deletedAt: {

        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Historicos')
  }
};

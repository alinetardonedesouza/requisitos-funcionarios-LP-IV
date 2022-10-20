'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('Feedbacks', {

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
      data: {

        type: Sequelize.DATE,
      },
      pontosPositivos: {

        type: Sequelize.STRING,
      },
      pontosNegativos: {

        type: Sequelize.STRING
      },
      acoesEsperadas: {

        type: Sequelize.STRING
      },
      metas: {

        type: Sequelize.STRING,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Feedbacks')
  }
};

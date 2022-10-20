'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return await queryInterface.createTable('Colaboradores', {

      id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      telefone: {

        type: Sequelize.INTEGER(11),
      },
      nome: {

        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {

        type: Sequelize.STRING
      },
      nascimento: {

        type: Sequelize.DATE
      },
      email: {

        type: Sequelize.STRING,
        validate: {

          isEmail: {

            args: true,
            msg: "E-mail inválido."
          }
        }
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
    await queryInterface.dropTable('Colaboradores')
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return await queryInterface.createTable('Usuarios', {

      id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

          isEmail: {

            args: true,
            msg: "E-mail inválido."
          }
        }
      },
      senha: {

        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Usuarios')
  }
};

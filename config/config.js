const config = require('./environment.config')

let sequelizeConfig = {

    username: config.DB_USER,
    password: config.DB_PWD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: config.DB_DIALECT,
    logging: false,

    dialectOptions: {

        multipleStatements: true
    }
}

module.exports = sequelizeConfig
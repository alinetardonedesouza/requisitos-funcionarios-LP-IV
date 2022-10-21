const config = require('dotenv').config()

const env = config.parsed ?? process.env

module.exports = {
    DB_USER: env.DB_USER,
    DB_PWD: env.DB_PWD,
    DB_NAME: env.DB_NAME,
    DB_HOST: env.DB_HOST,
    DB_PORT: env.DB_PORT,
    DB_DIALECT: env.DB_DIALECT,
    SERVER_PORT: env.PORT,
    TOKEN_KEY: env.TOKEN_KEY
}
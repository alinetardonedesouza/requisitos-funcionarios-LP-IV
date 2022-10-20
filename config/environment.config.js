const config = require('dotenv').config()

const env = config.parsed ?? process.env

module.exports = {
    
    // MONGO_URL: env.MONGO_URL,
    // MONGO_DATABASE: env.MONGO_DATABASE,
    SERVER_PORT: env.PORT
}
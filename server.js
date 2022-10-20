const config = require('./config/environment.config')
// const mongoose = require("mongoose")
const express = require('express')
const cors = require('cors')
// const swaggerUi = require("swagger-ui-express")
// const swaggerDocs = require("./swagger.json")

const routes = require('./src/app/routes')

let app = express()

const port = config.SERVER_PORT

class App {

  constructor() {

    this.middlewares()
    this.server()
  }

  middlewares() {

    app.use(cors())
    app.use(express.json({ limit: '100mb' }))
    // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

    routes(app)
  }
  server() {

    const server = app.listen(port, () => {
      console.log(`|== Aplicação rodando na porta ${port} ==|`)
    })
    //Finaliza a aplicação
    process.on('SIGINT', () => {
      server.close()
      console.log("|== Aplicação finalizada ==|")
    });
  }
}

module.exports = new App()
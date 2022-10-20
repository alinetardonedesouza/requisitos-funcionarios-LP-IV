const config = require('./config/environment.config')
const database = require("./src/database/config")
const mongoose = require("mongoose")
const express = require('express')
const cors = require('cors')
// const morgan = require('morgan')
// const swaggerUi = require("swagger-ui-express")
// const swaggerDocs = require("./swagger.json")

const routes = require('./src/app/routes')

let app = express()
// const app = require('./app')

const port = config.SERVER_PORT

class App {

  constructor() {

    this.middlewares()
    this.server()
    // this.database()
  }

  middlewares() {

    app.use(cors())
    app.use(express.json({ limit: '100mb' }))
    // app.use(morgan('dev'))
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

//   database() {

//     mongoose.connect(database.uri, { useNewUrlParser: true })
//       .then(() => {

//         console.log("|== MongoDB is running ==|")

//       }).catch((err) => {

//         console.log(`Houve um erro no mongoDB: ${err}`)
//       })
//   }

}

module.exports = new App()
const usuarioRoute = require('../modules/usuarios/usuarios.routes')
const colaboradorRoute = require('../modules/colaboradores/colaboradores.routes')
// const historicoRoute = require('../modules/catalogs/catalog.routes')
// const feedbackRoute = require('../modules/categories/category.routes')

module.exports = app => {

    app
        .use('/colaboradores', colaboradorRoute)
        .use('/usuarios', usuarioRoute)
        // .use('/historico', historicoRoute)
        // .use('/feedbacks', feedbackRoute)
}
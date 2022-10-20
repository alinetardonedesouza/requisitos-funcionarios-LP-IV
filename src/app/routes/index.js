const usuarioRoute = require('../modules/usuarios/usuarios.routes')
const colaboradorRoute = require('../modules/colaboradores/colaboradores.routes')
const historicoRoute = require('../modules/historico/historico.routes')
const feedbackRoute = require('../modules/feedbacks/feedbacks.routes')

module.exports = app => {

    app
        .use('/colaboradores', colaboradorRoute)
        .use('/usuarios', usuarioRoute)
        .use('/historico', historicoRoute)
        .use('/feedbacks', feedbackRoute)
}
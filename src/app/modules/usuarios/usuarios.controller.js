const business = require('./usuarios.business')
// const logger = require("../../../../logger")
class clsUsuarios {

    static async criaUsuario(req, res) {

        try {

            const { usuario } = req.body

            if (!usuario) return res.status(400).send("Parâmetros não enviados.")

            let usuarioCriado = await business.criaUsuario(usuario)
            
            logger.info(`usuario criado: ${usuarioCriado}`)
            return res.status(201).json(usuarioCriado)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaUsuario(req, res) {

        try {

            const { usuario } = req.body
            const { usuarioId } = req.params

            if (!usuario || !usuarioId) return res.status(400).send("Parâmetros não enviados.")

            let usuarioEditado = await business.editaUsuario(usuarioId, usuario)

            logger.info(`usuario editado: ${usuarioEditado}`)

            return res.status(200).json(usuarioEditado)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async excluiUsuario(req, res) {

        try {

            const { usuarioId } = req.params

            if (!usuarioId) return res.status(400).send("Parâmetros não enviados.")

            let usuarioExcluido = await business.excluiUsuario(usuarioId)

            logger.info(`usuario excluído: ${usuarioExcluido}`)

            return res.status(200).json(usuarioExcluido)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaUsuarios(req, res) {

        try {

            let usuarios = await business.listaUsuarios()

            return res.status(200).json(usuarios)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaUsuarioPorId(req, res) {

        try {

            const { usuarioId } = req.params

            let usuario = await business.listaUsuarioPorId(usuarioId)

            return res.status(200).json(usuario)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsUsuarios

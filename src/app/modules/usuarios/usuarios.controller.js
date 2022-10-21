const business = require('./usuarios.business')
class clsUsuarios {

    static async criaUsuario(req, res) {

        try {

            const { usuario } = req.body

            if (!usuario || !usuario.email || !usuario.senha) return res.status(400).send("Parâmetros não enviados.")

            let usuarioCriado = await business.criaUsuario(usuario)
            
            return res.status(201).json(usuarioCriado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
    static async login(req, res) {

        try {

            const { usuario } = req.body

            if (!usuario || !usuario.email || !usuario.senha) return res.status(400).send("Parâmetros não enviados.")

            let usuarioLogado = await business.login(usuario)
            
            return res.status(201).json(usuarioLogado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaUsuario(req, res) {

        try {

            const { usuario } = req.body
            const { usuarioId } = req.params

            if (!usuario || !usuarioId) return res.status(400).send("Parâmetros não enviados.")

            let usuarioEditado = await business.editaUsuario(usuarioId, usuario)

            return res.status(200).json(usuarioEditado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async excluiUsuario(req, res) {

        try {

            const { usuarioId } = req.params

            if (!usuarioId) return res.status(400).send("Parâmetros não enviados.")

            let usuarioExcluido = await business.excluiUsuario(usuarioId)

            return res.status(200).json(usuarioExcluido)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaUsuarios(req, res) {

        try {

            let usuarios = await business.listaUsuarios()

            return res.status(200).json(usuarios)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaUsuarioPorId(req, res) {

        try {

            const { usuarioId } = req.params

            let usuario = await business.listaUsuarioPorId(usuarioId)

            return res.status(200).json(usuario)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsUsuarios

const repositories = require('./usuarios.repositories')
const { errors } = require('../../services/error.service.js')
const config = require('../../../../config/environment.config')


const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.criaUsuario = async (usuario) => {

    try {

        senhaEncriptada = await bcrypt.hash(usuario.senha, 10)

        let user = {

            email: usuario.email,
            senha: senhaEncriptada
        }

        const usuarioCriado = await repositories.create(user)

        const token = jwt.sign(
            { userId: usuarioCriado.id, email: usuarioCriado.email },
            config.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        user.token = token;

        if (!usuarioCriado) {

            throw errors.internalServerError(`Houve um erro ao cadastrar um usuario`)
        }

        return usuarioCriado

    } catch (error) {

        throw error
    }
}
exports.login = async (usuario) => {

    try {

        const user = await repositories.findByEmail(usuario.email)

        if (user && (await bcrypt.compare(usuario.senha, user.senha))) {

            const token = jwt.sign(
                { userId: user.id, email: user.email },
                config.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            )

            user.token = token

            return user
        }

        throw errors.Unauthorized(`Credenciais inválidas.`)

    } catch (error) {

        throw error
    }
}

exports.editaUsuario = async (usuarioId, usuario) => {

    try {

        const usuarioEditado = await repositories.update(usuarioId, usuario)

        if (!usuarioEditado) {

            throw errors.internalServerError(`Houve um erro ao editar o usuario`)
        }

        return usuarioEditado

    } catch (error) {

        throw error
    }
}

exports.excluiUsuario = async (usuarioId) => {

    try {

        const usuarioExcluido = await repositories.delete(usuarioId)

        if (!usuarioExcluido) {

            throw errors.internalServerError(`Houve um erro ao excluir o usuario.`)
        }

        return usuarioExcluido

    } catch (error) {

        throw error
    }
}

exports.listaUsuarios = async () => {

    try {

        const usuarios = await repositories.find()

        if (!usuarios) {

            throw errors.notFound(`Nenhum usuario foi encontrado`)
        }

        return usuarios

    } catch (error) {

        throw error
    }
}

exports.listaUsuarioPorId = async (usuarioId) => {

    try {

        const usuario = await repositories.findOne(usuarioId)

        if (!usuario) {

            throw errors.notFound(`Nenhum usuario foi encontrado`)
        }

        return usuario

    } catch (error) {

        throw error
    }
}
const repositories = require('./usuarios.repositories')
const { errors } = require('../../services/error.service.js')

exports.criaUsuario = async (usuario) => {

    try {

        const usuarioCriado = await repositories.create(usuario)

        if (!usuarioCriado) {

            throw errors.internalServerError(`Houve um erro ao cadastrar um usuario`)
        }

        return usuarioCriado

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

        const usuario = await repositories.find({id: usuarioId})

        if (!usuario) {

            throw errors.notFound(`Nenhum usuario foi encontrado`)
        }

        return usuario

    } catch (error) {

        throw error
    }
}
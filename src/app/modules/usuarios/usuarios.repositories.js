const { Usuarios } = require('../../../../models/index')

exports.create = async (usuario) => {

    return await Usuarios.create(usuario)
}

exports.update = async (usuarioId, usuario) => {

    return await Usuarios.update(usuario, { where: { id: usuarioId } })
}

exports.delete = async (usuarioId) => {

    return await Usuarios.destroy({ where: { id: usuarioId } })
}

exports.find = async (filter) => {

    return await Usuarios.findAll(filter)
}

exports.findOne = async (usuarioId) => {

    return await Usuarios.findOne({ where: { id: usuarioId } })
}

exports.findByEmail = async (email) => {

    return await Usuarios.findOne({ where: { email } })
}
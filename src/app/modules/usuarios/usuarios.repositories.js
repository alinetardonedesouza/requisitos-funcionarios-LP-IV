const { Usuarios } = require('../../../../models/index')

exports.create = async (usuario) => {
    
    return await Usuarios.create(usuario)
}

exports.update = async (usuarioId, usuario) => {
    
    return await Usuarios.update(usuarioId, usuario)
}

exports.delete = async (usuarioId) => {

    return await Usuarios.delete(usuarioId)
}

exports.find = async (filter) => {

    return await Usuarios.find({ filter })
}
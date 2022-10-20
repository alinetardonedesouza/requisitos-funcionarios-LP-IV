const { Colaboradores } = require('../../../../models/index')

exports.create = async (colaborador) => {
    
    return await Colaboradores.create(colaborador)
}

exports.update = async (colaboradorId, colaborador) => {
    
    return await Colaboradores.update(colaboradorId, colaborador)
}

exports.delete = async (colaboradorId) => {

    return await Colaboradores.delete(colaboradorId)
}

exports.find = async (filter) => {

    return await Colaboradores.find({ filter })
}
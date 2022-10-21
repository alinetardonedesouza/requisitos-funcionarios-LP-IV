const { Colaboradores, Historicos, Feedbacks } = require('../../../../models/index')

exports.create = async (colaborador) => {

    return await Colaboradores.create(colaborador)
}

exports.update = async (colaboradorId, colaborador) => {

    return await Colaboradores.update(colaborador, { where: { id: colaboradorId } })
}

exports.delete = async (colaboradorId) => {

    return await Colaboradores.destroy({ where: { id: colaboradorId } })
}

exports.find = async (filter) => {

    return await Colaboradores.findAll(filter)
}

exports.findOne = async (colaboradorId) => {

    return await Colaboradores.findOne({ where: { id: colaboradorId } })
}
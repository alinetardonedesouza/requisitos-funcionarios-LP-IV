const { Historicos, Colaboradores } = require('../../../../models/index')

exports.create = async (historico) => {

    return await Historicos.create(historico)
}

exports.update = async (historicoId, historico) => {

    return await Historicos.update(historico, { where: { id: historicoId } })
}

exports.delete = async (historicoId) => {

    return await Historicos.destroy({ where: { id: historicoId } })
}

exports.find = async (filter) => {

    return await Historicos.findAll(filter)
}

exports.findOne = async (historicoId) => {

    return await Historicos.findOne({where: { id: historicoId }})
}
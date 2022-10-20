const { Historicos } = require('../../../../models/index')

exports.create = async (historico) => {
    
    return await Historicos.create(historico)
}

exports.update = async (historicoId, historico) => {
    
    return await Historicos.update(historicoId, historico)
}

exports.delete = async (historicoId) => {

    return await Historicos.delete(historicoId)
}

exports.find = async (filter) => {

    return await Historicos.find({ filter })
}
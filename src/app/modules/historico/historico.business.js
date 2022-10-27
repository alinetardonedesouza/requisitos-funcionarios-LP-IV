const repositories = require('./historico.repositories')
const colaboradorRepositories = require('../colaboradores/colaboradores.repositories')
const { errors } = require('../../services/error.service.js')
const utils = require('../../services/utils.service')


exports.criaHistorico = async (historico) => {

    try {

        historico.dataInicio = utils.dateToDatabaseFormat(historico.dataInicio)
        historico.dataFim = utils.dateToDatabaseFormat(historico.dataFim)

        const historicoCriado = await repositories.create(historico)

        const atualizaColaborador = await colaboradorRepositories.update(historico.colaboradorId, {cargoAtual: historicoCriado.cargos})

        if (!historicoCriado || !atualizaColaborador) {

            throw errors.internalServerError(`Houve um erro ao cadastrar um historico`)
        }

        return historicoCriado

    } catch (error) {

        throw error
    }
}

exports.editaHistorico = async (historicoId, historico) => {

    try {

        historico.dataInicio = utils.dateToDatabaseFormat(historico.dataInicio)
        historico.dataFim = utils.dateToDatabaseFormat(historico.dataFim)
        
        const historicoEditado = await repositories.update(historicoId, historico)

        if (!historicoEditado) {

            throw errors.internalServerError(`Houve um erro ao editar o historico`)
        }

        return historicoEditado

    } catch (error) {

        throw error
    }
}

exports.excluiHistorico = async (historicoId) => {

    try {

        const historicoExcluido = await repositories.delete(historicoId)

        if (!historicoExcluido) {

            throw errors.internalServerError(`Houve um erro ao excluir o historico.`)
        }

        return historicoExcluido

    } catch (error) {

        throw error
    }
}

exports.listaHistoricos = async () => {

    try {

        const historicos = await repositories.find({})

        for (let historico of historicos) {
            
            if (historico.dataInicio) {
                historico.dataValues.dataInicio = utils.dateToBRFormat(historico.dataInicio)
            }
            if (historico.dataFim) {
                historico.dataValues.dataFim = utils.dateToBRFormat(historico.dataFim)
            }
        }

        if (!historicos) {

            throw errors.notFound(`Nenhum historico foi encontrado`)
        }

        return historicos

    } catch (error) {

        throw error
    }
}

exports.listaHistoricoPorId = async (historicoId) => {

    try {

        const historico = await repositories.findOne(historicoId)
        
        if (!historico) {

            throw errors.notFound(`Nenhum historico foi encontrado`)
        }
        
        if (historico.dataInicio) {
            historico.dataValues.dataInicio = utils.dateToBRFormat(historico.dataInicio)
        }

        if (historico.dataFim) {
            historico.dataValues.dataFim = utils.dateToBRFormat(historico.dataFim)
        }

        return historico

    } catch (error) {

        throw error
    }
}
exports.listaHistoricoPorColaborador = async (colaboradorId) => {

    try {

        const historicos = await repositories.find({ colaboradorId })

        for (let historico of historicos) {
            
            if (historico.dataInicio) {
                historico.dataValues.dataInicio = utils.dateToBRFormat(historico.dataInicio)
            }
            if (historico.dataFim) {
                historico.dataValues.dataFim = utils.dateToBRFormat(historico.dataFim)
            }
        }

        if (!historicos) {

            throw errors.notFound(`Nenhum historico foi encontrado`)
        }

        return historicos

    } catch (error) {

        throw error
    }
}
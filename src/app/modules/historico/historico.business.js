const repositories = require('./historico.repositories')
const { errors } = require('../../services/error.service.js')

exports.criaHistorico = async (historico) => {

    try {

        const historicoCriado = await repositories.create(historico)

        if (!historicoCriado) {

            throw errors.internalServerError(`Houve um erro ao cadastrar um historico`)
        }

        return historicoCriado

    } catch (error) {

        throw error
    }
}

exports.editaHistorico = async (historicoId, historico) => {

    try {

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

        return historico

    } catch (error) {

        throw error
    }
}
exports.listaHistoricoPorColaborador = async (colaboradorId) => {

    try {

        const historicos = await repositories.find({ colaboradorId })

        if (!historicos) {

            throw errors.notFound(`Nenhum historico foi encontrado`)
        }

        return historicos

    } catch (error) {

        throw error
    }
}
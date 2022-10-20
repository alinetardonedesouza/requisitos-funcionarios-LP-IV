const repositories = require('./feedbacks.repositories')
const { errors } = require('../../services/error.service.js')

exports.criaFeedback = async (feedback) => {

    try {

        const feedbackCriado = await repositories.create(feedback)

        if (!feedbackCriado) {

            throw errors.internalServerError(`Houve um erro ao cadastrar um feedback`)
        }

        return feedbackCriado

    } catch (error) {

        throw error
    }
}

exports.editaFeedback = async (feedbackId, feedback) => {

    try {

        const feedbackEditado = await repositories.update(feedbackId, feedback)

        if (!feedbackEditado) {

            throw errors.internalServerError(`Houve um erro ao editar o feedback`)
        }

        return feedbackEditado

    } catch (error) {

        throw error
    }
}

exports.excluiFeedback = async (feedbackId) => {

    try {

        const feedbackExcluido = await repositories.delete(feedbackId)

        if (!feedbackExcluido) {

            throw errors.internalServerError(`Houve um erro ao excluir o feedback.`)
        }

        return feedbackExcluido

    } catch (error) {

        throw error
    }
}

exports.listaFeedbacks = async () => {

    try {

        const feedbacks = await repositories.find()

        if (!feedbacks) {

            throw errors.notFound(`Nenhum feedback foi encontrado`)
        }

        return feedbacks

    } catch (error) {

        throw error
    }
}

exports.listaFeedbackPorId = async (feedbackId) => {

    try {

        const feedback = await repositories.find({id: feedbackId})

        if (!feedback) {

            throw errors.notFound(`Nenhum feedback foi encontrado`)
        }

        return feedback

    } catch (error) {

        throw error
    }
}
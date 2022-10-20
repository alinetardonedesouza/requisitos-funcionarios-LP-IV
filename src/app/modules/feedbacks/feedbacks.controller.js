const business = require('./feedbacks.business')
class clsFeedbacks {

    static async criaFeedback(req, res) {

        try {

            const { feedback } = req.body

            if (!feedback) return res.status(400).send("Parâmetros não enviados.")

            let feedbackCriado = await business.criaFeedback(feedback)
            
            return res.status(201).json(feedbackCriado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaFeedback(req, res) {

        try {

            const { feedback } = req.body
            const { feedbackId } = req.params

            if (!feedback || !feedbackId) return res.status(400).send("Parâmetros não enviados.")

            let feedbackEditado = await business.editaFeedback(feedbackId, feedback)

            return res.status(200).json(feedbackEditado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async excluiFeedback(req, res) {

        try {

            const { feedbackId } = req.params

            if (!feedbackId) return res.status(400).send("Parâmetros não enviados.")

            let feedbackExcluido = await business.excluiFeedback(feedbackId)

            return res.status(200).json(feedbackExcluido)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaFeedbacks(req, res) {

        try {

            let catalogs = await business.listaFeedbacks()

            return res.status(200).json(catalogs)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaFeedbackPorId(req, res) {

        try {

            const { feedbackId } = req.params

            let feedback = await business.listaFeedbackPorId(feedbackId)

            return res.status(200).json(feedback)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsFeedbacks

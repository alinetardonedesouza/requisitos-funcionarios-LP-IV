const business = require('./colaboradores.business')
// const logger = require("../../../../logger")
class clsColaboradores {

    static async criaColaborador(req, res) {

        try {

            const { colaborador } = req.body

            if (!colaborador) return res.status(400).send("Parâmetros não enviados.")

            let colaboradorCriado = await business.criaColaborador(colaborador)
            
            logger.info(`Colaborador criado: ${colaboradorCriado}`)
            return res.status(201).json(colaboradorCriado)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaColaborador(req, res) {

        try {

            const { colaborador } = req.body
            const { colaboradorId } = req.params

            if (!colaborador || !colaboradorId) return res.status(400).send("Parâmetros não enviados.")

            let colaboradorEditado = await business.editaColaborador(colaboradorId, colaborador)

            logger.info(`Colaborador editado: ${colaboradorEditado}`)

            return res.status(200).json(colaboradorEditado)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async excluiColaborador(req, res) {

        try {

            const { colaboradorId } = req.params

            if (!colaboradorId) return res.status(400).send("Parâmetros não enviados.")

            let colaboradorExcluido = await business.excluiColaborador(colaboradorId)

            logger.info(`Colaborador excluído: ${colaboradorExcluido}`)

            return res.status(200).json(colaboradorExcluido)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaColaboradores(req, res) {

        try {

            let catalogs = await business.listaColaboradores()

            return res.status(200).json(catalogs)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaColaboradorPorId(req, res) {

        try {

            const { colaboradorId } = req.params

            let colaborador = await business.listaColaboradorPorId(colaboradorId)

            return res.status(200).json(colaborador)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsColaboradores

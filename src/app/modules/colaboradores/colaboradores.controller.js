const business = require('./colaboradores.business')
class clsColaboradores {

    static async criaColaborador(req, res) {

        try {

            const { colaborador } = req.body

            if (!colaborador) return res.status(400).send("Parâmetros não enviados.")

            let colaboradorCriado = await business.criaColaborador(colaborador)
            
            return res.status(201).json(colaboradorCriado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaColaborador(req, res) {

        try {

            const { colaborador } = req.body
            const { colaboradorId } = req.params

            if (!colaborador || !colaboradorId) return res.status(400).send("Parâmetros não enviados.")

            let colaboradorEditado = await business.editaColaborador(colaboradorId, colaborador)

            return res.status(200).json(colaboradorEditado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async excluiColaborador(req, res) {

        try {

            const { colaboradorId } = req.params

            if (!colaboradorId) return res.status(400).send("Parâmetros não enviados.")

            let colaboradorExcluido = await business.excluiColaborador(colaboradorId)

            return res.status(200).json(colaboradorExcluido)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaColaboradores(req, res) {

        try {

            let catalogs = await business.listaColaboradores()

            return res.status(200).json(catalogs)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaColaboradorPorId(req, res) {

        try {

            const { colaboradorId } = req.params

            let colaborador = await business.listaColaboradorPorId(colaboradorId)

            return res.status(200).json(colaborador)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsColaboradores

const business = require('./historico.business')
class clsHistorico {

    static async criaHistorico(req, res) {

        try {

            const { historico } = req.body

            if (!historico) return res.status(400).send("Parâmetros não enviados.")

            let historicoCriado = await business.criaHistorico(historico)
            
            return res.status(201).json(historicoCriado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaHistorico(req, res) {

        try {

            const { historico } = req.body
            const { historicoId } = req.params

            if (!historico || !historicoId) return res.status(400).send("Parâmetros não enviados.")

            let historicoEditado = await business.editaHistorico(historicoId, historico)

            return res.status(200).json(historicoEditado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async excluiHistorico(req, res) {

        try {

            const { historicoId } = req.params

            if (!historicoId) return res.status(400).send("Parâmetros não enviados.")

            let historicoExcluido = await business.excluiHistorico(historicoId)

            return res.status(200).json(historicoExcluido)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaHistoricos(req, res) {

        try {

            let catalogs = await business.listaHistoricos()

            return res.status(200).json(catalogs)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async listaHistoricoPorId(req, res) {

        try {

            const { historicoId } = req.params

            let historico = await business.listaHistoricoPorId(historicoId)

            return res.status(200).json(historico)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsHistorico

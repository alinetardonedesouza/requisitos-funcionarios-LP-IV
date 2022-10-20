const express = require('express')
const router = express.Router()

const historicoController = require('./historico.controller')

router.post('/', historicoController.criaHistorico)
router.put('/:feedbackId', historicoController.editaHistorico)
router.delete('/:feedbackId', historicoController.excluiHistorico)
router.get('/', historicoController.listaHistoricos)
router.get('/:feedbackId', historicoController.listaHistoricoPorId)

module.exports = router
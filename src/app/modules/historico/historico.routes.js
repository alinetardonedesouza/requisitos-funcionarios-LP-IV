const express = require('express')
const router = express.Router()

const historicoController = require('./historico.controller')

router.post('/', historicoController.criaHistorico)
router.put('/:historicoId', historicoController.editaHistorico)
router.delete('/:historicoId', historicoController.excluiHistorico)
router.get('/', historicoController.listaHistoricos)
router.get('/:historicoId', historicoController.listaHistoricoPorId)
router.get('/colaborador/:colaboradorId', historicoController.listaHistoricoPorColaborador)

module.exports = router
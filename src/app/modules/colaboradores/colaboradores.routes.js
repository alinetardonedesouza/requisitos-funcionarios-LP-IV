const express = require('express')
const router = express.Router()

const colaboradorController = require('./colaboradores.controller')

router.post('/', colaboradorController.criaColaborador)
router.put('/:colaboradorId', colaboradorController.editaColaborador)
router.delete('/:colaboradorId', colaboradorController.excluiColaborador)
router.get('/', colaboradorController.listaColaboradores)
router.get('/:colaboradorId', colaboradorController.listaColaboradorPorId)

module.exports = router
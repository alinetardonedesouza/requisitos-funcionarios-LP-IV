const express = require('express')
const router = express.Router()

const colaboradorController = require('./usuarios.controller')

router.post('/user/:userId', colaboradorController.criaColaborador)
router.put('/:catalogId', colaboradorController.editaColaborador)
router.delete('/:catalogId', colaboradorController.excluiColaborador)
router.get('/', colaboradorController.listaColaboradores)
router.get('/user/:userId', colaboradorController.listaColaboradorPorId)

module.exports = router
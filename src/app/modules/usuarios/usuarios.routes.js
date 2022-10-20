const express = require('express')
const router = express.Router()

const usuarioController = require('./usuarios.controller')

router.post('/', usuarioController.criaUsuario)
router.put('/:usuarioId', usuarioController.editaUsuario)
router.delete('/:usuarioId', usuarioController.excluiUsuario)
router.get('/:usuarioId', usuarioController.listaUsuarioPorId)
router.get('/', usuarioController.listaUsuarios)

module.exports = router
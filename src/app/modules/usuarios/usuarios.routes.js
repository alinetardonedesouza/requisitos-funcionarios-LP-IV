const express = require('express')
const router = express.Router()

const usuarioController = require('./usuarios.controller')

router.post('/', usuarioController.criaUsuario)
router.put('/:userId', usuarioController.editaUsuario)
router.delete('/:userId', usuarioController.excluiUsuario)
router.get('/', usuarioController.listaUsuarios)
router.get('/user/:userId', usuarioController.listaUsuarioPorId)

module.exports = router
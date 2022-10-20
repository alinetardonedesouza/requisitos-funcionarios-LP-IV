const express = require('express')
const router = express.Router()

const feedbackController = require('./feedbacks.controller')

router.post('/', feedbackController.criaFeedback)
router.put('/:feedbackId', feedbackController.editaFeedback)
router.delete('/:feedbackId', feedbackController.excluiFeedback)
router.get('/', feedbackController.listaFeedbacks)
router.get('/:feedbackId', feedbackController.listaFeedbackPorId)

module.exports = router
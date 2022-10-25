const { Feedbacks } = require('../../../../models/index')

exports.create = async (feedback) => {

    return await Feedbacks.create(feedback)
}

exports.update = async (feedbackId, feedback) => {

    return await Feedbacks.update(feedback, { where: { id: feedbackId } })
}

exports.delete = async (feedbackId) => {

    return await Feedbacks.destroy({ where: { id: feedbackId } })
}

exports.find = async (filter) => {

    return await Feedbacks.findAll({ where: filter })
}

exports.findOne = async (feedbackId) => {

    return await Feedbacks.findOne({ where: { id: feedbackId } })
}
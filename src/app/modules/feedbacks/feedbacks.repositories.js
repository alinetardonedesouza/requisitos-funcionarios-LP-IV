const { Feedbacks } = require('../../../../models/index')

exports.create = async (feedback) => {
    
    return await Feedbacks.create(feedback)
}

exports.update = async (feedbackId, feedback) => {
    
    return await Feedbacks.update(feedbackId, feedback)
}

exports.delete = async (feedbackId) => {

    return await Feedbacks.delete(feedbackId)
}

exports.find = async (filter) => {

    return await Feedbacks.find({ filter })
}
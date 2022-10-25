const moment = require('moment')

exports.dateToBRFormat = (date) => {

    console.log(moment(date).format("DD/MM/YYYY"))

    return moment(date).format("DD/MM/YYYY")
}
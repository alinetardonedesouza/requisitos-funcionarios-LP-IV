const moment = require('moment')

exports.dateToBRFormat = (date) => {

    return moment(date).format("DD/MM/YYYY")
}

exports.dateToDatabaseFormat = (date) => {

    return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
}
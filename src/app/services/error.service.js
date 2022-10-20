function customError(code = 500, message = `Problema interno da API.`) {

    return { code, message }
}

function notFound(message = `Não encontrado.`) {

    return { code: 404, message }
}

function badRequest(message = `Houve um erro nos dados enviados.`) {

    return { code: 400, message }
}

function conflict (message = `Dados conflitantes.`) {

    return { code: 409, message }
}

function internalServerError(message = `Houve um erro ao realizar a requisição.`) {

    return { code: 500, message }
}

exports.errors = { customError, notFound, badRequest, conflict, internalServerError }
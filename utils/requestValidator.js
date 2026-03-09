function validarContentType(contentType) {
    return contentType && contentType.includes('application/json');
}

function validarBodyVazio(body) {
    return body && body.trim() !== '';
}

function validarJSON(body) {
    try {
        return JSON.parse(body);
    } catch {
        return null;
    }
}

function isErroValidacao(erro) {
    return erro.message.includes('obrigatório') ||
        erro.message.includes('deve ser') ||
        erro.message.includes('não pode');
}

module.exports = {
    validarContentType,
    validarBodyVazio,
    validarJSON,
    isErroValidacao
};

function validatePassword(pass) {
    if (pass.length < 4 || pass.length > 72) {
        return {
            valid: false,
            text: 'Senha deve ter entre 4 e 72 dígitos'
        }
    } else {
        return {
            valid: true,
            text: ''
        }
    }
};

function validateDocument(num) {
    if (num.length !== 11) {
        return {
            valid: false,
            text: 'CPF deve ter 11 dígitos'
        }
    } else {
        return {
            valid: true,
            text: ''
        }
    }
};

function validateText(text) {
    if (!text.length) {
        return {
            valid: false,
            text: 'Campo obrigatório'
        }
    } else {
        return {
            valid: true,
            text: ''
        }
    }
};

export {
    validatePassword,
    validateDocument,
    validateText
}

export const ErrorHandler = {
    getTitle: (error) => (error) ? (`Erro status ${error.response.data.status}`) : '',
    getMessage: (error) => {
        return (!error || !error.response.data.message)
            ? 'Algum erro ocorreu, contate um administrador.'
            : error.response.data.message
    },
    erroCampoObrigatorio: (campo) => (`O campo de ${campo} é obrigatório.`),
    erroTamanhoCampoObrigatorio: (campo, minimo, maximo) => (`O campo de ${campo} deve ter entre ${minimo} e ${maximo} caracter(es).`),
}

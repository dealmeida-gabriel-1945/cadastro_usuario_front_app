export const ErrorHandler = {
    getTitle: (error) => (error) ? (`Erro status ${error.response.data.status}`) : '',
    getMessage: (error) => {
        return (!error || !error.response.data.message)
            ? 'Algum erro ocorreu, contate um administrador.'
            : error.response.data.message
    },
}

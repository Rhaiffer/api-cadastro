class NaoEncontrado extends Error{
    constructor() {
        super('Fornecedor Não foi encontrado!')
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado
class ValorNaoSuportado extends Error {
    constructor(contentType) {
        super(`O tipo de conteúdo ${contentType} Não é suportado`)
        this.name = 'ValorNaoSuportado'
        this.idErro = 3
    }
}

module.exports = ValorNaoSuportado
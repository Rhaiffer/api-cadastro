const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteadorLogin= require('./rotas/login');
const roteadorFornecedor = require('./rotas/fornecedores');
const NaoEncontrado = require('./erro/NaoEncontrado')
const CampoInvalido = require ('./erro/CampoInvalido')
const DadosNaoFornecidos = require('./erro/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erro/ValorNaoSuportado')
const formatosAceitos = require('./Serializador').formatosAceitos


app.use(bodyParser.json())
app.use((requisicao, resposta, proximo) => {
        let formatoRequisitado = requisicao.header('Accept')

        if (formatoRequisitado === '*/*') {
                formatoRequisitado = 'application/json'
        }
       
        if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
                resposta.status(406)      
                resposta.end()
                return
        }

        resposta.setHeader('Content-Type', formatoRequisitado)
        proximo()
})

app.use('/api/rotas/login', roteadorLogin.Login);
app.use('/api/rotas/fornecedores', roteadorFornecedor);



app.use((erro, requisicao, resposta, proximo) => {
    let status = 500
    if (erro instanceof NaoEncontrado) {
            status = 404
    }
    
    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
            status = 400
    }

    if (erro instanceof ValorNaoSuportado) {
            status = 406
    }
        resposta.status(status)
        resposta.send(
            JSON.stringify({
                mensagem: erro.message,
                id: erro.idErro 
            })
        )
})
app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))
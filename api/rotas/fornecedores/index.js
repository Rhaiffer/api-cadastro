const roteadorFornecedor = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')
const express = require('express') 
const app = express() 
var cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const secret = "meu-segredo";//esse segredo do JWT seria uma config
 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser());  
 


 
//função que verifica se o JWT é ok
 function verifyJWT(requisicao, resposta, next){ 
    var token = requisicao.headers['x-access-token']; 
    if (!token) 
        return resposta.status(401).send({ auth: false, message: 'Token não informado.' }); 
    
    jwt.verify(token, secret, function(err, decoded) { 
        if (err) 
            return resposta.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        req.userId = decoded.id; 
        console.log("User Id: " + decoded.id)
        next(); 
    }); 
}    




roteadorFornecedor.get('/', verifyJWT, async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteadorFornecedor.post('/', verifyJWT, async (requisicao, resposta, proximo) => {
    
    try {
        const dadosRecebidos = requisicao.body
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar()
        resposta.status(201)
        resposta.send(
        JSON.stringify(fornecedor)
        )
    } catch (erro) {
        proximo(erro)
    }

})

roteadorFornecedor.get('/:idFornecedor', verifyJWT, async (requisicao, resposta, proximo) => {
    try {
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(fornecedor)
        )
    } catch (erro) {
        proximo(erro)
    }
})

roteadorFornecedor.put('/:idFornecedor',verifyJWT, async (requisicao, resposta, proximo) => {
    
    try {
        const id = requisicao.params.idFornecedor
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        proximo(erro)
    }
})

roteadorFornecedor.delete('/:idFornecedor',verifyJWT, async (requisicao, resposta, proximo) => {
    
    try {
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        await fornecedor.remover()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
       proximo(erro)
    }
})
module.exports = roteadorFornecedor

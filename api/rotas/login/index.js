const express = require('express') 
const app = express() 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const roteador = require('express').Router()
var http = require('http'); 
var cookieParser = require('cookie-parser'); 
const secret = "meu-segredo";//esse segredo do JWT seria uma config


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

//rota de login
app.post('/login', (requisicao, resposta, proximo) => { 
    if(requisicao.body.user === 'Rhaiffer' && requisicao.body.pwd === 'Hausz123!'){ 
        //auth ok 
        const id = 1; //esse id viria do banco de dados 
        var token = jwt.sign({ id }, secret, { 
            expiresIn: 300 // 5min 
        }); 
        
        console.log("Fez login e gerou token!");
        return resposta.status(200).send({ auth: true, token: token }); 
    }
    
    return resposta.status(401).send('Login inválido!'); 
})    
 
//rota de logout
app.post('/logout', function(requisicao, resposta) { 
    console.log("Fez logout e cancelou o token!");
    resposta.status(200).send({ auth: false, token: null }); 
});

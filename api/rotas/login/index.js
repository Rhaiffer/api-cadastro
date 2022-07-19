const express = require('express') 
const app = express() 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var http = require('http'); 
const roteadorLogin = require('express').Router();
var cookieParser = require('cookie-parser'); 
const secret = "meu-segredo";//esse segredo do JWT seria uma config


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

//rota de login
 const Login = async (requisicao, resposta, proximo) => { 
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
}
 
//rota de logout
// roteadorLogin.post('/logout', function(requisicao, resposta) { 
//     console.log("Fez logout e cancelou o token!");
//     resposta.status(200).send({ auth: false, token: null }); 
// });


 module.exports = {
    // roteadorLogin,
    Login
}
//declarando variavel que vai receber o express 
const express = require("express")

//criando instancia do express dentro da var app
const app = express()

//utilizando o metodo GET para criar a rota principal
app.get("/", function(req, res){
    res.send("Rota principal")
})

//criando outras rotas
app.get("/rotasecundaria", function(req, res){
    res.send("Rota secundária")
})

//abrindo servidor
app.listen(8081, function(req, res){
    console.log("Servidor rodando na URL: http://localhost:8081")
})
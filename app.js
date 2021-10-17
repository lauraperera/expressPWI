//declarando variavel que vai receber o express 
const express = require("express")

//criando instancia do express dentro da var app
const app = express()

//utilizando o metodo GET
app.get("./")

//abrindo servidor
app.listen(8081, function(req, res){
    console.log("O servidor está rodando...")
})
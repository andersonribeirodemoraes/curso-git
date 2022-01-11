const express = require("express")

const app = express()

app.get("/", function(request, response){
    return response.send("Hello World")
})

app.get("/teste", function(request, response){
    return response.send("Teste")
})

app.listen(3000, function(){
    console.log("Rodando na porta 3000")
})
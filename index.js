const express = require('express')
const app = express()

const port = 100;

app.get('/teste', (req, res) =>{


res.send("Servidor conectado com sucesso")


})

app.listen(port, ()=>{
console.log("O servidor está iniciado")

})










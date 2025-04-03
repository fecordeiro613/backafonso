const express = require('express')  //chamando o express dos módulos
const copia = express() //criando uma cópia pra manipular, n conseguindo manipular o original pq n pode
const port = 100;

copia.get ('/meuendpoint', (req, res) =>{ //faz uma função arrow com request e response, API com método GET       
//request envia, response volta
res.send('')     //sendo a resposta essa mensagem, puxa a var
})

copia.listen(port, ()=>{      //se escutado, a porta é aberta, 
    console.log("O servidor está iniciado") //essa é a consequencia de ouvir, isso é como um alert de login efetuado do insta 

})










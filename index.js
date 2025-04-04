const a = require("express")
const b = require("cors")

const meuServer = a()
meuServer.use(b())

meuServer.get('/alunos', (req, res)=>{
    res.send(
        [{
            nome:"testeAAAA",
            rgm:"123",
            curso:"ADM"
        },
        {
            nome:"CMMM",
            rgm:"24",
            curso:"ADS"
        }]
    )
})

meuServer.listen(3069, ()=>{
    console.log("Está liberado o 3069")
})
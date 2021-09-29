// Puxar a biblioteca express para o javascript
const express = require("express")

//Variavel para porta de acesso
const port = 3000

// abrevia o express em uma variavel e nomeia ele para app
const app = express()

// Criando uma rota
app.get("/projects", (request, response) => {
    return response.send("Hello express")
})

// Escolhe uma porta de acesso para aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})

// Puxar a biblioteca express para o javascript
const express = require("express")

//Variavel para porta de acesso
const port = 3000

// abrevia o express em uma variavel e nomeia ele para app
const app = express()

// Criando uma rota, dinamica usando ":"
app.get("/users/:id", (request, response) => {

    const { id } = request.params
    console.log(id)
    return response.json({ id })
})

// Escolhe uma porta de acesso para aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})


// Route params = /users/2 "BUSCA, DELETA OU ATUALIZAR ALGO ESPECIFICO"

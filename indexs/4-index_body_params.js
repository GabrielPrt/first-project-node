// Puxar a biblioteca express para o javascript
const express = require("express")

//Variavel para porta de acesso
const port = 3000

// abrevia o express em uma variavel e nomeia ele para app
const app = express()
app.use(express.json())

// Criando uma rota, dinamica usando ":"
app.get("/users", (request, response) => {

    const { name, age } = request.body

    return response.json({ name, age })
})

// Escolhe uma porta de acesso para aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})


// Request Body => {"name":"Rodolfo", "age":}

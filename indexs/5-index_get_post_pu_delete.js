// Puxar a bibliotecas para o javascript
const express = require("express")
const uuid = require("uuid")

//Variavel para porta de acesso
const port = 3000

// abrevia o express em uma variavel e nomeia ele para app
const app = express()

// Usar json
app.use(express.json())

// Armazena informação (array)
const users = []

// Criando uma rota GET
app.get("/users", (request, response) => {
    return response.json(users)
})

// Criando uma rota POST
app.post("/users", (request, response) => {
    const { name, age } = request.body

    // Chama a biblioteca uuid, com ids universal
    const user = { id: uuid.v4(), name, age }

    // Faz um arrays para retornar usuario criado
    users.push(user)

    // Retorna status e usuario
    return response.status(201).json(user)
})



// Criando uma rota PUT
app.put("/users/:id", (request, response) => {

    //Faz a request
    const { id } = request.params

    // Busca a informação no body
    const { name, age } = request.body

    // Atualiza informação
    const updateUser = { id, name, age }

    // Localização posição do users no array
    const index = users.findIndex(user => user.id === id)

    // Caso não localize um usurio ele imprime o erro e status muda para 404
    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    // Retorna usuario com id selecionado
    users[index] = updateUser

    return response.json(updateUser)
})

// Criando uma rota DELETE
app.delete("/users/:id", (request, response) => {
    //Faz a request
    const { id } = request.params

    // Localização posição do users no array
    const index = users.findIndex(user => user.id === id)

    // Caso não localize um usurio ele imprime o erro e status muda para 404
    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    // Deleta usuario selecionado (id)
    users.splice(index, 1)

    return response.status(204).json()
})

// Escolhe uma porta de acesso para aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})

// Puxar a biblioteca express para o javascript
const express = require("express")

//Variavel para porta de acesso
const port = 3000

// abrevia o express em uma variavel e nomeia ele para app
const app = express()

// Criando uma rota
app.get("/projects", (request, response) => {
    // const name = request.query.name
    // const age = request.query.age

    const { name, age } = request.query // Destructuring assignment

    console.log(name, age)

    // Quando o nome da chave e o valor for o mesmo podemos omitir o valor (chave e valor mesmo nome)
    return response.json({ name: name, age: age })
})

// Escolhe uma porta de acesso para aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})

// Query params = meusite.com/users?nome=gabriel&age=28 "FILTROS"
// Route params = /users/2 "BUSCA, DELETA OU ATUALIZAR ALGO ESPECIFICO"

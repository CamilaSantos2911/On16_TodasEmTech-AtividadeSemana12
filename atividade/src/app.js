const express = require("express") //importando o express
const filmesRoutes = require("./routes/filmeRoutes")
const index = require ("./routes/index.js")
const db = require ("./config/dbConnect.js")

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

const app = express() 

app.use(express.json()) // uso o bodyparser


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/filmes", filmesRoutes)

// exportando para usar o server.js
module.exports = app

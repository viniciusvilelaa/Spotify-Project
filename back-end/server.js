import express from "express"

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send("OLA MUNDO")
})


app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`)
})

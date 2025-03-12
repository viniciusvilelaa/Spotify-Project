import express from "express"
import { artistsArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send("OLA MUNDO")
})

app.get('/artists', (request, response) => {
    response.send(artistsArray)
})

app.get('/songs', (request, response) => {
    response.send(songsArray)
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`)
})

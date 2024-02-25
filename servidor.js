const express = require('express')
const app = express()
const port = 5002

app.get('/',(req, res) => {
    res.send('Respuesta de Raiz')
})

app.listen(port, () => {
    console.log('Servidor Escuchando', port )
})
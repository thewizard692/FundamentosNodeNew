const express = require('express')
import { initializeApp } from "firebase/app";
const app = express()
const port = 5002

//Conexion a la base de datos en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDP4xGdEDjxpDkLhBXdxip6J-0QeXj3BQU",
  authDomain: "crud-p1.firebaseapp.com",
  projectId: "crud-p1",
  storageBucket: "crud-p1.appspot.com",
  messagingSenderId: "809297866917",
  appId: "1:809297866917:web:658ff295e8cdf49089dd4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.get('/',(req, res) => {
    res.send('Respuesta de Raiz')
})

app.listen(port, () => {
    console.log('Servidor Escuchando', port )
})
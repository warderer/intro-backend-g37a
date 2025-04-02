// #1 Llamar al framework de express
const express = require('express')
const petsRoutes = require('./api/v1/pets')

// #2a Crear una instancia de express
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que pueda recibir datos en formato JSON
app.use(express.json())

// #3 Definir rutas
app.get('/', (req, res) => {
  res.send('Hello G37A, Welcomeeeee!')
})

app.use(petsRoutes)

// #4 Levantar el servidor
app.listen(port, () => {
  console.log(`App listening on port ${port} 🚀`)
})
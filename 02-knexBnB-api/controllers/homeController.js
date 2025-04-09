/* CONTROLADORES */
// Los controladores tienen la lógica de negocio de la aplicación.
// Se encargan de recibir las peticiones HTTP, procesarlas y dar la respuesta adecuada.
// También se encargan de VALIDAR los datos que vienen en la petición, manejar errores y resolver promesas.

const ModelHome = require('../models/Home')

// Crear las funciones necesarias para manejar cada petición HTTP de cada ruta.

// CREATE
const createHome = (req, res) => {
  ModelHome.create(req.body).then(home => {
    res.status(201).json(home)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

// READ

// UPDATE

// DELETE

module.exports = {
  createHome
}

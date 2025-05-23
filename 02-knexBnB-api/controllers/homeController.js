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
const findAllHomes = (req, res) => {
  ModelHome.findAll().then(homes => {
    res.status(200).json(homes)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

const findOneHome = (req, res) => {
  ModelHome.findOne(req.params.idHome).then(home => {
    res.status(200).json(home)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

// UPDATE
const updateOneHome = (req, res) => {
  ModelHome.update(req.params.idHome, req.body).then(home => {
    res.status(200).json(home)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

// DELETE
const softDeleteOneHome = (req, res) => {
  ModelHome.softDelete(req.params.idHome).then(home => {
    res.status(204).json()
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

const destroyOneHome = (req, res) => {
  ModelHome.destroy(req.params.idHome).then(home => {
    res.status(204).json()
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  softDeleteOneHome,
  destroyOneHome
}

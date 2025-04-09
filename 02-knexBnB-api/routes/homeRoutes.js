/* VISTAS (RUTAS EN EL BACKEND) */
// Las vistas son las rutas que se definenn en el backend para que el cliente pueda acceder a los recursos de la aplicación.
// En una arquitectura REST, las rutas se definen con un verbo HTTP y una URL.
// La Ruta se encarga de recibir la petición HTTP y mandarla al controlador adecuado.

// #1 Importar express
const express = require('express')

// #2 Mando a llamar al router de express
const router = express.Router()

// 3 Importar el controlador
const homeController = require('../controllers/homeController')

// #4 Definir las rutas
router.post('/homes', homeController.createHome) // Crear una casa

module.exports = router

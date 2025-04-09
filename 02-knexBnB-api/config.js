// Dependiendo de la variable de entorno del sistema en que se ejecute el servidor, se va a cambiar la configuración de la base de datos.

// Tomar la configuración del entorno, y si no existe, usar la configuración por defecto: development
const environment = process.env.NODE_ENV || 'development'

const knex = require('knex')
const knexfile = require('./knexfile')

// Mandar a llamar la configuración de knexfile.js adecuada
module.exports = knex(knexfile[environment])

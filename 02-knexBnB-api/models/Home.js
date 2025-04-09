/* MODELO */
// Es el que interactua con la base de datos.
// No se encarga de validar datos, ni de resolver promesas, ni de la lógica de negocios, eso es trabajo del controlador en MVC.

// #1 Importar la conexión a la base de datos
const knex = require('../config')

// #2 Crear funciones que me permitan interactuar con la base de datos.
// CRUD: Create, Read, Update, Delete

// Create
const create = (bodyHome) => {
  return knex
    .insert(bodyHome)
    .into('homes')
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'active', 'created_at', 'fk_user'])
}

// Read
const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true)
}

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

// Update

// Delete

module.exports = {
  create,
  findAll,
  findOne
}

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
const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('homes')
    .where('house_id', houseId)
    .returning('*')
}

// Delete

// Soft Delete: Este no elimina el registro de la base de datos, solo cambia el estado de active a false.
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where('house_id', houseId)
}

// Hard Delete: Este elimina el registro de la base de datos.
const destroy = (houseId) => {
  return knex
    .delete()
    .from('homes')
    .where('house_id', houseId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  softDelete,
  destroy
}

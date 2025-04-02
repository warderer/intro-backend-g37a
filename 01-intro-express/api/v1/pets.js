// Para definir rutas en un archivo separado, usando Express, se debe configurar un Router. Un router es un objeto que permite definir rutas y agruparlas. Para crear un Router, se debe llamar a la función Router() de Express. Luego, se pueden definir las rutas en el Router, de la misma forma que se hacia en la aplicación de express.
const express = require('express')

// Mando a llamar al router de express
const router = express.Router()

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Silvestre",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

// router.get('/api/v1/pets', (req, res) => {
//     res.json(petList)
// })

/* PARAMS */
// Un Param sirve para hacer una ruta dinámica. Por ejemplo, si quiero traer la información de una mascota en especifico, puedo hacer una ruta que reciba el ID de la mascota y que me regrese la información de esa mascota.

router.get('/api/v1/pets/:petId', (req, res) => {
    console.log(req.params)
    const { petId } = req.params
    const onePet = petList.pets.find(pet => pet.id === parseInt(petId))
    if (!onePet) return res.status(404).json({ message: 'Pet not found' })

    res.json(onePet)
})

/* QUERY */
// Una query es similar a un PARAM, pero en lugar de ser parte de la ruta, se envía como un parametro en la URL (?). Sobre todo cuando ocupamos mandar más de un dato, es común usarlas para filtrar información.
// Las Querys son abiertas, es decir, no se necesita definirlas en la ruta. Por ejemplo, si quiero filtrar las mascotas por tipo, puedo hacer una ruta que reciba el tipo de mascota y que me regrese la información de todas las mascotas de ese tipo.
// Query: /api/v1/pets?type=dog&age=3

router.get('/api/v1/pets', (req, res) => {
    console.log(req.query)
    const { type, age } = req.query
    let pets = petList.pets
    if (type && age) {
        pets = pets.filter(pet => pet.type === type && pet.age === parseInt(age))
    }

    if (type) {
        pets = pets.filter(pet => pet.type === type)
    }

    if (age) {
        pets = pets.filter(pet => pet.age === parseInt(age))
    }

    res.json(pets)
})


// export en common JS
module.exports = router
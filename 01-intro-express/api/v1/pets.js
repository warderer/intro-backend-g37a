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

router.get('/api/v1/pets', (req, res) => {
    res.json(petList)
})

// export en common JS
module.exports = router
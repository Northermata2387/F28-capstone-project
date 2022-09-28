// Links the db.json data set to the variable plants. Allows us to access the db.json
const plants = require('./db.json')
//create new id
let plantId = 16

// GET: To retrieve a resource.
// POST: To create a new resource.
// PUT: To edit or update an existing resource.
// DELETE: To delete a resource.

module.exports = {
    // GET to retreive all plants through PLANTS button
    getPlants: (req, res) => {
        res.status(200).send(plants)
    },

    // POST to add new plants to the data set
    addPlant:  (req, res) => {

        const{name, image, type, zones} = req.body

        let newPlantObject = {
            id: plantId,
            name: name,
            image: image,
            type: type,
            zones: zones
        }

        plants.push(newPlantObject)

        plantId++

        res.status(200).send(plants)
    },
     // DELETE to remove plant from My Plant List
     deletePlant: (req, res) => {
        const index = plants.findIndex(el => el.id === +req.params.id)

        plants.splice(index, 1)

        res.status(200).send(plants)
    },

}


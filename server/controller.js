// Links the db.json data set to the variable plants. Allows us to access the db.json
const plants = require('./db.json')
//create new id
let plantId = 16

module.exports = {
    // GET to retreive all plants through PLANTS button
    getPlants: (req, res) => {
        res.status(200).send(plants)
    },

    // POST to add new plants to the data set
    addPlant:  (req, res) => {

        const{name, image, type, family, zones, sun, plantFriends, insectFriends} = req.body

        let newPlantObject = {
            id: plantId,
            name: name,
            image: image,
            type: type,
            family: family,
            zones: zones,
            sun: sun,
            plantFriends: plantFriends,
            insectFriends: insectFriends
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
     // PUT to edit or update My Plant List
     updateMyZone: (req, res) => {
        const index = plants.findIndex(el => el.id === +req.params.id)
        const {type} = req.body

        if(type === 'colder'){
            plants[index].myZone++
        }else if(type === 'hotter'){
            plants[index].myZone--
        }

        res.status(200).send(plants)
    }

}


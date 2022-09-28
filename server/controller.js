

// Links the db.json data set to the variable plants. Allows us to access the db.json
const plants = require('./db.json')

// GET, PUT, DELETE, PUSH

module.exports = {
    // GET to retreive all plants
    getPlants: (req, res) => {
        res.status(200).send(plants)
    }
}


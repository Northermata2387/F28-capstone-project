// Links express options to this file
const express = require('express')
// Links cors options to this file
const cors = require('cors')

// Creates a new express application
const app = express()

// Middleware setup
app.use(express.json())
//Cross-origin resource sharing
app.use(cors())

// Destructure REST Function(s)
const {
    getPlants,
    addPlant,
    deletePlant,
    updateMyZone
} = require('./controller')

// Endpoint(s)
app.get('/getPlants', getPlants)
app.post('/addPlant', addPlant)
app.delete('/deletePlant/:id', deletePlant)
app.put('/updateMyZone/:id', updateMyZone)


//  site listens to specified port 
app.listen(6235, () => console.log('My Plant List on port 6235'))


// NOTES
// Postman Check GET http://localhost:6235/getPlants
// Postman Check POST http://localhost:6235/addPlant body - raw - JSONN 
// {
//     "name": "White Sage", 
//     "image": "www.everwilde.com/media//1000/resized/Artemisia-ludoviciana-01_medium.gif",
//     "type": "Perennial", 
//     "family": "Daisy",
//     "zones": "4 to 8",
//     "sun": "Sun/part sun",
//     "plantFriends": ["Verbena", "Blue Tweedia"],
//     "insectFriends": ["Monarch Butterflies"],
//     "myZone": 6
// }
// Postman Check DELETE http://localhost:6235/deletePlant/(id#)
// Postman Check PUT http://localhost:6235/updateMyZone/1 body - raw - JSONN 
// {
//     "type": "colder"
// }

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
    getPlants
} = require('./controller')

// Endpoint(s)
app.get('/getPlants', getPlants)


//  site listens to specified port 
app.listen(6235, () => console.log('My Plant List on port 6235'))


// Check through Postman byt GET http://localhost:6235/getPlants to verify GET REST function


const baseURL = 'http://localhost:6235'

// Returns the first Element within the document that matches the specified selector
const showPlants = document.querySelector('#plantDisplay')

// Axios request to GET array for plant cards
const getAllPlants = () => {
    axios.get(`${baseURL}/getPlants`)
    .then((res) => {
        displayPlants(res.data)
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

// invocation for GET array
getAllPlants()

// Loop over the GET pklant array
const displayPlants = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        createPlantCard(arr[i])
    }
} 

// Create plant card for each group in the array
const createPlantCard = (plant) => {
    const plantCard = document.createElement('section')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `
        <button onclick="deletePlant(${plant.id})">
        <img src=${plant.image} alt='plant image'/>
        <p>${plant.name}</p>
        <p>${plant.type}</p>
        <p>${plant.zones}</p>
        </button>
    `
    showPlants.appendChild(plantCard)
}

// Axios request to Delete plant card
const deletePlant = (id) => {
    axios.delete(`${baseURL}/deletePlant/${id}`)
    .then((res) => {
        showPlants.innerHTML = ''
        displayPlants(res.data)
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}



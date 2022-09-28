
const baseURL = 'http://localhost:6235'

const showPlants = document.querySelector('#plantDisplay')

// Axios Request to get plants array
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

// invocation
getAllPlants()

// Loop over the array
const displayPlants = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        createPlantCard(arr[i])
    }
} 

// Create plant card for each item in the array
const createPlantCard = (plant) => {
    const plantCard = document.createElement('section')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `
        <button>
        <img src=${plant.image} alt='plant image'/>
        <p>${plant.name}</p>
        <p>${plant.type}</p>
        <p>${plant.zones}</p>
        </button>
    `
    showPlants.appendChild(plantCard)
}



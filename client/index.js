
const baseURL = 'http://localhost:6235'

// Return Element within the document that matches the query selector
const showPlants = document.querySelector('#plantDisplay')
// Return Element within the document that matches the query selector
const addButton = document.querySelector('#addPlant')

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

// Axios request to Update my zone
const updateMyZone = (id, type) => {
    axios.put(`${baseURL}/updateMyZone/${id}`, {type})
    .then((res) => {
        showPlants.innerHTML = ''
        displayPlants(res.data)
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Axios request to add new plant to main plants list
const addPlant = () => {
    let nameInput = document.querySelector('#nameInput')
    let typeInput = document.querySelector('#typeInput')
    let familyInput = document.querySelector('#familyInput')
    let zoneInput = document.querySelector('#zoneInput')
    let sunInput = document.querySelector('#sunInput')
    let plantFriendInput = document.querySelector('#plantFriendInput')
    let insectFriendInput = document.querySelector('#insectFriendInput')
    let imageInput = document.querySelector('#imageInput')

    let newPlant = {
        name: nameInput.value,
        type: typeInput.value,
        family: familyInput.value,
        zones: zoneInput.value,
        sun: sunInput.value,
        plantFriends: plantFriendInput.value,
        insectFriends: insectFriendInput.value,
        image: imageInput.value
    }

    axios.post(`${baseURL}/addPlant`, newPlant)
        .then((res) => {
            showPlants.innerHTML = ''
            nameInput.value = ''
            typeInput.value = ''
            familyInput.value = ''
            zoneInput.value = ''
            sunInput.value = ''
            plantFriendInput.value = ''
            insectFriendInput.value = ''
            imageInput.value = ''
            displayPlants(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

// event listener for add new plant
addButton.addEventListener('click', addPlant)




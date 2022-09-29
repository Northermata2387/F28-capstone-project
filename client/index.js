
const baseURL = 'http://localhost:6235'

// Return plant array within the document that matches the query selector
const showPlants = document.querySelector('#plantDisplay');
// Return zone temperature within the document that matches the query selector
const addButton = document.querySelector('#addPlant');
// Return add new plant within the document that matches the query selector
const addMyPlantListBtn = document.querySelector('#addMyPlantList');
// Return add new plant within the document that matches the query selector
const searchBar = document.getElementById('searchBarInput');

// epmty array for esearch funtion
let plantCardSearch = [];

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
};

// invocation for GET array
getAllPlants()

// Loop over the GET plant array
const displayPlants = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        createPlantCard(arr[i])
    }
};

// Create plant card for each group in the array
const createPlantCard = (plant) => {
    const plantCard = document.createElement('section')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `
        <button onclick="deletePlant(${plant.id})"
        style="
            width: 175px;
            border: 0;
        "
        >
        <img src=${plant.image} alt='plant image'
        style="
            width: 169px;
            height: 156px;
            object-fit: cover;
            border-radius: 5px;
            margin: 0px;
        "
        />
        <p>${plant.name}</p>
        <p>${plant.type}</p>
        <p>${plant.zones}</p>
        </button>
    `
    showPlants.appendChild(plantCard)
};

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
};

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
};

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
};

// event listener for add new plant
addButton.addEventListener('click', addPlant);

// event listener for searchbar
searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value)
});






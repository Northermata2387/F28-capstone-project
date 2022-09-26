const plants = [
    {
        id: 0,
        name: 'Rocky Mountain Columbine', 
        imgAddress: 'https://www.gardenia.net/storage/app/public/uploads/images/detail/botanikfoto-473010-L.webp',
        type: 'Perennial', 
        family: 'Ranunculus',
        zones: 3-8,
        sun: 'Sun/part shade',
        plantFriends: ['Allium', 'Daylily', 'Foxglove', 'Iris'],
        insectFriends: ['Sawfly', 'Caterpiller', 'Aphid']
    }, 
    {
        id: 1,
        name: 'Russian Sage', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 2,
        name: 'Yellow Alyssum', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 3,
        name: 'Bronze Fennel', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 4,
        name: 'Zinnia', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 5,
        name: 'Canada Goldenrod', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 6,
        name: 'Black-eyed Susan', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 7,
        name: 'Wax Currant', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 8,
        name: 'Chokecherry', 
        imgAddress: '',
        type: '', 
        family: '',
        zones: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        sun: '',
        plantFriends: '',
        insectFriends: ''
    }, 
    {
        id: 9,
        name: 'Three-leaf Sumac', 
        imgAddress: 'https://wyomingplantcompany.com/wp-content/uploads/2014/01/Rhus-trilobata-Matt-Lavin.jpg',
        type: 'Native shrub', 
        family: 'Anacardiaceae',
        zones: 4-8,
        sun: 'Full sun',
        plantFriends: ['Sumac', 'Redbud', 'Wild plum', 'Ninebark'],
        insectFriends: ['Butterflies', 'Moths', 'Caterpillars']
    }, 
    {
        id: 10,
        name: 'Prairie Coneflower', 
        imgAddress: 'https://www.americanmeadows.com/media/catalog/product/r/a/ratibida-pinnata-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=560&canvas=560:560',
        type: 'Perennial', 
        family: 'Aster',
        zones: 4-8,
        sun: 'Full sun',
        plantFriends: ['Lavender', 'Oregano', 'Goldenrod'],
        insectFriends: ['Leaf beetles', 'Japanese beetles', 'Fruit flies']
    }, 
    {
        id: 11,
        name: 'Bee Balm', 
        imgAddress: 'https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/bee-balm-2413963_1920_full_width.jpg',
        type: 'Perennial', 
        family: 'Mint',
        zones: 3-9,
        sun: 'Full sun',
        plantFriends: ['Squash', 'Tomatoes', 'Black-eyed Susans', 'Roses'],
        insectFriends: ['Bumblebee', 'Butterflies']
    }, 
    {
        id: 12,
        name: 'Purple Prairie Clover', 
        imgAddress: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dalea_purpurea_Arkansas.jpg',
        type: 'Perennial', 
        family: 'Legume',
        zones: 3-8,
        sun: 'Full sun',
        plantFriends: ['Leadplant', 'little bluestem', 'thimbleweed', 'milkweed'],
        insectFriends: ['Bees', 'Bumblebees', 'Butterflies']
    }, 
    {
        id: 13,
        name: 'Showy Milkweed', 
        imgAddress: 'https://www.everwilde.com/media/1000/Asclepias-speciosa-01.gif',
        type: 'Perennial', 
        family: 'Dogbane',
        zones: 4-9,
        sun: 'sun/part sun',
        plantFriends: ['Verbena', 'Blue Tweedia', 'Purple Salvia', 'Mistflower', 'Milkweed'],
        insectFriends: ['Monarch Butterflies']
    }, 
    {
        id: 14,
        name: 'Prairie Sage', 
        imgAddress: 'https://www.everwilde.com/media//1000/resized/Artemisia-ludoviciana-01_medium.gif',
        type: 'Perennial', 
        family: 'Daisy',
        zones: 4-8,
        sun: 'Full sun',
        plantFriends: ['Broccoli', 'Cauliflower', 'Cabbage', 'Carrots'],
        insectFriends: ['Grasshopers', 'Butterflies']
    }, 
    {
        id: 15,
        name: 'Common Yarrow', 
        imgAddress: 'https://cdn.shopify.com/s/files/1/0016/4560/9060/products/Common_Yarrow_-_White_grande.jpg?v=1600931177',
        type: 'Perennial', 
        family: 'Daisy',
        zones: 3-7,
        sun: 'Sun/part shade',
        plantFriends: ['Brassicas', 'Tomatoes', 'Beans', 'Spinach'],
        insectFriends: ['Bees', 'Beetles', 'Butterflies']
    }, 

]


module.exports = {plants}
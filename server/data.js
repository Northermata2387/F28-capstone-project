const plants = [
    {
        id: 0,
        name: 'Rocky Mountain Columbine', 
        imgAddress: 'https://www.gardenia.net/storage/app/public/uploads/images/detail/botanikfoto-473010-L.webp',
        type: 'Perennial', 
        family: 'Ranunculus',
        zones: 3-8,
        sun: 'Sun/part shade',
        plantFriends: ['Allium', 'Daylily', 'Foxglove'],
        insectFriends: ['Sawfly', 'Caterpiller', 'Aphid']
    }, 
    {
        id: 1,
        name: 'Russian Sage', 
        imgAddress: 'https://www.bluestoneperennials.com/img/PEBJ/650/PEBJ_0_Perovskia_Blue_Jean_Baby1_wg.1544110011.jpg',
        type: 'Perennial', 
        family: 'Mint',
        zones: 4-9,
        sun: 'Full sun',
        plantFriends: ['Coneflower', 'Globe thistle'],
        insectFriends: ['Bees']
    }, 
    {
        id: 2,
        name: 'Yellow Alyssum', 
        imgAddress: 'https://gardenerspath.com/wp-content/uploads/2022/03/Mountain-Alyssum-Growing-in-Bright-Sunshine-Feature.jpg',
        type: 'Perennial', 
        family: 'Brassicaceae',
        zones: 3-7,
        sun: 'Full sun',
        plantFriends: ['Potatoes', 'Broccoli'],
        insectFriends: ['Pirate bugs', 'Parasitic wasps', 'Hover flies']
    }, 
    {
        id: 3,
        name: 'Bronze Fennel', 
        imgAddress: 'https://cdn.shopify.com/s/files/1/0249/6134/products/bronze_fennel_429x600.jpg?v=1637882013',
        type: 'Perennial', 
        family: 'Umbellifer',
        zones: 5-11,
        sun: 'Full sun',
        plantFriends: ['Dill', 'Tomato', 'Basil'],
        insectFriends: ['Aphids', 'Cutworm', 'Armyworm']
    }, 
    {
        id: 4,
        name: 'Zinnia', 
        imgAddress: 'https://www.americanmeadows.com/media/catalog/product/z/i/zinnia-dahlia-flowered-meadow_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=',
        type: 'Annual', 
        family: 'Daisy',
        zones: 3-10,
        sun: 'Full sun',
        plantFriends: ['Tomatoes', 'Peppers'],
        insectFriends: ['Aphids', 'Caterpillars', 'Slugs']
    }, 
    {
        id: 5,
        name: 'Canada Goldenrod', 
        imgAddress: 'https://www.picturethisai.com/wiki-image/1080/153846660592566302.jpeg',
        type: 'Perennial', 
        family: 'Daisy',
        zones: 3-9,
        sun: 'Full sun',
        plantFriends: ['Sunflowers', 'Coneflowers', 'Ironweed', 'Salvias'],
        insectFriends: ['Beetles', 'Ambush bugs', 'Flies', 'Bees']
    }, 
    {
        id: 6,
        name: 'Black-eyed Susan', 
        imgAddress: 'https://cdn.shopify.com/s/files/1/0212/1030/0480/products/21.jpg?v=1659465163',
        type: 'Perennial', 
        family: 'Daisy',
        zones: 3-9,
        sun: 'Full sun',
        plantFriends: ['Zinnias', 'Globe thistle', 'Echinacea', 'Hibiscus'],
        insectFriends: ['Jagged ambush bugs']
    }, 
    {
        id: 7,
        name: 'Wax Currant', 
        imgAddress: 'https://lh3.googleusercontent.com/Nr3UcAc37ze9OsKE0YFNGUMSBHpHbZoafNFSYqZyUqUuQOxOTivCglJspVanGIAJxEtAgmZEMU5evSIRSmU=s580',
        type: 'Shrub', 
        family: 'Grossulariaceae',
        zones: 5-8,
        sun: 'Sun/part shade',
        plantFriends: ['Chamomile', 'Chives', 'Marigolds'],
        insectFriends: ['Currant worm', 'Fruit flies']
    }, 
    {
        id: 8,
        name: 'Chokecherry', 
        imgAddress: 'https://i1.wp.com/practicalselfreliance.com/wp-content/uploads/2018/09/Foraging-for-Chokecherries-2-of-5.jpg?resize=600%2C438&ssl=1',
        type: 'Perennial', 
        family: 'Rose',
        zones: 2-7,
        sun: 'Sun/part shade',
        plantFriends: ['Sassafras', 'Staghorn sumac', 'Goldenrod'],
        insectFriends: ['Caterpillar', 'Aphids']
    }, 
    {
        id: 9,
        name: 'Three-leaf Sumac', 
        imgAddress: 'https://wyomingplantcompany.com/wp-content/uploads/2014/01/Rhus-trilobata-Matt-Lavin.jpg',
        type: 'Shrub', 
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
        sun: 'Sun/part sun',
        plantFriends: ['Verbena', 'Blue Tweedia'],
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
        plantFriends: ['Broccoli', 'Cauliflower'],
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
        plantFriends: ['Brassicas', 'Tomatoes'],
        insectFriends: ['Bees', 'Beetles', 'Butterflies']
    }, 

]


module.exports = {plants}
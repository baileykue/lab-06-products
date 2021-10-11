export function renderPlant(plant){
    const plantList = document.createElement('div');
    plantList.classList.add('plant-list');
    
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    let addButton = document.createElement('button');
    addButton.textContent = 'Add To Cart'
    addButton.setAttribute('id', plant.id);
    
    // addButton.getElementById(plant.id)
    // addButton.idList
    
    const img = document.createElement('img');
    img.src = plant.img;
    
    plantList.append(plantHeader, img, addButton);
    return plantList;
}
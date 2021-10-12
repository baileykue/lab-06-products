export function renderPlant(plant){
    const plantList = document.createElement('div');
    plantList.classList.add('plant-list');
    
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    const plantDesc = document.createElement('p');
    plantDesc.textContent = `This plant is a ${plant.type}, prefers ${plant.sunlight}. 
    Grows in beautiful shades of ${plant.color} and has a care level of ${plant.careLevel}.`;

    const plantPrice = document.createElement('p');
    plantPrice.textContent = `$${plant.price}.00`;

    let addButton = document.createElement('button');
    addButton.textContent = 'Add To Cart';
    addButton.setAttribute('id', plant.id);
    
    const img = document.createElement('img');
    img.src = plant.img;
    
    plantList.append(plantHeader, img, plantDesc, plantPrice, addButton);
    return plantList;
}
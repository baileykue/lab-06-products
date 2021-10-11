export function renderPlant(plant){
    const plantList = document.createElement('div');
    plantList.classList.add('plant-list');
    
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;
    
    const img = document.createElement('img');
    img.src = plant.img;
    
    plantList.append(plantHeader, img);
    return plantList;
}
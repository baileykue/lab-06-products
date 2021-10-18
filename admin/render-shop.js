export function renderOldPlant(plant){
    const plantList = document.createElement('div');
    plantList.classList.add('plant-list');

    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove From Shop';
    
}
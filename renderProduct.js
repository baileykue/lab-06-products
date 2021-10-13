import { toUSD, addItem, getCart, findById } from './utils.js';

export function renderPlant(plant){
    const cart = getCart();
    const foundItem = findById(plant.id, cart);

    const plantList = document.createElement('div');
    plantList.classList.add('plant-list');
    
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    const plantDesc = document.createElement('p');
    plantDesc.textContent = `This plant is a ${plant.type}, prefers ${plant.sunlight}. 
    Grows in beautiful shades of ${plant.color} and has a care level of ${plant.careLevel}.`;

    const plantPrice = document.createElement('p');
    plantPrice.textContent = toUSD(plant.price);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add To Cart';
    addButton.setAttribute('id', plant.id);
    addButton.setAttribute('class', 'add-button');

    const plantQty = document.createElement('p');
    console.log(foundItem);
    if (foundItem) { plantQty.textContent = `Qty: ${foundItem.qty}`;}
    else { plantQty.classList.add('hidden'); }
    
    addButton.addEventListener('click', ()=>{
        const qtyTotal = addItem(addButton.id);
        alert('Item has been added to your cart!');
        plantQty.classList.remove('hidden');
        plantQty.textContent = `Qty: ${qtyTotal}`;
    });

    const img = document.createElement('img');
    img.src = plant.img;
    
    plantList.append(plantHeader, img, plantDesc, plantPrice, plantQty, addButton);
    return plantList;
}
import { renderPlant } from './renderProduct.js';
import { plants } from './data/productList.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let plant of plants){
    const plantList = renderPlant(plant);
    productList.append(plantList);
}

const addButtons = document.querySelectorAll('.add-button');

for (let addButton of addButtons){
    addButton.addEventListener('click', ()=>{
        addItem(addButton.id);
        alert('added item to cart');
    });
}
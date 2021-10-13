import { renderPlant } from './renderProduct.js';
import { plants } from './data/productList.js';
import { addItem, findById } from './utils.js';



const productList = document.getElementById('product-list');

for (let plant of plants){
    const plantList = renderPlant(plant);
    productList.append(plantList);
}

const addButtons = document.querySelectorAll('.add-button');
const plantQtys = document.getElementsByClassName('hidden');

// for (let addButton of addButtons){
//     addButton.addEventListener('click', ()=>{
//         // addItem(addButton.id);
//         // alert('Item has been added to your cart!');
        
//         // for (let plantQty of plantQtys){
//         //     plantQty.classList.remove('hidden');
//         //     //plantQty.textContent = 

//         // }

//     });
// }
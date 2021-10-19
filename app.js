import { renderPlant } from './renderProduct.js';
import { getProducts } from './utils.js';

const plants = getProducts();

const productList = document.getElementById('product-list');

for (let plant of plants){
    const plantList = renderPlant(plant);
    productList.append(plantList);
}

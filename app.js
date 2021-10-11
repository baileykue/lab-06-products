import { renderPlant } from './renderProduct.js';
import { plants } from './productList.js';

const productList = document.getElementById('product-list');

for (let plant of plants){
  const plantList = renderPlant(plant);
  productList.append(plantList);
}
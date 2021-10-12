// IMPORT MODULES under test here:
import { renderPlant } from '../renderProduct.js';
import { plants } from '../data/productList.js';
import { findById } from '../utils.js';

const test = QUnit.test;

test('function should return a div, h2, button, and img', (expect) => {
   
    const expected = '<div class="plant-list"><h2>Croton</h2><img src="./assets/Croton.jpeg"><button id="3">Add To Cart</button></div>';
    const croton = plants[2];

    const actual = renderPlant(croton).outerHTML;


    expect.equal(actual, expected);
});

test('findById should return the item matching the ID', (expect)=>{
    const expected = {
        id: '5',
        name: 'Staghorn Fern',
        img: './assets/Staghorn_Fern.jpeg',
        type: 'Fern',
        color: 'Green & Yellow',
        careLevel: 'Easy',
        toxic: false,
        sunlight: 'Part Sun, Part Shade',
        price: '15.00'
    }
    const actual = findById('5', plants);
    expect.deepEqual(actual, expected);
})
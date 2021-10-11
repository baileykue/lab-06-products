// IMPORT MODULES under test here:
import { renderPlant } from '../renderProduct.js';
import { plants } from '../productList.js';

const test = QUnit.test;

test('function should return a div, h2, button, and img', (expect) => {
   
    const expected = '<div class="plant-list"><h2>Croton</h2><img src="./assets/Croton.jpeg"><button id="3">Add To Cart</button></div>';
    const croton = plants[2];

    const actual = renderPlant(croton).outerHTML;


    expect.equal(actual, expected);
});


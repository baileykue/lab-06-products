// IMPORT MODULES under test here:
import { renderPlant } from '../renderProduct.js';
import { plants } from '../data/productList.js';
import { findById, calcOrderTotal, getCart, addItem, removeCart } from '../utils.js';
import { renderLineItems } from '../cart/renderLineItems.js';

const test = QUnit.test;

test('function should return a div, h2, button, p tags, and img', (expect) => {
   
    const expected = `<div class="plant-list"><h2>Croton</h2><img src="./assets/Croton.jpeg"><p>This plant is a Evergreen Shrub, prefers Part Sun. 
    Grows in beautiful shades of Green, Yellow, &amp; Pink and has a care level of Moderate.</p><p>$13.00</p><p class="hidden"></p><button id="3" class="add-button">Add To Cart</button></div>`;
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
        price: 15.00
    };
    const actual = findById('5', plants);
    expect.deepEqual(actual, expected);
});

test('renderLineItems should return tdName, tdQty, tdPrice, tdTotal', (expect)=>{
    const fakeCart = [{ id: '5', qty: 1 }];
    
    
    const expected = '<tr><td>Staghorn Fern</td><td>$15.00</td><td>1</td><td>$15.00</td></tr>';

    const staghornFern = fakeCart[0];

    const actual = renderLineItems(staghornFern).outerHTML;

    expect.equal(actual, expected);
    
});


test('calcOrderTotal should return the total sum of individual item totals', (expect)=>{
    const fakeCart = [
        { id: '2', qty: 1 },
        { id: '4', qty: 1 }
    ];
    
    const expected = 18;

    const actual = calcOrderTotal(fakeCart, plants);

    expect.equal(actual, expected);
});

test('getCart should return the cart if it exists', (expect)=>{
    const fakeCart = [
        { id: '2', qty: 3 },
        { id: '4', qty: 2 }
    ];

    localStorage.setItem('CART', JSON.stringify(fakeCart));

    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty array if the cart is empty', (expect)=>{
    localStorage.removeItem('CART');
    
    const cart = getCart();

    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity if item already in cart', (expect)=>{
    const fakeCart = [
        { id: '2', qty: 3 },
        { id: '4', qty: 2 }
    ];

    localStorage.setItem('CART', JSON.stringify(fakeCart));

    addItem('2');
    const cart = getCart();
    const expected = [
        { id: '2', qty: 4 },
        { id: '4', qty: 2 }
    ];

    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not alreay there', (expect)=>{
    localStorage.removeItem('CART');

    addItem('1');
    const cart = getCart();
    const expected = [{ id: '1', qty:1 }];

    expect.deepEqual(cart, expected);
});

test('clearCart should completely empty cart and reset both pages', (expect)=>{
    const cart = getCart();
    
    addItem('3');

    removeCart();

    const expected = [];

    expect.deepEqual(cart, expected);

});
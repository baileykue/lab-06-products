import { renderLineItems } from './renderLineItems.js';
import { calcOrderTotal, getCart, getProducts, removeCart } from '../utils.js';
import { toUSD } from '../utils.js';

const cart = getCart();
const plants = getProducts();

const tbody = document.getElementById('table-body');
// const tfoot = document.getElementById('table-foot');

for (let cartItem of cart){
    const cartList = renderLineItems(cartItem);
    tbody.append(cartList);
}

const orderTotal = calcOrderTotal(cart, plants);

const tdOrderTotal = document.getElementById('order-total');

tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('place-order');

orderButton.addEventListener('click', ()=>{
    removeCart();
    window.location.replace('..');
});


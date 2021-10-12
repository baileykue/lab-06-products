import { cart } from '../data/cart-data.js';
import { renderLineItems } from './renderLineItems.js';
import { plants } from '../data/productList.js';
import { calcOrderTotal } from '../utils.js';
// import { toUSD } from '../utils.js';


const tbody = document.getElementById('table-body');
// const tfoot = document.getElementById('table-foot');

for (let cartItem of cart){
    const cartList = renderLineItems(cartItem);
    tbody.append(cartList);
}

const orderTotal = calcOrderTotal(cart, plants);

const tdOrderTotal = document.getElementById('order-total');

tdOrderTotal.textContent = orderTotal;


import { cart } from '../data/cart-data.js';
import { renderLineItems } from './renderLineItems.js';
import { findById } from '../utils.js';


const tbody = document.getElementById('table-body');
const tfoot = document.getElementById('table-foot')

for (let cartItem of cart){
    const cartList = renderLineItems(cartItem);
    tbody.append(cartList);
}


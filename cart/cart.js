import { plants } from '../data/productList.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const plantData = findById(cartItem.id, plants);

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = plantData.name;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = plantData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = plantData.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty + plantData.price;
    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}
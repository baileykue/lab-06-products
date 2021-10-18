export function findById(id, items){

    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calcOrderTotal(cart, plants){
    let orderTotal = 0;
    for (let item of cart){
        const plant = findById(item.id, plants);
        orderTotal = orderTotal + plant.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    let newItem;
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
    if (newItem) {
        return newItem.qty;
    } else { return cartItem.qty; }
}


export function removeCart(){
    return localStorage.removeItem('CART');
}

import { plants } from '../data/productList.js';

export function getProducts(){
    const lsProducts = localStorage.getItem('PRODUCTS');

    if (!lsProducts){
        const plantsString = JSON.stringify(plants);
        localStorage.setItem('PRODUCTS', plantsString);
    }
}
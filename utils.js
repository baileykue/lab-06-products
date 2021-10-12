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
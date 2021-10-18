import { addProducts } from '../utils.js';


const form = document.getElementById('product-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
    const newPlant = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        type: data.get('type'),
        color: data.get('color'),
        careLevel: data.get('careLevel'),
        sunlight: data.get('sunlight'),
        price: Number(data.get('price'))
    };
    addProducts(newPlant);
    alert('New plant has been added!');
});

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', ()=>{
    window.location.reload();
});
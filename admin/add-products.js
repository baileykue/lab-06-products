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
        toxic: data.get('toxic'),
        sunlight: data,
        price: 10
    }
})
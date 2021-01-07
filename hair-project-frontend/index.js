const BASE_URL = "http://localhost:3000"

window.addEventListener("DOMContentLoaded", () => {
    gotProducts()
})

function getProducts() {
    let main = document.getElementById('main')
    fetch(BASE_URL + '/products')
    .then(res => res.json())
    .then(products => products.map(product => {
        console.log(products)
        main.innerHTML += `
        
        `
    }).join("")
)}

<li>
    <a href="a" data-id="${product.id}">${product.name}</a>
</li>
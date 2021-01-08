const BASE_URL = "http://localhost:3000"

window.addEventListener("DOMContentLoaded", () => {
    gotProducts()
})

//index view
function getProducts() {
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + '/products') //goes to backend to grab products
    .then(res => res.json())
    .then(products => {
        products.map(product => {
        console.log(products)
        main.innerHTML += `
        <li>
            <a href="a" data-id="${product.id}">${product.name}</a>
        </li>
        `
        })
        clicksToLinks()
    })
}

function clicksToLinks(){
    const products = document.querySelectorAll("li a")
    products.forEach(product => {
        product.addEventListener('click', displayProduct)
    })
}

function displayProduct(p){
    console.log(p.target)
}
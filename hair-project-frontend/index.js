const BASE_URL = "http://localhost:3000"

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('show-product-form').addEventListener('click', displayCreateForm)
    document.getElementById('products').addEventListener('click', getProducts)
    getProducts()
})

function displayCreateForm(){
    let formDiv = document.querySelector("#product-form")
    let html = `
        <form>
            <label>Name</label>
            <input type="text" id="name">
            <input type="submit">
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector("form").addEventListener(`submit`, createProduct)
}

function clearForm(){
    let formDiv = document.querySelector("#product-form")
    formDiv.innerHTML = ""
}

function createProduct(e){
    e.preventDefault()

    console.log(e)
}


//index view
function getProducts() {            //index
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + '/products')   //sends request to return a promise(backend to retrieve products)
    .then(res => res.json())        //accesses the response and returns it in json format
    .then(products => {             // promise is resolved and displayed  to the DOM
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

function displayProduct(p){         //show route
    console.log(p.target)
    let id = p.target.dataset.id
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + `/products/${id}`)         
    .then(resp => resp.json())
    .then(todo => {
        main.innerHTML = `
        <h3>${product.name}</h3>
        
        <a href="a" data-id="${product.id}">${product.name}</a>
        ${ingredient.name}
        `
        product.ingredients.forEach(ingredient => {     
            console.log(ingredient.name);
        })
    })
}


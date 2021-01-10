// const BASE_URL = "http://localhost:3000"

// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('show-product-form').addEventListener('click', displayCreateForm)
//     document.getElementById('products').addEventListener('click', getProducts)
//     document.getElementById('ingredients').addEventListener('click', getIngredients)

//     getProducts()
// })

const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    bindEventListeners()
    renderProducts()
}

function bindEventListeners() {
    document.getElementById('show-product-form').addEventListener('click', displayCreateForm)
    document.getElementById('products').addEventListener('click', renderProducts)
    document.getElementById('ingredients').addEventListener('click', renderIngredients)
}


async function renderProducts() {
    const products = await apiService.fetchProducts()
    main.innerHTML = ""
    products.map(product => {
        const newProduct = new Product(product)
        main.innerHTML += newProduct.render()
    })
    clicksToLinks()
}

function displayCreateForm(){
    let formDiv = document.querySelector("#product-form")
    let html = `
        <form>
            <label>Name</label>
            <input type="text" id="name">
            <input type="text" id="ingredientName">
            <input type="text" id="ingredientDescription">
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

async function createProduct(e){
    e.preventDefault()
    let main = document.getElementById('main')
    let product = {
        name: e.target.querySelector("#name").value,
        ingredientName: e.target.querySelector("#ingredientName").value,
        ingredientDescription: e.target.querySelector("#ingredientDescription").value
    }

    let data = await apiService.fetchCreateProduct(product)
    let newProduct = new Product(product)
    main.innerHTML += newProduct.render()
    clicksToLinks()
    clearForm()
}


function clicksToLinks(){
    const products = document.querySelectorAll("ul a")
    products.forEach(product => {
        product.addEventListener('click', displayProduct)
    })
}

async function displayProduct(e){         
    console.log(e.target)
    let id = e.target.dataset.id
    const data = await apiService.fetchProduct(id)
    const product = new Product(data)
    main.innerHTML = product.renderProduct()
    document.getElementById('delete-product').addEventListener(`click`, removeProduct)
}

async function removeProduct(event){
    let id = event.target.dataset.id
    const data = await apiService.fetchRemoveProduct(id)
     .then(data => {
         renderProducts()
     })

}

async function renderIngredients() {
    const ingredients = await apiService.fetchIngredients()
    main.innerHTML = ""
    ingredients.map(ingredient => {
        const newIngredient = new Ingredient(ingredient)
        main.innerHTML += newIngredient.render()
    })
    ingredientsClicksToLinks()
}

// function getIngredients() {          
//     let main = document.getElementById('main')
//     main.innerHTML = ""
//     fetch(BASE_URL + '/ingredients')   
//     .then(res => res.json())        
//     .then(ingredients => {             
//         ingredients.map(ingredient => {
//         console.log(ingredients)
//         main.innerHTML += `
//         <li>
//             <a href="#" data-id="${ingredient.id}">${ingredient.name}</a>
//         </li>
//         `
//         })
//         ingredientsClicksToLinks()
//     })
// }

function ingredientsClicksToLinks(){
    const products = document.querySelectorAll("li a")
    products.forEach(product => {
        product.addEventListener('click', displayIngredients)
    })
}

async function displayIngredients(e){         
    console.log(e.target)
    let id = e.target.dataset.id
    const data = await apiService.fetchIngredient(id)
    const ingredient = new Ingredient(data)
    main.innerHTML = ingredient.renderIngredient()
}

// function displayIngredients(e){        
//     console.log(e.target)
//     let id = e.target.dataset.id
//     let main = document.getElementById('main')
//     main.innerHTML = ""
//     fetch(BASE_URL + `/ingredients/${id}`)         
//     .then(resp => resp.json())
//     .then(ingredient => {
//         main.innerHTML = `
//         <h3>Here's a list of all the ingredients you've logged so far!</h3>

//         <h4>${ingredient.name}</h4>
//         <ul>
//         <li>${ingredient.description}

//         `
//         // product.ingredients.forEach(ingredient => {     
//         //     console.log(ingredient.name);
//         // })
//     })
// }

init()

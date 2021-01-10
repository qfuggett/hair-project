class ApiService {
    constructor(){
        this.baseURL = 'http://localhost:3000'
    }

    async fetchProducts(){
        let res = await fetch(this.baseURL + '/products')
        let data = await res.json()
        return data
    }

    async fetchProduct(id){         
        let res = await fetch(this.baseURL + `/products/${id}`)
        let data = await res.json()
        return data
    }
}




console.log(e.target)
        let id = e.target.dataset.id
        let main = document.getElementById('main')
        main.innerHTML = ""
        fetch(BASE_URL + `/products/${id}`)         
        .then(resp => resp.json())
        .then(product => {
            main.innerHTML = `
            <h3>${product.name}</h3> 
            <hr>
            <br>
            <button id="delete-product" data-id="${product.id}">Delete</button>
            `
            document.getElementById('delete-product').addEventListener(`click`, removeProduct)
    
            product.ingredients.forEach(ingredient => {     
                const li = document.createElement('li')
                li.innerHTML = ingredient.name
                main.appendChild(li)
            })
        })
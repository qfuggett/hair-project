class ApiService {
    constructor(){
        this.baseURL = 'http://localhost:3000'
    }

    getProducts() {          
        main.innerHTML = ""
        // fetch(BASE_URL + '/products')   
        // .then(res => res.json())      
        fetchProducts()  
        .then(products => {             
            products.map(product => {
            console.log(products)
            main.innerHTML += `
            <ul>
                <a href="#" data-id="${product.id}">${product.name}</a>
            <ul>
            `
            })
            clicksToLinks()
        })
    }
}


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

    async fetchCreateProduct(productData){
        let configObj = {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + `/products`, configObj)
        let data = await res.json()
        return data
    }

    async fetchRemoveProduct(id) {
        let configObj = {
            method: `DELETE`, 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + `/products/${id}`, configObj)
    }

    async fetchCreateIngredient(ingredientData){
        let configObj = {
            method: 'POST',
            body: JSON.stringify(ingredientData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let id = ingredientData.id
        binding.pry
        let res = await fetch(this.baseURL + `/products/${id}/ingredients`, configObj)
        let data = await res.json()
        return data
    }

    async fetchIngredients(){
        let res = await fetch(this.baseURL + '/ingredients')
        let data = await res.json()
        return data
    }

    async fetchIngredient(id){         
        let res = await fetch(this.baseURL + `/ingredients/${id}`)
        let data = await res.json()
        return data
    }

}

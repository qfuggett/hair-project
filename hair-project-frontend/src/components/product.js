class Product {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.ingredients = data.ingredients        
    }


    render() {
        return `
        <p>
        <a href="#" class="product-id" data-id="${this.id}">${this.name}</a>
        </p>
        `
    }

    renderProduct() {
        let links = this.ingredients.map(ingredient => {
            return `
                <a href="#" class="product-ingredient" data-id="${ingredient.id}">${ingredient.name}</a><br/>
            `
        }).join("")
        
        return `
            <h3>${this.name}</h3> 
            <p>
            <button id="create-ingredient" class="add-ingredient" data-id="${this.id}">Add An Ingredient</button>
            <p>
            <hr>
            <p>
            ${links}
            <p>
            <button id="delete-product" class="delete-product" data-id="${this.id}">Remove this Product</button>
            `
    }
}

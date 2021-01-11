class Product {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.ingredients = data.ingredients        
    }


    render() {
        return `
        <ul>
            <a href="#" data-id="${this.id}">${this.name}</a>
        <ul>
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
            <br>
            <button id="create-ingredient" data-id="${this.id}">Add An Ingredient</button>
            <hr>
            <p>
            ${links}
            <p>
            <button id="delete-product" data-id="${this.id}">Remove this Product</button>
            `
    }
}

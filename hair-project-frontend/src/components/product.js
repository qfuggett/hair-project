class Product {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.ingredients = data.ingredients.map(ingredient => {
            return ingredient.name
        })        
    }


    render() {
        return `
        <ul>
            <a href="#" data-id="${this.id}">${this.name}</a>
        <ul>
        `
    }

    renderProduct() {
        return `
            <h3>${this.name}</h3> 
            <br>
            <button id="create-ingredient" data-id="${this.ingredients}">Add An Ingredient</button>
            <hr>
            <p>
            ${this.ingredients}
            <p>
            <button id="delete-product" data-id="${this.id}">Remove this Product</button>
            `
    }
}
// this.ingredients.forEach(ingredient => {     
//     const li = document.createElement('li')
//     li.innerHTML = ingredient.name
//     main.appendChild(li)
// }
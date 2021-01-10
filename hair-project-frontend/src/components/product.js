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
        return `
            <h3>${this.name}</h3> 
            <hr>
            <br>
            <button id="delete-product" data-id="${this.id}">Delete</button>
            `

            this.ingredients.forEach(ingredient => {     
                const li = document.createElement('li')
                li.innerHTML = ingredient.name
                main.appendChild(li)
            })
    }
}
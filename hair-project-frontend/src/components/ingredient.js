class Ingredient {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
    }

    render() {
        return `
            <li>
                <a href="#" data-id="${this.id}">${this.name}</a>
            </li>
        `
    }

    renderIngredient() {
        return `
            <h3>Here's a list of all the ingredients you've logged so far!</h3>

            <h4>${this.name}</h4>
            <li>${this.description}</li>

        `
    }

}
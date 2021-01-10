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
}
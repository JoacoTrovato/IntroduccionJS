// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    retornarPrecio() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto("Monitor curvo de 49 Pulgadas", 800, true);
const producto3 = new Producto("Tablet", 500, false);

// Herencia 

class Libro extends Producto {
    constructor(nombre, precio, ISBN) {
        super(nombre, precio);
        this.ISBN = ISBN;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es de ${this.ISBN}`;
    }
}

const libro = new Libro("JavascScript", 2520, "301095251220");

console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
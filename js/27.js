// POO ==> Programación Orientada a Objetos


/* Object Literal */
const producto = {
    nombre: "Tablet",
    precio: 500
}

/* Object Constructor */

function Cliente(nombre, apellido) {
    return `El Cliente ${this.nombre} &{this.apellido}`;
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que solo se utilizan en un objeto en específico.

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
} 

const producto2 = new Producto("Monitor curvo de 49 Pulgadas", 800, true);
const producto3 = new Producto("Tablet", 500, false);
const producto4 = new Producto("NoteBook Lenovo 15,6 Pulgadas", 1500, true);

console.log(producto2);
console.log(producto2.formatearProducto);
console.log(producto3.formatearProducto);
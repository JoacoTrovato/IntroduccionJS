//"use strict"; // Correr JS en modo estricto
// Objetos

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
};

// Objetct.freeze

Object.freeze(producto); // No podemos modificarlo con este método

producto.imagen = "Imagen.jpg";

console.log(Object.isFrozen(producto)); // Nos dice si el objeto puede o no modificrse (true o false)

console.log(producto);

// Object.seal

Object.seal(producto); // Seal permite modificar propiedades pero no agregar, ni eliminar

producto.imagen = "Imagen.jpg";

console.log(Object.isSealed(producto));
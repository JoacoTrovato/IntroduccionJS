// Objetos

const nombreProducto = "Monitor de 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
};

console.log(producto);

// Para accceder a sus valores se pone el nombre del objeto.propiedad

console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);

console.log(producto["precio"]); // Así también se accede a las propiedades de un objeto

// Agregar propiedades al objeto
producto.imagen = "Imagen.jpg";

// Eliminar propiedades del objeto
delete producto.disponible;
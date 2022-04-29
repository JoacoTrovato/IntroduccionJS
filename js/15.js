// Array methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    { nombre: "Monitor de 20 Pulgadas", precio: 500 },
    { nombre: "Televisión de 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audífonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Notebook", precio: 800 },
]

// forEach

meses.forEach(function(mes) { // Nos devuelve todos los meses
    console.log(mes);
});

meses.forEach(function(mes) { // Nos devuelve si existe el mes que nosotros especifiquemos 
    if(mes === "Marzo") {
        console.log("Marzo si existe");
    }
});

// Includes

let resultado = meses.includes("Marzo") // Devuelve true o false pero no sirve para arrays de objetos

// Some es ideal para arreglos de objetos

resultado = carrito.some(function(producto) { // Retorna true o false si el objeto con las propiedades que le pasamos se encuentra
    return producto.nombre === "Celular"
})

// Reduce 

resultado = carrito.reduce(function(total, producto) { // Para calcular el precio de todos los productos juntos
    return total + producto.precio
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter

resultado = carrito.filter(function(producto) { // Retorna los productos con precios mayores a 400
    return producto.precio > 400
}); 

resultado = carrito.filter(function(producto) { // Retorna los productos con nombre "Celular"
    return producto.nombre === "Celular"
}); 

resultado = carrito.filter(function(producto) { // Retorna los productos que no tienen nombre "Celular"
    return producto.nombre !== "Celular"
});
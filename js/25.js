const carrito = [
    { nombre: "Monitor de 20 Pulgadas", precio: 500 },
    { nombre: "Televisión de 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audífonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Notebook", precio: 800 },
];

// forEach ==> No crea un nuevo arreglo, solamente recorre y muestra resultados

carrito.forEach(function(producto) {
    console.log(producto)
})

// map ==> Crea un nuevo arreglo a partir de las propiedades que mapeamos

const arreglo = carrito.map(function(producto) {
    return `${producto.nombre} - ${producto.precio}`
})

console.log(arreglo);
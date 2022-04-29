// Arrow Functions

const sumar = function(n1, n2) {
    console.log(n1 + n2)
}

sumar(5, 10);

const sumar2 = (n1, n2) => console.log(n1 + n2); // Arrow Function

sumar2(5, 10);

const aprendiendo = (tecnologia) => { // Se pueden escribir así con corchetes y en más líneas 
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo("JavaScript");

const aprendiendo2 = tecnologia => console.log(`Aprendiendo ${tecnologia}`) // O se pueden escribir en una sola línea sin corchetess

aprendiendo2("JavaScript");

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

// forEach con arrow function

meses.forEach((mes) => { // Nos devuelve todos los meses
    console.log(mes);
});

meses.forEach((mes) => { // Nos devuelve si existe el mes que nosotros especifiquemos 
    if(mes === "Marzo") {
        console.log("Marzo si existe");
    }
});

// Some es ideal para arreglos de objetos

resultado = carrito.some((producto) => producto.nombre === "Celular"); // Some con arrow function

// Reduce 

resultado = carrito.reduce((total, producto) => { // Para calcular el precio de todos los productos juntos
    return total + producto.precio
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Reduce con arrow function

// Filter con arrow function

resultado = carrito.filter((producto) => producto.precio > 400); 

resultado = carrito.filter((producto) => producto.nombre === "Celular"); 

resultado = carrito.filter((producto) => producto.nombre !== "Celular");
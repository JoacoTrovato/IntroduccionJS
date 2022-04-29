// For Loop

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`El Número ${i} es PAR`);
    } else {
        console.log(`El Número ${i} es IMPAR`);
    }
}

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

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// While Loop ==> Comprueba la condición, de no ser true no se ejecuta

let i = 0; // Indice

while(i <= 100) { // Condición
    if(i % 2 === 0) {
        console.log(`El Número ${i} es PAR`);
    } else {
        console.log(`El Número ${i} es IMPAR`);
    }
    i++; // Incremento
}

// Do While Loop ==> Si o si se ejecuta una vez

let a = 0;

do {
    console.log(a);
    a++;
} while(a < 10);
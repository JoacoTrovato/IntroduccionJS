// Arrays o Arreglos

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const meses1 = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

console.log(meses);
console.table(meses);

const arreglo = ["Hola", 10, true, "Si", null, {nombre: "Joaquín", trabajo: "Programador"}, [1,2,3]];

console.log(arreglo);

// Como acceder a los valores de una Array

console.log(numeros[4]); // 50
console.log(numeros[2]); // 30
console.log(numeros[200]); // undefined

// Conocer la extensión de un arreglo

console.log(meses.length);

numeros.forEach(function(numero) {
    console.log(numero)
});

// Agregar elementos al arreglo

numeros[5] = 60; // numeros tenia estos valores 10,20,30,40,50 y ahora agrega 60 en la última posición --> 10,20,30,40,50,60
numeros.push(70); // Push agrega elementos al final de array
numeros.push(70,80,90);
numeros.unshift(-10,-20,-30); // Agrega elementos al inicio del arreglo

console.log(numeros);

// Para eliminar elementos de un arreglos

meses.pop(); // Elimina el último elemento de un arreglo
meses.shift(); // Elimina el primer elemento de un arreglo

meses.splice(2, 1); /* De "Enero", "Febrero", "Marzo", "Abril", "Mayo" eliminaría a Marzo porque
                    está en la posición 2, el segundo elemento, en este caso el 1,
                    indica la cantidad de elementos posteriores que va a eliminar, si ponemos uno,
                    sólo elimina el elemento sobre el que está posicionado */

const nuevoArreglo = [...meses, "Junio"]; // Agrega Junio al final --> Simula push
const nuevoArreglo2 = ["Junio", ...meses]; // Agrega Junio al principío --> Simula unshift

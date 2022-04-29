// Strings o Cadenas de Texto

const producto = "Monitor de 20 Pulgadas";
const producto2 = String("Monitor de 30 Pulgadas");
const producto3 = new String("Monitor de 40 Pulgadas");

console.log(producto);
console.log(producto2);
console.log(producto3);

const tweet = "Aprendiendo JavaScript para desarrollar mejores prácticas y proyectos";
const producto4 = "Monitor HD";
const email = "correo@correo.com";

// length es para saber la extensión
console.log(tweet.length);
console.log(producto4);

// IndexOf (retorna posición)
console.log(tweet.indexOf("JavaScript")); // Retorna valor es porque existe la palabra
console.log(producto4.indexOf("Tablet")); // Retorna -1 es porque no existe la palabra
console.log(email.indexOf("@"));

// Includes (retorna true o false)
console.log(tweet.includes("JavaScript")); // Retorna true es porque existe la palabra
console.log(producto4.includes("Tablet")); // Retorna false es porque no existe la palabra


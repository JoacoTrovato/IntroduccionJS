// Promesas

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve("Usuario Autenticado"); // EL PROMISE SE CUMPLE
    } else {
        reject("No se pudo iniciar sesión"); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then(function(resultado) {
        console.log(resultado);
    })
    .catch(function(error) {
        console.log(error);
    })

// En los Promises existen tres posibles respuestas
// Pending: No se ha cumplido la promesa pero tampoco se ha rechazado
// Fulfilled: La promesa se cumplió
// Rejected: Se ha rechazado la promesa o no se cumplió
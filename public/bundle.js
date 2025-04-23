'use strict';

const listaEstadosEEUU = () => {
    return ["New York", "New Yersey", "Florida", "California"]
};

const lenguaje = 'JavaScript';

// export default () => {
//     return {
//         nombre: 'Carlitos',
//         correo: 'carlito@example.com'
//     }
// }

const obtenerUsuario01 = () => {
    return {
        nombre: 'Juan',
        correo: 'Juan@example.com'
    }
};

console.log("Empty Export desde JS");

console.log(lenguaje);
console.log(listaEstadosEEUU());
console.log(obtenerUsuario01());

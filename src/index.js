
//exportacion mediante Named Imports
/*import { nombre } from "./namedExports";
import { obtenerPosts } from "./namedExports";
import { pais } from "./namedExports";
import { listaEstadosEEUU } from "./namedExports";

//poniendole un alias
import { lenguaje as le } from "./namedExports";

console.log(`Mi nombre es: ${nombre}`)
console.log(`Mis post son: ${obtenerPosts()}`)
console.log(pais);
console.log(listaEstadosEEUU());
console.log(`Estoy aprendiendo ${le}`)*/

//exportacion mediante NamesPace Imports
import * as datos from './namedExports'
console.log(datos.lenguaje)
console.log(datos.listaEstadosEEUU())

//exportacion mediante default Imports
import obtenerUsuario from './defaultExport'
console.log(obtenerUsuario());

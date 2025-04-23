
// exportacion de variables
export const nombre = 'Jhos'

//exportacion de funcion
export const obtenerPosts = () => {
    return ['Post 01', 'Post 02']
}

//otra forma de exportas post
const pais = 'EE.UU'
const listaEstadosEEUU = () => {
    return ["New York", "New Yersey", "Florida", "California"]
}

const lenguaje = 'JavaScript'

export { pais, listaEstadosEEUU,lenguaje }
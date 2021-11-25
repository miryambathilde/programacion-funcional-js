// función reduce
//const reducer = (acumulador, valorActual) => nuevoAcumulador

const reducer = [1, 2].reduce((acc, el) => acc + el, 0);
//console.log(reducer);

const numeros = [1, 2, 3, 4, 5];
/**
 * el 0 es el valor inicial que le damos
 * aqui nos devuelve 15 que es la suma de los valores de los elementos de la array
 */
const resultado = numeros.reduce((acc, el) => acc + el, 0);
console.log(resultado);

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'}
]

const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}))

console.log(indexed['Pelusa']);

const anidado = [1, [2,3], 4, [5]];

// [1,2,3,4,5]
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);
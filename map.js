const suma = (ns) => {
    let acumulado = 0;
    for (index = 0; index < ns.length; index++) {
        acumulado += ns[index];
    }
    return acumulado
}

const numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
//multiplicar por 2
const multiplicados = numeros.map(x => x * 2);

// a pares de arrays
const parejas = numeros.map(x => [x, x])
console.log(multiplicados);
console.log(parejas);

//suma
const resultado = suma(numeros);
console.log(resultado);

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'}
]

// edad promedia de las mascotas del arrays
const edades = mascotas.map(x => x.edad);
console.log(edades);
const resultado1 = suma(edades)
console.log('La suma de edades es: ' + resultado1);
//promedio
console.log(resultado1 / edades.length + ' es el promedio de edades');
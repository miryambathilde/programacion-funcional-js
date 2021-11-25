const numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'}
]

const numerosFiltrados = numeros.filter(x => x < 8)
console.log(numerosFiltrados);

console.log(numeros);

const perros =  mascotas.filter(x => x.tipo === 'perro');
console.log(perros);

console.log(mascotas);
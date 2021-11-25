/**
 * Aqui tenemos nuestro trampolin para implementarlo en la función suma
 * @param {*} fn 
 * @returns 
 */
const trampolin = fn => (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
        result = result()
    }
    return result
}

/**
 * 
 * @param {*} number 
 * @param {*} sum 
 * @returns 
 * 
 * () => se inserta antes de suma para trampolinizar nuestra función
 */

const suma = (number, sum = 0) => (
    number === 0 
    ? sum 
    : () => suma (number - 1, sum + number)
);

/**
 * aqui llamamos a nuestra función trampolin y le pasamos la funcion suma
 */
const tsuma = trampolin(suma)
const r = tsuma(10000);
console.log(r);

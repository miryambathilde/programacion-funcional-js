/**
 * CLOSURES = ALCANCE
 */

const x = 'Fluffy'

const f = () => {
    const y = 'Kins'
    console.log(x, y);
}

f();

require ('isomorphic-fetch');

const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`

    return ({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x)
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
    })
}

const base = crudder('https://jsonplaceholder.typicode.com')
const todos = base('todos')
const users = base('users')

todos.get().then(x => console.log(x[0]));
users.get().then(x => console.log(x[0]));
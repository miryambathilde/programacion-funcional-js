const conteoRegresivo = (a) => {
    if (a < 0) return
    console.log(a)
    return conteoRegresivo(a - 1)
}

conteoRegresivo(10);
console.log(conteoRegresivo);

const axios = require('axios');

const llamarApi = async (url, llamados = 0) => {
    try {
        const data = await axios.get(url)
        console.log(data);
        return data
    } catch (err) {
        if (llamados > 1) {
            return '';
        }
        console.log(err);
        return llamarApi(url, llamados + 1)
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')
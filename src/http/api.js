import axios from 'axios';


// http://sujeitoprogramador.com/r-api/?api=filmes
const Api = axios.create({
    baseURL : 'http://sujeitoprogramador.com/'
})

export default Api;
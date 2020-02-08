/* Importando a dependencia axios, principal responsavel por fazer a
comunicação com o backend da aplicação. */
import axios from 'axios';

/* Atribuindo o metodo axios.create a constante chamada api, contendo a
URL do backend */
const api = axios.create({
    baseURL: "http://localhost:3333"
})

//exportando a constante padrão 
export default api;
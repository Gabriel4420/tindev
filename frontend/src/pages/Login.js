/* importando o modulo react e atraves da desestruturação o modulo
useState da biblioteca react */
import React, {useState} from 'react';

//importando a logo do app
import logo from '../assets/tindev-logo (1).svg';

//importando o arquivo de estilização do app
import './css/login.css';

//importando o arquivo de comunicação com a api.
import api from '../services/api';

/* exportando a função de Login que carrega um objeto como parametro
chamado history, responsavel por passar o id do usuario na rota
da aplicação  */
export default function Login({ history }){

    /* Atribuindo a função de useState a uma const de array que contem 
    as propriedades username, e setUsername */
    const [username, setUsername] = useState('');

    /* Função assincrona responsavel por prever uma ação de submit do 
    usuario como o pressionar de um button */
    async function handleSubmit(e){

        /* Apartir do momento que a ação foi executada, a função prevent
        default é chamada */
        e.preventDefault();

        /* A resposta espera o metodo post da api, com a rota de devs e dentro
        dessa rota é passado a propriedade username do array de useState. */
        const response = await api.post('/devs', {
            username
        });
        /* É feita uma destructering para pegar o valor do id
        do response.data.
        */
        const {_id} = response.data;

        //teste para verificar se a resposta vai retornar o id do usuario.
        console.log(response);

        //É passado o id do usuario para a proxima rota
        history.push(`/dev/${_id}`);
    }

    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo tindev"></img>
                <input 
                placeholder="Digite seu usuario do GitHub"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">entrar</button>
            </form>
           
        </div>
        

    );
}